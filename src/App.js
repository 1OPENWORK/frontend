import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthPath, HomePagePath, RegisterPath, JobsPath, HomeDevPath } from "./constants/Path";
import "bootstrap/dist/css/bootstrap.min.css";
import socketIO from "socket.io-client";
import Home from "./pages/home/Home";
import Auth from "./pages/auth/Auth";
import Register from "./pages/auth/register/Register";
import Jobs from "./pages/jobs/Jobs";
import HomeDev from "./pages/homeDev/HomeDev";



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

// <<<<<<< HEAD
//       socket.on("message", { id: isConnected }, (message) => {
//         console.log(message);
//       });
//     });
//   }, []);


    
// =======
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
        <Route path={HomeDevPath} element={<HomeDev />} />

      </Routes>
    </Router>
// >>>>>>> c167bd0bc9cc30101c22862d90c2ab31b37ccf6b
  );
}

export default App;
