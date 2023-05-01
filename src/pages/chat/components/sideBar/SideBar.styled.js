import styled from "styled-components";
import Colors from "../../../../constants/Colors";

const StyledSideBar = {
  Container: styled.div`
    width: 100%;
    height: 100%;
    background-color: #171a1f;
    border-right: 1px solid ${Colors.WHITE02};
    display: flex;
    color: ${Colors.WHITE01};
    overflow: scroll;
    overflow-x: hidden;
    overflow-y: auto;
    z-index: 1;
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

  ContainerLoading: styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
  `,

  LabelLoading: styled.h1``,

  Header: styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px;
    padding-left: 30px;
    width: 100%;
    height: 80px;
    background-color: #171a1f;
    z-index: 1;
  `,

  ListPersons: styled.div`
    width: 100%;
    height: 100vh;
  `,

  DivColumn: styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 100px;
    width: 100%;
  `,

  Img: styled.img`
    margin-bottom: 50px;
  `,

  TitleHeader: styled.h4``,

  ConexoesMenuLateral: styled.div`
    width: 100%;
    overflow: scroll;
    overflow-x: hidden;
    overflow-y: auto;
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

    SubTitle: styled.label`
      color: #07ea8b;
    `

};

export const OpcaoMenuLateral = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  height: 80px;
  border-bottom: 1px solid ${Colors.BLACK_GREY04};

  cursor: pointer;

  &:hover {
    background-color: #2b2e34;
  }
`;

export const TitleOpcaoMenuLateral = styled.h3`
  display: flex;
  align-self: center;
  justify-self: center;

  font-size: 18px;
`;



export const DivOpcaoLateral = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 150px;
  position: absolute;
  opacity: 0;
`;

export const MenuLateral = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100px;
  position: absolute;
  height: 100%;
  transition: all 0.5s;
  background-color: #20252b;

  z-index: 1000;

  &:hover {
    width: 20%;

    ${DivOpcaoLateral} {
      transition-delay: 0.3s;
      animation: both ease 0.3s;
      animation-iteration-count: 1;
      animation-fill-mode: forwards;
      position: relative;
      opacity: 100%;

      @keyframes fadeInAnimation {
        0% {
          opacity: 0.3;
        }
        100% {
          opacity: 1;
        }
      }
    }
  }
`;

export default StyledSideBar;
