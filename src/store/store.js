import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
import thunk from "redux-thunk";
import AuthSlice from "./reducers/AuthSlice";
import RegisterSlice from "./reducers/RegisterSlice";
import WebSocketSlice from "./reducers/WebSocketSlice";
import PerfilSlice from "./reducers/PerfilSlice";
import JobInfoSlice from "./reducers/JobInfoSlice";
import LgpdSlice from "./reducers/LgpdSlice";

const reducers = combineReducers({
  register: RegisterSlice,
  auth: AuthSlice,
  websocket: WebSocketSlice,
  dadosPerfil: PerfilSlice,
  infoJob: JobInfoSlice,
  dadosLgpd: LgpdSlice
});

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, reducers);

export default configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== "production",
  middleware: [thunk],
});
