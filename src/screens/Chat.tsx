import moment from 'moment';
import { useState } from 'react';
import {
  FlatList,
  Image,
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import TopHeader from '../components/Topheader';
import { height, width } from '../utilities';
import { colors } from '../utilities/colors';
import images from '../assets/Images';
import CustomTextInput from '../components/CustomTextInput';
import { fontFamily } from '../assets/Fonts';
import { fontSizes } from '../utilities/fontsizes';
import { Picker } from "emoji-mart-native"


type Message = {
  text: string;
  time: moment.Moment;
  isSender?: boolean;
};

type ChatItem = {
  type: 'message' | 'date';
  data: Message | string;
};

const Chat = () => {
  const [messages, setMessages] = useState<Message[]>([
    { text: 'Lorem Ipsum is simply dummy text of the printing', time: moment(), isSender: true },
    { text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.', time: moment(), isSender: false },
    { text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.', time: moment().subtract(1, 'days'), isSender: false },
    {
      text: 'Lorem Ipsum is simply dummy text of the printing',
      time: moment().subtract(1, 'days'),
      isSender: true,
    },
  ]);
  const [currentMessage, setCurrentMessage] = useState<string>('');
  const [showEmojiPicker, setShowEmojiPicker] = useState<boolean>(false);

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
        label =
          'Today';
      } else if (msgDate.isSame(moment().subtract(1, 'day'), 'day')) {
        label =
          'Yesterday';
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

  const sendMessage = () => {
    if (currentMessage.trim().length === 0) return;
    const newMessage: Message = {
      text: currentMessage,
      time: moment(),
      isSender: true,
    };
    setMessages([...messages, newMessage]);
    setCurrentMessage('');
  };

  const renderItem = ({ item }: { item: ChatItem }) => {
    if (item.type === 'date') {
      return (
        <View style={styles.dateContainer}>
          <Text style={styles.dateText}>{item.data}</Text>
        </View>
      );
    }

    const msg = item.data as Message;
    return (
      <View
        style={[
          styles.messageContainer,
          msg.isSender ? styles.senderContainer : styles.receiverContainer,
        ]}
      >
        <Text style={styles.nameText}>{msg.isSender ? "You" : "Adam"}</Text>
        <View
          style={msg.isSender ? styles.senderChatBox : styles.receiverChatBox}
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
        </View>
        <Text
          style={msg.isSender ? styles.sendertimeText : styles.receiverTimeText}
        >
          {msg.time.format('h:mm A')}
        </Text>
      </View>
    );
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
        <FlatList
          data={getChatData()}
          renderItem={renderItem}
          keyExtractor={(_, index) => index.toString()}
          contentContainerStyle={styles.chatList}
          inverted={false}
        />
        {/* Emoji Picker */}
        {showEmojiPicker && (
          <Picker
            onEmojiSelect={emoji => {
              setCurrentMessage((prev) => prev + emoji.native);
            }}
            showPreview={false}
            showSkinTones={true}
            style={{ height: height * 0.35 }}
          />
        )}
        <View style={styles.inputContainer}>
          <CustomTextInput
            inputHeight={height * 0.07}
            inputWidth={width * 0.8}
            placeholder="Type Here..."
            placeholderTextColor={colors.darkGray}
            borderRadius={30}
            backgroundColor={colors.white}
            // onChangeText={text => setCurrentMessage(text)}
            // value={currentMessage}
            value={currentMessage}
            onChangeText={setCurrentMessage}
            multiline
           rightIcon={
            <TouchableOpacity>
                <Image source={images.cameraIcon}/>
            </TouchableOpacity>
           }
           leftIcon={
            <TouchableOpacity onPress={() => setShowEmojiPicker(prev => !prev)}>
                <Image source={images.emojiIcon}/>
            </TouchableOpacity>
           }
          />
          <TouchableOpacity activeOpacity={0.6} onPress={sendMessage}>
            <Image source={images.sendBtn} style={styles.voiceBtn} />
          </TouchableOpacity>
        </View>
      </SafeAreaView>
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
  textSec: {
    fontFamily: fontFamily.GilroyMedium,
    fontSize: fontSizes.sm,
    color: colors.black,
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
    width: width * 0.25
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
    borderBottomLeftRadius: 15
  },
  receiverChatBox: {
    backgroundColor: colors.lightGray,
    padding: 12,
    borderRadius: 20,
    borderBottomLeftRadius: 0,
  },
  senderMessageText: {
    color: colors.white,
    fontSize: 15,
    fontFamily: fontFamily.GilroyMedium,
  },
  receiverMessageText: {
    color: colors.black,
    fontSize: 15,
    fontFamily: fontFamily.GilroyMedium,
  },
  sendertimeText: {
    fontFamily: fontFamily.GilroyReular,
    fontSize: fontSizes.xsm,
    color: colors.black,
    marginTop: 1,
  },
  receiverTimeText: {
    fontFamily: fontFamily.GilroyReular,
    fontSize: fontSizes.xsm,
    color: colors.black,
    marginTop: 3,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    paddingBottom: Platform.OS === 'ios' ? 20 : height * 0.1,
  },
  sendBtn: {
    width: 22,
    height: 22,
    resizeMode: 'contain',
  },
  voiceBtn: {
    width: 46,
    height: 46,
    resizeMode: 'contain',
  },
});

export default Chat;
