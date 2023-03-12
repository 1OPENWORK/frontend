import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthPath, HomePagePath, HomeDevPath } from "./constants/Path";
import "bootstrap/dist/css/bootstrap.min.css";
import socketIO from "socket.io-client";
import Home from "./pages/home/Home";
import Auth from "./pages/auth/Auth";
import HomeDev from "./pages/homeDev/HomeDev";

const socket = socketIO.connect("http://localhost:3333");

function App() {
  const [isConnected, setIsConnected] = useState("");

  useEffect(() => {
    socket.on("connect", () => {
      setIsConnected(socket.id);

      const idUser = 1;
      socket.emit("access_chat", { idUser }, (dados, socketId) => {
        console.log(dados);
      });

      socket.on("message", { id: isConnected }, (message) => {
        console.log(message);
      });
    });
  }, []);

  return (
    
      <Router>
        <Routes>
          <Route path={HomePagePath} element={<Home />} />
          <Route path={AuthPath} element={<Auth />} />
          <Route path={HomeDevPath} element={<HomeDev />} />
        </Routes>
      </Router>
    
  );
}

export default App;
