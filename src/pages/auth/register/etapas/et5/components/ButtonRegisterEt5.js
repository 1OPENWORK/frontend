import { React, useState, useEffect } from "react";

import { ButtonCheck, TitleProf } from "./ButtonRegisterEt5.styled";

 const ButtonRegisterEt5 = ({ dados, width, height, handleClick, selected }) => {
  const [checked, setChecked] = useState(selected);
  const [color, setColor] = useState("");
  const [backColor, setColorBack] = useState("");

  useEffect(() => {
    setColorBack(() => (checked || selected ? "#20ac69" : "rgba(32, 172, 105, 0.05)"));
    setColor(() => (checked || selected ? "#fff" : "#20ac69"));
  }, [checked, selected]);

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
          handleClick(dados, checked)
        }}
      >
        <TitleProf>{dados.name}</TitleProf>
      </ButtonCheck>
    </>
  );
};


export default ButtonRegisterEt5