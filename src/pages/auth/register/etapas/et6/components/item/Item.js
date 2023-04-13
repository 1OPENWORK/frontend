import React from "react";
import { ColumCount } from "../../../et4/RegisterEt4.styled";
import { Button, DivInput, H3Input, Input } from "../../RegisterEt6.styled";
import { ComboBox } from "../ComboBox";

const Item = () => {
  return (
    <ColumCount count={3} gap={"1.9rem"}>
      <Button
        color={"#fff"}
        backGround={"#20ac69"}
        width={"199px"}
        height={"53px"}
        title={"React"}
      >
        {"React"}
      </Button>

      <DivInput>
        <Input w={"58px"} type="number" min="0" max={3} placeholder="0" />
        <H3Input>{"Anos"}</H3Input>
      </DivInput>
      <ComboBox />
    </ColumCount>
  );
};

export default Item;
