import { useState, React, useEffect } from "react";
import { LandbotDiv } from "./Landbot.styled";

export default function CardHelp() {
  const [backgroundColor] = useState("");

  function abrirLandbot() {
    // eslint-disable-next-line no-undef
    // const myLandbot = new Landbot.Container({
    //   container: "#card_help",
    //   configUrl:
    //     "https://storage.googleapis.com/landbot.online/v3/H-1579790-8D5OJF9T64WSD265/index.json",
    // });

  }

  useEffect(() => {
    abrirLandbot();
  }, []);

  return <LandbotDiv id="card_help" style={{ backgroundColor }}></LandbotDiv>;
}
