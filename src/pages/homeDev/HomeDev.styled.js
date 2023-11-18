import styled from "styled-components";
import Colors from "../../constants/Colors";

export const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  min-height: 100%;
  overflow: hidden;
  font-family: nunito;

  @media screen and (max-width: 1000px) {
    flex-direction: column;
    justify-content: center;
  }
`;

export const Aside = styled.div`
  position: relative;
  top: 70px;
  width: 70%;
  margin-left: 40px;
  column-count: 2;
  column-gap: 40px;
  height: 70%;

  @media screen and (max-width: 1000px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;
    padding-top: 120px;
    margin-left: 0;
  }
`;

export const DivAside = styled.div`
  height: 50%;
`;

export const Article = styled.div`
  position: relative;
  top: 60px;
  width: 20%;
  height: 75%;

  @media screen and (max-width: 1000px) {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    top: 0;
    margin-top: 60px;
  }
`;

export const Input = styled.input`
  width: 68%;
  height: 58px;
  border: 1px solid ${Colors.PRIMARY_COLOR};
  background: rgba(32, 172, 105, 0.05);
  outline: none;
  border-radius: 16px;
  position: absolute;
  top: 160px;
  left: 80px;
  font-size: 1.125rem;
  padding-left: 1rem;
`;

export const Card = styled.div`
  width: 100%;
  min-height: 230px;
  background-color: white;
  border-radius: 18px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  -webkit-font-smoothing: antialiased !important;
  display: flex;
  justify-content: center;
  position: relative;
  margin-bottom: 40px;
  cursor: pointer;
`;

export const ChatBot = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  height: 520px;
  width: 100%;
  background-color: ${Colors.PRIMARY_COLOR};
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  border-radius: 24px;
  -webkit-font-smoothing: antialiased !important;

  @media screen and (max-width: 1000px) {
    width: 70%;
    height: 300px;
  }
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
  font-size: 1.125rem;
  width: 55%;
  letter-spacing: 3px;
  color: white;
`;

export const FlexCard = styled.div`
  align-items: center;
`;

export const CardImg = styled.img`
  height: 32px;
  margin-top: 24px;
  margin-left: 24px;
`;
export const BootImg = styled.img`
  height: 40px;
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
  font-size: 1.125rem;
  gap: 12px;
  border: ${(props) =>
    props.inverted ? "0px solid #4D638D" : "0px solid #4D638D"};
  border-radius: 8px;
  font-family: "nunito";
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
    color: ${(props) => (props.disabled ? "" : Colors.WHITE)};
    border-color: ${(props) => (props.disabled ? "" : Colors.PRIMARY_COLOR)};
  }

  @media screen and (max-width: 760px) {
    width: 100%;
  }
`;

export const ChatbotDiv = styled.div`
  width: 40px;
  height: 100px;
`;
