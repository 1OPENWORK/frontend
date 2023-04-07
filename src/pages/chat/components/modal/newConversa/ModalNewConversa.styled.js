import { Modal } from "react-bootstrap";
import styled from "styled-components";

const StyledModalConversa = {
  Modal: styled(Modal)``,

  Container: styled.div`
    display: flex;
    flex-direction: column;
    background-color: #171a1f;
    width: 100%;
    height: 500px;
    color: white;
  `,

  DivBetween: styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    height: 50px;
    width: 98%;
    color: white;
    font-size: 30px;
  `,

  Body: styled.div`
    height: 92vh;
    display: flex;
    align-items: center;
    flex-direction: column;
  `,

  Divisor: styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 1rem;
  `,

  DivisorInput: styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 30px;
  `,

  Label: styled.label`
    font-weight: 200;
    font-size: 18px;
    margin-left: 3px;
  `,

  Input: styled.input`
    width: ${(props) => (props.width ? props.width : " 400px")};
    height: 50px;
    border-radius: 10px;
    border: none;
    padding-left: 20px;
    font-size: 18px;
    background-color: #101318;
    color: white;
    font-weight: 600;

    &:focus {
      outline: none;
      border: none;
    }
  `,

  TextArea: styled.textarea`
    width: ${(props) => (props.width ? props.width : " 400px")};
    border-radius: 10px;
    border: none;
    padding-left: 20px;
    font-size: 18px;
    background-color: #101318;
    color: white;
    font-weight: 600;

    &:focus {
      outline: none;
      border: none;
    }
  `,

  DivisorButton: styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 600px;
    margin-top: 20px;
  `,

  Button: styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 150px;
    height: 40px;
    border-radius: 10px;
    border: none;
    font-size: 16px;
    font-weight: 600;
    background-color: ${(props) =>
      props.backgroundColor ? props.backgroundColor : "white"};
    gap: 0.3rem;

    ion-icon {
      font-size: 20px;
    }
  `,

  DivContainerPersons: styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
  `,

  DivPersonsBetween: styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: ${(props) => (props.height ? props.height : "auto")};
  `,

  DivPersons: styled.div`
    border-radius: 5px;
    width: 95%;
    height: 100%;
    background-color: ${(props) =>
      props.backgroundColor ? props.backgroundColor : "auto"};
  `,
  DivPersonsTitle: styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    font-weight: 600;
    font-size: 20px;
  `,

  HeaderConexoes: styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 80px;
    border-bottom: 1px solid #495057;
    padding-bottom: 5px;
  `,

  DivSearch: styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 60%;
  `,
  InputSearch: styled.input`
    height: 60px;
    width: 70%;
    border-radius: 10px;
    border: none;
    padding-left: 20px;
    font-size: 18px;
    background-color: #101318;
    color: white;
    font-weight: 600;
    border: 2px solid #101318;

    &:focus {
      outline: none;
      border: 2px solid #101318;
    }
  `,

  ContainerConexao: styled.div`
    width: 100%;
    height: 370px;
    overflow: scroll;
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

  BodyConexao: styled.div`
    display: flex;
    align-items: center;
    padding-left: 20px;
    padding-right: 20px;
    width: 100%;
    height: 70px;
    border-bottom: 1px solid #515357;
    justify-content: space-between;
  `,

  HR: styled.hr`
    width: 100%;
  `,
};

export default StyledModalConversa;
