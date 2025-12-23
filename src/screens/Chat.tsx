import moment from 'moment';
import { useEffect, useState, useRef } from 'react';
import {
  FlatList,
  Image,
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ActivityIndicator,
} from 'react-native';
import TopHeader from '../components/Topheader';
import { height, width } from '../utilities';
import { colors } from '../utilities/colors';
import images from '../assets/Images';
import CustomTextInput from '../components/CustomTextInput';
import { fontFamily } from '../assets/Fonts';
import { fontSizes } from '../utilities/fontsizes';
import { Picker } from "emoji-mart-native"
import { apiHelper } from '../services';
import { io, Socket } from 'socket.io-client';
import { RootState } from '../redux/store';
import { useSelector } from 'react-redux';
import Toast from 'react-native-toast-message';

type Message = {
  id?: number;
  text: string;
  time: moment.Moment;
  isSender?: boolean;
  status?: 'sending' | 'sent' | 'failed';
};

type ChatItem = {
  type: 'message' | 'date';
  data: Message | string;
};

let chatSocket: Socket | null = null;
let currentSocketChatId: number | null = null;
let messageCallbacks: Array<(message: any) => void> = [];

const getOrCreateSocket = (userId: number, chatId: number) => {
  console.log('🔌 Socket requested for:', { userId, chatId, currentSocketChatId });

  if (chatSocket && chatSocket.connected && currentSocketChatId === chatId) {
    console.log('✅ Reusing existing socket connection');
    return chatSocket;
  }

  if (chatSocket && currentSocketChatId !== chatId) {
    console.log('🔄 Chat changed, cleaning up old socket');
    disconnectChatSocket();
  }

  if (!chatSocket || !chatSocket.connected) {
    console.log('🆕 Creating new socket connection');

    chatSocket = io('http://18.204.175.233:3001/user-chat', {
      query: { userId },
      transports: ['websocket', 'polling'],
      reconnection: true,
      reconnectionAttempts: 5,
      reconnectionDelay: 1000,
      timeout: 10000,
    });

    chatSocket.on('connect', () => {
      console.log('✅ Connected to chat socket, Socket ID:', chatSocket?.id);
      currentSocketChatId = chatId;
      chatSocket?.emit('joinChat', { chatId, userId });
    });

    chatSocket.on('disconnect', (reason) => {
      console.log('❌ Disconnected from chat socket:', reason);
      currentSocketChatId = null;
    });

    chatSocket.on('connect_error', (error) => {
      console.log('🔴 Connection error:', error.message);
    });

    chatSocket.on('reconnect', (attemptNumber) => {
      console.log('🔄 Reconnected after', attemptNumber, 'attempts');
      currentSocketChatId = chatId;
      chatSocket?.emit('joinChat', { chatId, userId });
    });

    chatSocket.on('error', (error) => {
      console.log('🚨 Socket error:', error);
    });
  } else {
    currentSocketChatId = chatId;
    chatSocket?.emit('joinChat', { chatId, userId });
  }

  return chatSocket;
};

const addMessageListener = (callback: (message: any) => void) => {
  if (chatSocket) {
    chatSocket.on('newMessage', callback);
    messageCallbacks.push(callback);
  }
};

const removeAllMessageListeners = () => {
  if (chatSocket) {
    messageCallbacks.forEach(callback => {
      chatSocket?.off('newMessage', callback);
    });
    messageCallbacks = [];
  }
};

const sendMessageViaSocket = (userId: number, chatId: number, type: string, content: string) => {
  if (!chatSocket || !chatSocket.connected) {
    console.log('Socket not connected, cannot send message');
    return false;
  }

  try {
    chatSocket.emit('sendMessage', {
      userId,
      sendMessageDto: {
        chatId,
        type,
        content,
        timestamp: new Date().toISOString(),
      },
    });
    console.log('📤 Message sent via socket');
    return true;
  } catch (error) {
    console.log('Error sending via socket:', error);
    return false;
  }
};

const disconnectChatSocket = () => {
  if (chatSocket) {
    removeAllMessageListeners();
    chatSocket.disconnect();
    chatSocket = null;
    currentSocketChatId = null;
    console.log('🔌 Socket disconnected and cleaned up');
  }
};

