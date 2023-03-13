import { React, useState, useEffect } from "react";

import { ButtonCheck, TitleProf } from "./ButtonRegisterEt4.styled";

export const ButtonRegisterEt4 = ({}) => {
  const [checked, setChecked] = useState(false);
  const [color, setColor] = useState("");

  useEffect(() => {
    setColor(() => (checked ? "#20ac69" : "rgba(32, 172, 105, 0.05)"));
  }, [checked]);

  return (
    <>
      <ButtonCheck
        backGround={color}
        color={color}
        onClick={() => {
          setChecked((old) => !old);
        }}
      >
        <TitleProf></TitleProf>
        <input type="hidden" checked={checked} />
      </ButtonCheck>
    </>
  );
};
