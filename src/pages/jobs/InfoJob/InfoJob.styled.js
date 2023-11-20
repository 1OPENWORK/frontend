import styled from "styled-components";
import Colors from "../../../constants/Colors";

const StyledInfoJob = {
  Container: styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    height: 100vh;
  `,

  Content: styled.div`
    display: flex;
    flex-direction: column;
    width: 50%;
    border-radius: 10px;
    margin: 100px;
    border: 1px solid ${Colors.GRAY};
    padding: 20px;
    -webkit-box-shadow: 10px 10px 5px -7px rgba(0, 0, 0, 0.46);
    -moz-box-shadow: 10px 10px 5px -7px rgba(0, 0, 0, 0.46);
    box-shadow: 10px 10px 5px -7px rgba(0, 0, 0, 0.46);
  `,

  Imagem: styled.img`
    width: 200px;
    height: 200px;
    object-fit: cover;
    border-radius: 20px;
  `,

  SpaceBetween: styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
  `,

  Row: styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 0.3rem;
  `,

  Column: styled.div`
    display: flex;
    flex-direction: column;
  `,

  Name: styled.label`
    font-family: "Nunito";
    font-size: 30px;
    font-weight: 700;
    color: ${Colors.PRIMARY_COLOR};
  `,

  NameProjected: styled.label`
    font-family: "Nunito";
    font-size: 20px;
    margin-top: 20px;
    font-weight: 700;
    color: ${Colors.PRIMARY_COLOR};
  `,

  Title: styled.label`
    font-weight: 600;
    font-size: 18px;
    color: ${Colors.BLACK_GREY03};
  `,

  TextGrade: styled.label``,

  Text: styled.label`
    font-size: 18px;
    font-weight: bold;
  `,

  Description: styled.label``,

  Options: {
    Container: styled.div`
      display: flex;
      flex-direction: column;
      margin-top: 20px;
    `,

    Card: styled.div`
      display: flex;
      align-items: center;
      justify-content: center;
      width: 150px;
      height: 50px;
      font-size: 18px;
      border-radius: 8px;
      background-color: #000;
      color: white;
      font-weight: 700;
    `,
  },

  ContentButton: styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 20px;
  `,
  ButtonSend: styled.button`
    text-align: center;
    width: 170px;
    padding: 10px;
    height: 60px;
    font-size: 18px;
    font-weight: 700;
    border: none;
    color: ${Colors.WHITE};
    background-color: ${Colors.PRIMARY_COLOR};
  `,

  ContentValor: styled.div`
    margin-top: 20px;
    display: flex;
    flex-direction: column;
  `,

  Valor: styled.label`
    color: ${Colors.PRIMARY_COLOR};
    font-size: 22px;
    font-weight: 700;
  `,

  ButtonCallbackURL: styled.button`
    position: absolute;
    left: 25%;
    top: 2%;
    width: 200px;
    height: 60px;
    background-color: ${Colors.BLACK};
    color: #ffffff;
    font-size: 20px;

  
  `


};

export default StyledInfoJob;
