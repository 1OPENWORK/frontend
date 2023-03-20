import styled from "styled-components";
import Colors from "../../../../../../constants/Colors";

const StyledSendMessage = {
  Container: styled.div`
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: center;
    top: 92%;
    border-top: 1px solid ${Colors.WHITE02};
    width: 70%;
    height: 8%;
    background-color: ${Colors.BLACK_GREY04};
    z-index: 2;
    color: ${Colors.WHITE01};
  `,

  InputSendMessage: styled.input`
    height: 35px;
    width: 50%;
    border-radius: 5px 0px 0px 5px;
    padding-left: 5px;
    background-color: ${Colors.BLACK_GREY05};
    border: none;
    font-size: 14px;
    color: ${Colors.WHITE01};

    &:focus {
      outline: none;
    }
  `,

  ButtonSend: styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${Colors.GREEN};
    border: none;
    width: 45px;
    height: 35px;
    border-radius: 0px 5px 5px 0px;
  `,
};

export default StyledSendMessage;
