import { Modal } from "react-bootstrap";
import styled from "styled-components";

const StyledModalGroup = {
  Modal: styled(Modal)``,

  Container: styled.div`
    display: flex;
    flex-direction: column;
    background-color: #171a1f;
    width: 100%;
    color: white;
    height: 100vh;
    padding-left: 50px;
  `,

  DivBetween: styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    height: 50px;
    width: 100%;
    color: white;
    font-size: 30px;
  `,

  Body: styled.div`
    height: 92vh;
    display: flex;
    justify-content: space-between;
  `,

  Divisor: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 49%;
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
    width: ${props => (props.width ? props.width : " 400px")};
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
    width: ${props => (props.width ? props.width : " 400px")};
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
    width: 200px;
    height: 50px;
    border-radius: 10px;
    border: none;
    font-size: 16px;
    font-weight: 600;
    background-color: ${props =>
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
    height: ${props => (props.height ? props.height : "auto")};
  `,

  DivPersons: styled.div`
    border-radius: 5px;
    width: 95%;
    height: 100%;
    background-color: ${props =>
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
    height: 100%;
    border-radius: 10px;
    border: none;
    padding-left: 20px;
    font-size: 18px;
    background-color: #171a1f;
    color: white;
    font-weight: 600;
    border: 2px solid #101318;

    &:focus {
      outline: none;
      border: 2px solid #101318;
    }
  `,
  BodyConexao: styled.div``,
};

export default StyledModalGroup;
