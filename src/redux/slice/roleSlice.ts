import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Country } from '../../utilities/countries';

interface ServiceItem {
  _id: string;
  name: string;
  text: string;
  charge: string;
  image: { uri: string };
}

interface ServicesState {
  homeServices: ServiceItem[];
  shopServices: ServiceItem[];
}

interface UserProfile {
  _id?: string;
  profilePic?: string | null;
  email?: string;
  phoneNumber?: string;
  bio?: string;
  gender?: string;
  dateOfBirth?: string;
  fullName?: string;
}
interface RoleState {
  selectedRole: any | number | null;
  user: any;
  userAuthToken: any;
  token: any;
  userEmail: string;
  isLogin: boolean;
  fullName: string;
  profileUser: UserProfile | null;
  userId: string;
  serviceId: string;
  services: ServicesState;
  profilePic: any;
  freelancerId: string;
  freelancerName: string;
  freelancerLocation: string;
  freelancerRating: string;
  specialOfferName: string;
  specialOfferPrice: string;
  chatId: string;
  languageSelect: string;
  countrySelect: Country | null;
  videoId: string;
  userData: any;
  questionnaireSelections: Record<number, number>;
  addressData: any;
  ordersData: any[];
}

const initialState: RoleState = {
  selectedRole: null,
  user: {},
  userAuthToken: '',
  token: '',
  userEmail: '',
  isLogin: false,
  fullName: '',
  profileUser: null,
  userId: '',
  serviceId: '',
  services: {
    homeServices: [],
    shopServices: [],
  },
  profilePic: null,
  freelancerId: '',
  freelancerName: '',
  freelancerLocation: '',
  freelancerRating: '',
  specialOfferName: '',
  specialOfferPrice: '',
  chatId: '',
  languageSelect: '',
  countrySelect: null,
  videoId: "",
  userData: "",
  questionnaireSelections: {},
  addressData: {},
  ordersData: [],
} satisfies RoleState as RoleState;

const roleSlice = createSlice({
  name: 'role',
  initialState,
  reducers: {
    setRole: (state, action: PayloadAction<string | number>) => {
      state.selectedRole = action.payload;
    },
    clearRole: state => {
      state.selectedRole = null;
    },
    setUser: (state, action) => {
      state.user = action.payload;
    },
    setUserData: (state, action) => {
      state.userData = action.payload;
    },
    setToken: (state, action) => {
      state.userAuthToken = action.payload;
    },
    setLogin: state => {
      state.isLogin = true;
    },
    setUserEmail: (state, action) => {
      state.userEmail = action.payload;
    },
    setFullName: (state, action) => {
      state.fullName = action.payload;
    },
    removeUser: state => {
      state.user = {};
      state.userAuthToken = null;
      state.isLogin = false;
      state.addressData = null;
    },
    removeAddressData: state => {
      state.addressData = null;
      state.ordersData = [];
    },
    removeOrderData: state => {
      state.ordersData = [];
    },
    setUserProfiles: (state, action: PayloadAction<UserProfile>) => {
      state.profileUser = action.payload;
    },
    setUserId: (state, action) => {
      state.userId = action.payload;
    },
    setServiceId: (state, action) => {
      state.serviceId = action.payload;
    },
    setFreelancerId: (state, action) => {
      state.freelancerId = action.payload;
    },
    setServices: (state, action: PayloadAction<ServicesState>) => {
      state.services = action.payload;
    },
    setHomeServices: (state, action: PayloadAction<ServiceItem[]>) => {
      state.services.homeServices = action.payload;
    },
    setShopServices: (state, action: PayloadAction<ServiceItem[]>) => {
      state.services.shopServices = action.payload;
    },
    setProfilePic: (state, action) => {
      state.profilePic = action.payload;
    },
    setFreelancerName: (state, action) => {
      state.freelancerName = action.payload;
    },
    setFreelancerLocation: (state, action) => {
      state.freelancerLocation = action.payload;
    },
    setFreelancerRating: (state, action) => {
      state.freelancerRating = action.payload;
    },
    setSpecialOfferName: (state, action) => {
      state.specialOfferName = action.payload;
    },
    setSpecialOfferPrice: (state, action) => {
      state.specialOfferPrice = action.payload;
    },
    setChatId: (state, action) => {
      state.chatId = action.payload;
    },
    setLanguageSelect: (state, action) => {
      state.languageSelect = action.payload;
    },
    setCountrySelect: (state, action: PayloadAction<Country>) => {
      state.countrySelect = action.payload;
    },
    setVideoId: (state, action) => {
      state.videoId = action.payload;
    },
    // Set selection for a group
    setQuestionnaireSelection: (
      state,
      action: PayloadAction<{ groupId: number; optionIndex: number }>
    ) => {
      const { groupId, optionIndex } = action.payload;

      if (!state.questionnaireSelections) {
        state.questionnaireSelections = {};
      }

      state.questionnaireSelections[groupId] = optionIndex;
    },
    // Optionally reset all selections
    resetQuestionnaireSelections: (state) => {
      state.questionnaireSelections = {};
    },
    setAddressData: (state, action) => {
      state.addressData = action.payload;
    },
    setOrdersData: (state, action) => {
      state.ordersData = action.payload;
    },
    addToCart: (
      state,
      action: PayloadAction<{
        id: string | number;
        quantity?: number;
        [key: string]: any;
      }>
    ) => {
      if (!Array.isArray(state.ordersData)) {
        state.ordersData = [];
      }

      const item = action.payload;
      const qty = item.quantity ?? 1;

      const existingItem = state.ordersData.find(
        (i: any) => i.id === item.id
      );

      if (existingItem) {
        existingItem.quantity += qty; // ✅ add count
      } else {
        state.ordersData.push({
          ...item,
          quantity: qty, // ✅ use count
        });
      }
    },
    removeCartItem: (
      state,
      action: PayloadAction<string | number>
    ) => {
      state.ordersData = state.ordersData.filter(
        (item: any) => item.id !== action.payload
      );
    },
  },
});

export const {
  setRole,
  clearRole,
  setUser,
  setToken,
  setLogin,
  setUserEmail,
  removeUser,
  removeAddressData,
  removeOrderData,
  setFullName,
  setUserProfiles,
  setUserId,
  setServiceId,
  setServices,
  setHomeServices,
  setShopServices,
  setProfilePic,
  setFreelancerId,
  setFreelancerName,
  setFreelancerLocation,
  setFreelancerRating,
  setSpecialOfferPrice,
  setSpecialOfferName,
  setChatId,
  setLanguageSelect,
  setCountrySelect,
  setVideoId,
  setUserData,
  setQuestionnaireSelection,
  resetQuestionnaireSelections,
  setAddressData,
  setOrdersData,
  addToCart,
  removeCartItem,
} = roleSlice.actions;
export default roleSlice.reducer;
