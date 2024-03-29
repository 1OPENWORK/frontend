import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
  name: "WebSocket",
  initialState: {
    idSocket: "",
    idUser: "",
    tag: "",
    friends: [],
    conversationActive: {},
    conversationRecents: [],
    messagesPendentes: [],
    messages: [],
    notifications: [],
  },
  reducers: {
    changeOn(state, { payload }) {
      return { ...state, idSocket: payload.id };
    },

   


    changeOff(state) {
      return { ...state, idSocket: "" };
    },

    changeIdUser(state, { payload }) {
      return { ...state, idUser: payload.id,  tag: payload.tag };
    },

    changeFriends(state, { payload }) {
      return { ...state, friends: payload.friends };
    },

    changeConversationActive(state, { payload }) {
      return { ...state, conversationActive: payload.active };
    },

    changeMessages(state, { payload }) {
      return { ...state, messages: payload.messages };
    },

    changeNewMessage(state, { payload }) {
      return { ...state, messages: [...state.messages, payload.messages] };
    },

    changeConversationRecentes(state, { payload }) {
      return { ...state, conversationRecents: payload.conversations };
    },

    changeMessagesPendentes(state, { payload }) {
      return { ...state, messagesPendentes: payload.messages };
    },

    changeAllNotifications(state, { payload }) {
      return {
        ...state,
        notifications: payload.notifications,
      };
    },

    changeNewNotifications(state, { payload }) {
      return {
        ...state,
        notifications: [...state.notifications, payload.newNotifications],
      };
    },
  },
});

export const {
  changeOn,
  changeOff,
  changeIdUser,
  changeFriends,
  changeConversationActive,
  changeMessages,
  changeNewMessage,
  changeConversationRecentes,
  changeMessagesPendentes,
  changeNewNotifications,
  changeAllNotifications
} = slice.actions;
export const selectedWebSocket = (state) => state;
export default slice.reducer;
