import { React, useState, useEffect } from "react";

import { ButtonCheck, TitleProf } from "./ButtonRegisterEt4.styled";

export const ButtonRegisterEt4 = ({ dados, width, height, handleClick }) => {
  const [checked, setChecked] = useState(false);
  const [color, setColor] = useState("");
  const [backColor, setColorBack] = useState("");

  useEffect(() => {
    setColorBack(() => (checked ? "#20ac69" : "rgba(32, 172, 105, 0.05)"));
    setColor(() => (checked ? "#fff" : "#20ac69"));
  }, [checked]);

  return (
    <>
      <input type="hidden" checked={checked} />

      <ButtonCheck
        width={width}
        height={height}
        backGround={backColor}
        color={color}
        onClick={() => {
          setChecked((old) => !old);
          handleClick(dados, !checked);
        }}
      >
        <TitleProf>{dados.name}</TitleProf>
      </ButtonCheck>
    </>
  );
};
