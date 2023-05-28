import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { HMSRoomProvider } from "@100mslive/react-sdk";

const Index = () => {
  ReactDOM.render(
    <React.StrictMode>
      <HMSRoomProvider>
        <App />
      </HMSRoomProvider>
    </React.StrictMode>,
    document.getElementById("root")
  );
};

export default Index;
