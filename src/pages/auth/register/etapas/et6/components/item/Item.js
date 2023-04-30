import React from "react";
import { ColumCount } from "../../../et4/RegisterEt4.styled";
import { Button, DivInput, H3Input, Input } from "../../RegisterEt6.styled";
import { ComboBox } from "../ComboBox";
import { useEffect } from "react";
import { useState } from "react";

const Item = ({ dados, handleProeficiencia }) => {
  const [combox, setCombox] = useState("");
  const [anos, setAnos] = useState(0);

  const handleEvent = () => {
    let prevArray = { ...dados };
    prevArray.years = anos;
    prevArray.proficiency = combox;
    handleProeficiencia(prevArray);
  };

  useEffect(() => {
    if (anos !== 0 && anos > 0) {
      handleEvent();
    }
  }, [combox, anos]);

  return (
    <ColumCount count={3} gap={"1.9rem"}>
      <Button
        color={"#fff"}
        backGround={"#20ac69"}
        width={"132px"}
        height={"48px"}
        title={dados.name}
      >
        {dados.name}
      </Button>

      <DivInput>
        <Input
          value={anos}
          onChange={(e) => setAnos(parseInt(e.target.value))}
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