const Chat = () => {
  const User = useSelector((state: RootState) => state.role.user);
  const userId = User?.id;

  const [messages, setMessages] = useState<Message[]>([]);
  const [currentMessage, setCurrentMessage] = useState<string>('');
  const [showEmojiPicker, setShowEmojiPicker] = useState<boolean>(false);
  const [chatId, setChatId] = useState<number | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [loadingMessages, setLoadingMessages] = useState<boolean>(false);
  const [socketConnected, setSocketConnected] = useState<boolean>(false);
  const [sendingMessages, setSendingMessages] = useState<{ [key: string]: boolean }>({});

  const flatListRef = useRef<FlatList>(null);
  const socketInitialized = useRef<boolean>(false);

  useEffect(() => {
    if (!userId || !chatId) return;

    console.log('🎯 Setting up socket for chat:', { userId, chatId });

    const socket = getOrCreateSocket(userId, chatId);

    const handleConnect = () => {
      console.log('✅ Socket connected in component');
      setSocketConnected(true);
    };

    const handleDisconnect = () => {
      console.log('❌ Socket disconnected in component');
      setSocketConnected(false);
    };

    socket.on('connect', handleConnect);
    socket.on('disconnect', handleDisconnect);

    // Set up message listener - FIXED TO PREVENT DUPLICATES
    const messageListener = (socketMessage: any) => {
      console.log('📨 New message received via socket:', socketMessage);

      if (socketMessage.chatId === chatId) {
        // SKIP OUR OWN MESSAGES - we already have them via optimistic update
        if (socketMessage.senderId === userId) {
          console.log('⏭️ Skipping own message from socket - already have it');
          return;
        }

        // This is a message from admin
        const newMsg: Message = {
          id: socketMessage.id,
          text: socketMessage.content,
          time: moment(socketMessage.createdAt || new Date()),
          isSender: false, // Always false since it's from admin
        };

        setMessages(prev => {
          // Check for duplicates just in case
          const isDuplicate = prev.some(msg =>
            msg.id === socketMessage.id ||
            (msg.text === socketMessage.content &&
              msg.time.isSame(moment(socketMessage.createdAt), 'second'))
          );

          if (isDuplicate) {
            console.log('⚠️ Duplicate admin message, skipping');
            return prev;
          }

          console.log('✅ Adding new admin message from socket');
          return [...prev, newMsg];
        });
      }
    };

    addMessageListener(messageListener);
    socketInitialized.current = true;

    return () => {
      console.log('🧹 Cleaning up component socket listeners');
      socket.off('connect', handleConnect);
      socket.off('disconnect', handleDisconnect);
      // Remove this specific message listener
      chatSocket?.off('newMessage', messageListener);
      const index = messageCallbacks.indexOf(messageListener);
      if (index > -1) {
        messageCallbacks.splice(index, 1);
      }
    };
  }, [userId, chatId]);

  const loadChatAndMessages = async () => {
    if (!userId) {
      Toast.show({
        type: 'error',
        text1: 'Error',
        text2: 'User not found. Please login again.'
      });
      return;
    }

    setLoadingMessages(true);

    try {
      console.log('📡 Fetching user chats...');
      const { response: chatResponse, error: chatError } = await apiHelper('GET', '/chat');

      if (chatError) {
        console.log('❌ Error fetching chats:', chatError);
        Toast.show({
          type: 'error',
          text1: 'Error',
          text2: chatError?.message || 'Failed to load chats'
        });
        setChatId(null);
        return;
      }

      const chatsArray = chatResponse?.data?.data || [];
      console.log('📊 Chats found:', chatsArray.length);

      let currentChatId: number | null = null;

      if (Array.isArray(chatsArray) && chatsArray.length > 0) {
        currentChatId = chatsArray[0].id;
        console.log('✅ Using chat ID:', currentChatId);
      } else {
        console.log('📝 No existing chat found');
        setChatId(null);
        return;
      }

      if (currentChatId !== chatId) {
        setChatId(currentChatId);
      }

      console.log('📥 Fetching messages for chat ID:', currentChatId);

      const { response: msgResponse, error: msgError } = await apiHelper(
        'POST',
        '/chat/messages',
        {},
        {},
        {
          chatId: currentChatId,
          next: 1,
          that: 20
        }
      );

      if (msgError) {
        console.log('⚠️ No messages yet:', msgError.message);
        setMessages([]);
      } else {
        const messagesData = msgResponse?.data?.data?.messages || [];
        console.log('✅ Messages retrieved:', messagesData.length);

        const uniqueMessagesById = new Map();

        messagesData.forEach((msg: any) => {
          uniqueMessagesById.set(msg.id, msg);
        });

        console.log('📝 Unique messages by ID:', uniqueMessagesById.size);

        const fetchedMessages: Message[] = Array.from(uniqueMessagesById.values())
          .map((msg: any) => ({
            id: msg.id,
            text: msg.content,
            time: moment(msg.createdAt),
            isSender: msg.senderId === userId,
          }))
          .sort((a, b) => a.time.valueOf() - b.time.valueOf());

        console.log('🎯 Setting messages:', fetchedMessages.length);
        console.log('Last message text:', fetchedMessages[fetchedMessages.length - 1]?.text);

        setMessages(fetchedMessages);
      }

    } catch (error: any) {
      console.log('❌ Error in loadChatAndMessages:', error);
    } finally {
      setLoadingMessages(false);
    }
  };

  const sendMessage = async () => {
    const messageText = currentMessage.trim();
    if (messageText.length === 0 || !userId) {
      return;
    }

    setLoading(true);
    const tempMessageId = Date.now();

    try {
      const optimisticMessage: Message = {
        id: tempMessageId,
        text: messageText,
        time: moment(),
        isSender: true,
        status: 'sending',
      };

      setMessages(prev => [...prev, optimisticMessage]);
      setCurrentMessage('');
      setSendingMessages(prev => ({ ...prev, [tempMessageId]: true }));

      let currentChatId = chatId;

      if (!currentChatId) {
        console.log('🆕 Creating a new chat...');

        const { response: createResponse, error: createError } = await apiHelper(
          'POST',
          'admin/chat/create',
          {},
          {},
          { adminId: 1, userId }
        );

        if (createError) {
          console.log('❌ Failed to create chat:', createError);
          throw new Error('Failed to create chat');
        }

        currentChatId = createResponse?.data?.data?.id;
        if (!currentChatId) {
          throw new Error('Chat created but no ID returned');
        }

        console.log('✅ Chat created with ID:', currentChatId);
        setChatId(currentChatId);
      }

      console.log('📤 Sending message to chat:', currentChatId);

      const { response, error } = await apiHelper(
        'POST',
        '/chat/send',
        {},
        {},
        {
          chatId: currentChatId,
          type: 'text',
          content: messageText
        }
      );

      if (error) {
        console.log('❌ Error sending message:', error);
        throw new Error(error.message || 'Failed to send message');
      }

      console.log('✅ Message sent successfully:', response?.data);

      const realMessageId = response?.data?.data?.id || response?.data?.id;
      const serverTime = response?.data?.data?.createdAt || response?.data?.createdAt;

      setMessages(prev => prev.map(msg =>
        msg.id === tempMessageId
          ? {
            ...msg,
            id: realMessageId || msg.id,
            status: 'sent',
            time: serverTime ? moment(serverTime) : msg.time
          }
          : msg
      ));

      if (currentChatId) {
        sendMessageViaSocket(userId, currentChatId, 'text', messageText);
      }

    } catch (error: any) {
      console.log('❌ Error sending message:', error);

      setMessages(prev => prev.map(msg =>
        msg.id === tempMessageId ? { ...msg, status: 'failed' } : msg
      ));

      Toast.show({
        type: 'error',
        text1: 'Error',
        text2: error?.message || 'Failed to send message'
      });
    } finally {
      setLoading(false);
      setSendingMessages(prev => {
        const newState = { ...prev };
        delete newState[tempMessageId];
        return newState;
      });
    }
  };

  const debugMessagesAPI = async () => {
    if (!chatId) return;

    console.log('🔍 DEBUGGING MESSAGES API FOR CHAT:', chatId);

    const tests = [
      { method: 'POST', url: '/chat/messages', params: { chatId, next: 1, that: 20 } },
      { method: 'POST', url: '/chat/messages', params: { chatId, page: 1, limit: 50 } },
      { method: 'POST', url: '/chat/messages', params: { chatId } },
      { method: 'GET', url: `/chat/messages?chatId=${chatId}` },
    ];

    for (const test of tests) {
      try {
        const { response, error } = await apiHelper(
          test.method,
          test.url,
          {},
          {},
          test.params
        );

        console.log(`🧪 ${test.method} ${test.url}:`, {
          success: !error,
          error: error?.message,
          data: response?.data,
          dataKeys: response?.data ? Object.keys(response.data) : [],
        });
      } catch (err) {
        console.log(`❌ ${test.method} ${test.url}:`, err);
      }
      await new Promise(resolve => setTimeout(resolve, 300));
    }
  };

  const removeDuplicateMessages = () => {
    setMessages(prev => {
      const uniqueMessages: Message[] = [];
      const seenMessages = new Set<string>();

      prev.forEach(msg => {
        const messageKey = `${msg.text}-${msg.time.valueOf()}-${msg.isSender ? 'user' : 'admin'}`;

        if (!seenMessages.has(messageKey)) {
          seenMessages.add(messageKey);
          uniqueMessages.push(msg);
        }
      });
      return uniqueMessages;
    });
  };

  useEffect(() => {
    if (userId) {
      loadChatAndMessages();
    }
    return () => {
      if (!socketInitialized.current) {
        disconnectChatSocket();
      }
    };
  }, [userId]);

  useEffect(() => {
    const hasDuplicates = messages.length > 1 &&
      messages.some((msg, index) =>
        messages.slice(index + 1).some(otherMsg =>
          msg.text === otherMsg.text &&
          msg.time.isSame(otherMsg.time, 'second') &&
          msg.isSender === otherMsg.isSender
        )
      );

    if (hasDuplicates) {
      const timer = setTimeout(() => {
        removeDuplicateMessages();
      }, 500);

      return () => clearTimeout(timer);
    }
  }, [messages]);

  const getChatData = (): ChatItem[] => {
    let chatData: ChatItem[] = [];
    let lastDate: string | null = null;

    const sortedMessages = [...messages].sort(
      (a, b) => a.time.valueOf() - b.time.valueOf(),
    );

    sortedMessages.forEach(msg => {
      const msgDate = msg.time.clone().startOf('day');
      let label: string;

      if (msgDate.isSame(moment(), 'day')) {
        label = 'Today';
      } else if (msgDate.isSame(moment().subtract(1, 'day'), 'day')) {
        label = 'Yesterday';
      } else {
        label = msgDate.format('DD MMM YYYY');
      }

      if (lastDate !== label) {
        chatData.push({ type: 'date', data: label });
        lastDate = label;
      }

      chatData.push({ type: 'message', data: msg });
    });

    return chatData;
  };

  const renderItem = ({ item }: { item: ChatItem }) => {
    if (item.type === 'date') {
      return (
        <View style={styles.dateContainer}>
          <Text style={styles.dateText}>{item.data as string}</Text>
        </View>
      );
    }

    const msg = item.data as Message;
    const isSending = msg.status === 'sending';
    const isFailed = msg.status === 'failed';

    return (
      <View
        style={[
          styles.messageContainer,
          msg.isSender ? styles.senderContainer : styles.receiverContainer,
        ]}
      >
        <Text style={styles.nameText}>{msg.isSender ? "You" : "Admin"}</Text>
        <View
          style={[
            msg.isSender ? styles.senderChatBox : styles.receiverChatBox,
            isFailed && styles.failedMessage,
          ]}
        >
          <Text
            style={
              msg.isSender
                ? styles.senderMessageText
                : styles.receiverMessageText
            }
          >
            {msg.text}
          </Text>
          {isSending && (
            <View style={styles.sendingIndicator}>
              <ActivityIndicator size="small" color={msg.isSender ? colors.white : colors.marhoon} />
            </View>
          )}
        </View>
        <Text
          style={[
            msg.isSender ? styles.sendertimeText : styles.receiverTimeText,
            isFailed && styles.failedTimeText
          ]}
        >
          {msg.time.format('h:mm A')}
          {isFailed && ' • Failed to send'}
          {isSending && ' • Sending...'}
        </Text>
      </View>
    );
  };

  const handleEmojiSelect = (emoji: any) => {
    setCurrentMessage(prev => prev + emoji.native);
  };

  return (
    <View style={{ flex: 1, backgroundColor: colors.white }}>
      <View style={{ top: height * 0.01 }}>
        <TopHeader isBack={true} isPhone={true} />
      </View>

      <View style={styles.headerMain}>
        <View style={styles.headTextMain}>
          <Image source={images.chatImg} style={styles.chatImg} />
          <View style={{ left: width * 0.04 }}>
            <Text style={styles.textOne}>Admin</Text>
          </View>
        </View>
      </View>

      <SafeAreaView style={{ flex: 1 }}>
        {loadingMessages ? (
          <View style={styles.loadingContainer}>
            <ActivityIndicator size="large" color={colors.marhoon} />
            <Text style={styles.loadingText}>Loading chat...</Text>
          </View>
        ) : (
          <>
            <FlatList
              ref={flatListRef}
              data={getChatData()}
              renderItem={renderItem}
              keyExtractor={(item, index) => `${item.type}-${index}`}
              contentContainerStyle={styles.chatList}
              inverted={false}
              onContentSizeChange={() => flatListRef.current?.scrollToEnd({ animated: true })}
              onLayout={() => flatListRef.current?.scrollToEnd({ animated: true })}
              ListEmptyComponent={
                <View style={styles.emptyContainer}>
                  <Text style={styles.emptyText}>No messages yet</Text>
                  <Text style={styles.emptySubText}>
                    Send a message to start a conversation with Admin
                  </Text>
                </View>
              }
            />
            {showEmojiPicker && (
              <View style={styles.emojiPickerContainer}>
                <Picker
                  onEmojiSelect={handleEmojiSelect}
                  showPreview={false}
                  showSkinTones={true}
                  style={{ height: height * 0.35 }}
                />
                <TouchableOpacity
                  style={styles.closeEmojiButton}
                  onPress={() => setShowEmojiPicker(false)}
                >
                  <Text style={styles.closeEmojiText}>Close</Text>
                </TouchableOpacity>
              </View>
            )}
          </>
        )}

        <View style={styles.inputContainer}>
          <CustomTextInput
            inputHeight={height * 0.07}
            inputWidth={width * 0.8}
            placeholder="Type Here..."
            placeholderTextColor={colors.darkGray}
            borderRadius={30}
            backgroundColor={colors.white}
            value={currentMessage}
            onChangeText={setCurrentMessage}
            multiline
            rightIcon={
              <TouchableOpacity>
                <Image source={images.cameraIcon} />
              </TouchableOpacity>
            }
            // leftIcon={
            //   <TouchableOpacity onPress={() => setShowEmojiPicker(prev => !prev)}>
            //     <Image source={images.emojiIcon} />
            //   </TouchableOpacity>
            // }
            onSubmitEditing={sendMessage}
          />
          <TouchableOpacity
            activeOpacity={0.6}
            onPress={sendMessage}
            disabled={loading || currentMessage.trim().length === 0}
            style={[
              styles.sendButton,
              (loading || currentMessage.trim().length === 0) && styles.disabledButton
            ]}
          >
            <Image
              source={images.sendBtn}
              style={styles.voiceBtn}
            />
          </TouchableOpacity>
        </View>
      </SafeAreaView>

      <Toast />
    </View>
  );
};

