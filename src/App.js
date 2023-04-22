import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useParams,
} from "react-router-dom";
import {
  AuthPath,
  HomePagePath,
  RegisterPath,
  HomeDevPath,
  ChatPath,
  JobsPath,
  DevsPath,
  AvaliacoesPath,
  ComunidadePath,
} from "./constants/Path";
import "bootstrap/dist/css/bootstrap.min.css";
import socketIO from "socket.io-client";
import Home from "./pages/home/Home";
import Auth from "./pages/auth/Auth";
import Register from "./pages/auth/register/Register";
import Jobs from "./pages/jobs/Jobs";
import HomeDev from "./pages/homeDev/HomeDev";
import Chat from "./pages/chat/Chat";
import Devs from "./pages/devs/Devs";
import Avaliacoes from "./pages/avaliacoes/Avaliacoes";
import Comunidade from "./pages/comunidade/Comunidade";
import { useDispatch } from "react-redux";
import { changeOn } from "./store/reducers/WebSocketSlice";

const socket = socketIO.connect("http://localhost:3333");

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    socket.on("connect", () => {
      dispatch(
        changeOn({
          id: socket.id,
        })
      );
    });
  }, []);

  return (
    <Router>
      <Routes>
        <Route path={HomePagePath} element={<Home />} />
        <Route path={AuthPath} element={<Auth />} />
        <Route path={RegisterPath} element={<Register />} />
        <Route path={JobsPath} element={<Jobs />} />
        <Route path={HomeDevPath} element={<HomeDev />} />
        <Route path={ChatPath} element={<Chat socket={socket} />} />
        <Route path={DevsPath} element={<Devs />} />
        <Route path={AvaliacoesPath} element={<Avaliacoes />} />
        <Route path={ComunidadePath} element={<Comunidade />} />
      </Routes>
    </Router>
  );
}

export default App;
