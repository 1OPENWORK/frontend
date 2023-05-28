import styled from "styled-components";
import Colors from "../../../../constants/Colors";

const StyledFormulario = {
  Container: styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 100vh;
    overflow: hidden;
    font-family: nunito;
  `,

  ContainerForm: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: ${props => (props.position ? props.position : "start")};
    width: 75%;
  `,

  Divisor: styled.div`
    display: flex;
    align-items: ${props => (props.align ? props.align : "start")};
    justify-content: ${props => (props.align ? props.align : "start")};
    width: 100%;
  `,

  Form: styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    border-radius: 30px;
    width: 100%;
    height: 70%;
    margin-top: 2rem;
  `,

  TitleForm: styled.h2`
    display: flex;
    font-weight: 700;
    font-size: 2.25rem;
    line-height: 49px;
    color: ${Colors.PRIMARY_COLOR};
    margin-top: 2rem;
    margin-bottom: 2rem;
  `,

  Link: styled.a`
    text-decoration: none;
    font-weight: 300;
    font-size: 1.125rem;
    color: #20ac69;
    cursor: pointer;
  `,

  Label: styled.label`
    font-weight: 700;
    font-size: 1.125rem;
    color: #545454;
  `,

  Row: styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    grid-gap: 2.5rem;
  `,

  CheckBox: styled.input`
    width: 1.125rem;
    height: 1.188rem;
    background: rgba(32, 172, 105, 0.05);
    border: 1px solid #20ac69;
  `,

  Text: styled.p`
    font-weight: 700;
    font-size: 1.125rem;
    color: #20ac69;
    margin-bottom: 0.5rem;
  `,

  Column: styled.div`
    display: flex;
    flex-direction: column;
  `,
};

export default StyledFormulario;
