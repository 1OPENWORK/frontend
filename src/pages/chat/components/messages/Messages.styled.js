import styled from "styled-components";
import Colors from "../../../../constants/Colors";

const StyledMessage = {
  Container: styled.div`
    display: flex;
    flex-direction: column-reverse;
    padding-top: 100px;
    padding-bottom: 100px;
    height: 100vh;
    background-color: #101318;
    color: ${Colors.WHITE01};
    overflow: scroll;
    overflow-x: hidden;
    overflow-y: auto;
    transition: all 0.2s;

    ::-webkit-scrollbar {
      width: 5px;
      position: absolute;
    }

    /* Track */
    ::-webkit-scrollbar-track {
      background: transparent;
      position: absolute;
    }

    /* Handle */
    ::-webkit-scrollbar-thumb {
      background: #888;
      position: absolute;
      opacity: 30%;
      z-index: 1;
    }

    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
      background: #555;
      position: absolute;
    }
  `,

  Reverce: styled.div`
  
  
  `,

  Header: styled.div`
    display: flex;
    align-items: center;
    position: fixed;
    height: 80px;
    width: 70%;
    padding-left: 20px;
    top: 0;
    background-color: #171a1f;
    z-index: 10;
  `,

  Divisor: styled.div`
    display: flex;
    padding-left: 20px;
    padding-right: 20px;
    justify-content: ${(props) => (props.receiver ? "start" : "flex-end")};
  `,
};

export default StyledMessage;
