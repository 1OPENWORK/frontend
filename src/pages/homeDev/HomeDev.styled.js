import styled from "styled-components";
import Colors from "../../constants/Colors";

export const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  min-height: 100%;
  overflow: hidden;
  font-family: nunito;
`;

export const Aside = styled.div`
  position: relative;
  top: 80px;
  width: 70%;
  column-count: 2;
  column-gap: 40px;
  height: 70%;
`;

export const Article = styled.div`
  position: relative;
  top: 50px;
  width: 20%;
  height: 70%;
`;

export const Input = styled.input`
  width: 70.5%;
  height: 58px;
  border: 1px solid ${Colors.PRIMARY_COLOR};
  background: rgba(32, 172, 105, 0.05);
  outline: none;
  border-radius: 16px;
  position: absolute;
  top: 179px;
  left: 40px;
  font-size: 24px;
`;

export const Card = styled.div`
  margin-bottom: 40px;
  width: 100%;
  height: 220px;
  background-color: white;
  border-radius: 18px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  -webkit-font-smoothing: antialiased !important;
  display: flex;
  justify-content: center;
`;

export const ChatBot = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  height: 500px;
  width: 100%;
  background-color: ${Colors.PRIMARY_COLOR};
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  border-radius: 20px;
  -webkit-font-smoothing: antialiased !important;
`;

export const TitleCard = styled.h2`
  font-weight: 700;
  font-size: 28px;
  line-height: 38px;
  letter-spacing: 0.22em;
  color: ${Colors.black};
  text-align: left;
  margin-left: 16px;
  margin-top: 24px;
`;

export const DescPara = styled.p`
  font-weight: 400;
  font-size: 18px;
  line-height: 25px;
  margin-left: 16px;
  margin-right: 16px;
  margin-top: 8px;
`;

export const DescParaBot = styled.p`
  font-weight: 400;
  font-size: 18px;
  width: 150px;
  letter-spacing: 3px;
  color: white;
`;

export const FlexCard = styled.div`
  align-itens: center;
`;

export const CardImg = styled.img`
  height: 32px;
  margin-top: 24px;
  margin-left: 24px;
`;
export const BootImg = styled.img`
  height: 40px;
`;

export const BarSearchImg = styled.img`
  height: 24px;
  margin-right: 16px;
`;

export const GenericSolidButton = styled.button`
  background-color: white;
  display: flex;
  color: black;
  width: 190px;
  height: 60px;
  flex-direction: row;

  font-weight: bold;
  justify-content: center;
  align-items: center;
  padding: 12px 16px;
  font-size: 18px;
  gap: 12px;
  border: ${(props) =>
    props.inverted ? "0px solid #4D638D" : "0px solid #4D638D"};
  border-radius: 8px;
  font-family: "Inter", sans-serif;
  letter-spacing: 0.5px;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));

  &:disabled {
    opacity: 0.5;
  }

  &:hover {
    cursor: ${(props) => (props.disabled ? "text" : "pointer")};
  }

  &:active {
    background-color: ${(props) =>
      props.disabled ? "" : Colors.PRIMARY_COLOR};
    color: ${(props) => (props.disabled ? "" : Colors.white)};
    border-color: ${(props) => (props.disabled ? "" : Colors.PRIMARY_COLOR)};
  }

  @media screen and (max-width: 760px) {
    width: 100%;
  }
`;