const styles = StyleSheet.create({
  textOne: {
    fontFamily: fontFamily.GilroyMedium,
    fontSize: fontSizes.sm2,
    color: colors.black,
  },
  nameText: {
    fontFamily: fontFamily.GilroyMedium,
    fontSize: fontSizes.xsm,
    color: colors.black,
    bottom: height * 0.01
  },
  chatImg: {
    width: width * 0.12,
    height: height * 0.09,
    resizeMode: 'contain',
  },
  headerMain: {
    bottom: height * 0.07,
    width: width * 0.72,
    left: width * 0.3,
    padding: 10,
  },
  headTextMain: {
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: width * 0.03,
  },
  chatList: {
    paddingHorizontal: width * 0.05,
    paddingVertical: 10,
  },
  dateContainer: {
    alignSelf: 'center',
    alignItems: "center",
    marginVertical: 10,
    borderRadius: 20,
    padding: 10,
    backgroundColor: colors.lightGray,
    width: width * 0.25,
  },
  dateText: {
    fontSize: fontSizes.sm,
    fontFamily: fontFamily.GilroyRegular,
    color: colors.black,
  },
  messageContainer: {
    marginVertical: 8,
    maxWidth: '80%',
  },
  senderContainer: {
    alignSelf: 'flex-end',
    alignItems: 'flex-end',
  },
  receiverContainer: {
    alignSelf: 'flex-start',
    alignItems: 'flex-start',
  },
  senderChatBox: {
    backgroundColor: colors.marhoon,
    padding: 12,
    borderBottomRightRadius: 0,
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,
    borderBottomLeftRadius: 15,
    flexDirection: 'row',
    alignItems: 'center',
  },
  receiverChatBox: {
    backgroundColor: colors.lightGray,
    padding: 12,
    borderRadius: 20,
    borderBottomLeftRadius: 0,
    flexDirection: 'row',
    alignItems: 'center',
  },
  failedMessage: {
    opacity: 0.7,
    borderWidth: 1,
    borderColor: 'red',
  },
  senderMessageText: {
    color: colors.white,
    fontSize: 15,
    fontFamily: fontFamily.GilroyMedium,
    flex: 1,
  },
  receiverMessageText: {
    color: colors.black,
    fontSize: 15,
    fontFamily: fontFamily.GilroyMedium,
    flex: 1,
  },
  sendertimeText: {
    fontFamily: fontFamily.GilroyRegular,
    fontSize: fontSizes.xsm,
    color: colors.black,
    marginTop: 1,
  },
  receiverTimeText: {
    fontFamily: fontFamily.GilroyRegular,
    fontSize: fontSizes.xsm,
    color: colors.black,
    marginTop: 3,
  },
  failedTimeText: {
    color: 'red',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    paddingBottom: Platform.OS === 'ios' ? 20 : height * 0.1,
  },
  voiceBtn: {
    width: 46,
    height: 46,
    resizeMode: 'contain',
  },
  sendButton: {
    opacity: 1,
  },
  disabledButton: {
    opacity: 0.5,
  },
  statusContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
    paddingHorizontal: 10,
    backgroundColor: colors.lightGray,
  },
  statusDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginRight: 8,
  },
  statusText: {
    fontSize: 12,
    fontFamily: fontFamily.GilroyRegular,
    color: colors.black,
    flex: 1,
  },
  debugButton: {
    backgroundColor: colors.marhoon,
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 4,
  },
  debugButtonText: {
    color: colors.white,
    fontSize: 10,
    fontFamily: fontFamily.GilroyMedium,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingText: {
    marginTop: 10,
    fontSize: 16,
    fontFamily: fontFamily.GilroyMedium,
    color: colors.darkGray,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 50,
  },
  emptyText: {
    fontSize: 18,
    fontFamily: fontFamily.GilroyMedium,
    color: colors.darkGray,
    marginBottom: 8,
  },
  emptySubText: {
    fontSize: 14,
    fontFamily: fontFamily.GilroyRegular,
    color: colors.gray,
    textAlign: 'center',
  },
  emojiPickerContainer: {
    position: 'absolute',
    bottom: Platform.OS === 'ios' ? 100 : 120,
    left: 0,
    right: 0,
    backgroundColor: colors.white,
    borderTopWidth: 1,
    borderTopColor: colors.lightGray,
  },
  closeEmojiButton: {
    padding: 10,
    alignItems: 'center',
    backgroundColor: colors.lightGray,
  },
  closeEmojiText: {
    fontFamily: fontFamily.GilroyMedium,
    color: colors.black,
    fontSize: fontSizes.sm,
  },
  sendingIndicator: {
    marginLeft: 8,
  },
});

export default Chat;
