import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthPath, HomePagePath, RegisterPath, JobsPath } from "./constants/Path";
import "bootstrap/dist/css/bootstrap.min.css";
import socketIO from "socket.io-client";
import Home from "./pages/home/Home";
import Auth from "./pages/auth/Auth";
import Register from "./pages/auth/register/Register";
import Jobs from "./pages/jobs/Jobs";


const socket = socketIO.connect("http://localhost:3333");

function App() {
  const [isConnected, setIsConnected] = useState("");

  // useEffect(() => {
  //   socket.on("connect", () => {
  //     setIsConnected(socket.id);

  //     const idUser = 1;
  //     socket.emit("access_chat", { idUser }, (dados, socketId) => {
  //       console.log(dados);
  //     });

  //     socket.on("message", {id: isConnected}, (message) => {

  //       console.log(message);
  //     })

  //   });
  // }, []);

  return (
    <Router>
      <Routes>
        <Route path={HomePagePath} element={<Home />} />
        <Route path={AuthPath} element={<Auth />} />
        <Route path={RegisterPath} element={<Register />} />
        <Route path={JobsPath} element={<Jobs />} /> */
      </Routes>
    </Router>
  );
}

export default App;
