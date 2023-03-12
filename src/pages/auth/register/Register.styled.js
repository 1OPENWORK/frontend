import styled from "styled-components";
import Colors from "../../../constants/Colors";
const StyledRegister = {
  Container: styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    overflow: hidden;
  `,

  ContainerForm: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: ${(props) => (props.position ? props.position : "start")};
    width: 75%;
  `,

  Divisor: styled.div`
    margin-top: 50px;
    display: flex;
    align-items: ${props => props.align ? props.align : "start"};
    justify-content: ${props => props.align ? props.align : "start"};;
    width: 100%;
  `,

  Form: styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    border-radius: 30px;
    width: 100%;
    height: 60%;
  `,

  TitleForm: styled.h2`
    display: flex;
    font-weight: 700;
    font-size: 36px;
    color: ${Colors.PRIMARY_COLOR};
    margin-bottom: 64px;
  `,

  Link: styled.a`
    text-decoration: none;
    font-weight: 300;
    font-size: 18px;
    color: #20ac69;
    cursor: pointer;
  `,

  Label: styled.label`
    font-weight: 300;
    font-size: 18px;
    color: #545454;
  `,

  Row: styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    grid-gap: 1rem;
  `,

  CheckBox: styled.input`
    width: 18px;
    height: 19px;
    background: rgba(32, 172, 105, 0.05);
    border: 1px solid #20ac69;
    
  `,
};

export default StyledRegister;
