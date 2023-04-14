import React from "react";
import { ColumCount } from "../../../et4/RegisterEt4.styled";
import { Button, DivInput, H3Input, Input } from "../../RegisterEt6.styled";
import { ComboBox } from "../ComboBox";
import { useEffect } from "react";
import { useState } from "react";

const Item = ({ nome, handleCompetencia }) => {
  const [combox, setCombox] = useState("");
  const [anos, setAnos] = useState("");

  const handleVerifyAnos = value => {
    // Fazer verification de anos
    setAnos(value);
  };

  useEffect(() => {}, [combox, anos]);

  return (
    <ColumCount count={3} gap={"1.9rem"}>
      <Button
        color={"#fff"}
        backGround={"#20ac69"}
        width={"199px"}
        height={"53px"}
        title={nome}
      >
        {nome}
      </Button>

      <DivInput>
        <Input
          value={anos}
          onChange={e => handleVerifyAnos(e.target.value)}
          w={"58px"}
          type="number"
          min="0"
          max={3}
          placeholder="0"
        />
        <H3Input>{"Anos"}</H3Input>
      </DivInput>
      <ComboBox handleProefiencia={setCombox} />
    </ColumCount>
  );
};

export default Item;
