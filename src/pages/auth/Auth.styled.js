import styled from "@emotion/styled";
import Colors from "../../constants/Colors";
const AuthStyled = {
  Container: styled.div`
    display: flex;
    justify-content: space-between;
  `,

  ContainerForm: styled.div`
    display: flex;
    justify-content: ${(props) => (props.position ? props.position : "start")};
    align-items: center;
    width: 75%;
  `,

  Form: styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding-top: 91px;
    height: 700px;
    width: 600px;
    border-radius: 30px;
       -webkit-box-shadow: 9px 5px 22px -9px rgba(0, 0, 0, 0.5);
    -moz-box-shadow: 9px 5px 22px -9px rgba(0, 0, 0, 0.5);
    box-shadow: 9px 5px 22px -9px rgba(0, 0, 0, 0.5);
  `,

  TitleForm: styled.h2`
    font-weight: 700;
    font-size: 36px;
    color: ${Colors.PRIMARY_COLOR};
    text-align: center;
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
    justify-content: center;
    align-items: center;
    grid-gap: 1rem;
  `,

  CheckBox: styled.input`
    width: 18px;
    height: 19px;
    background: #20ac69;
    border: 1px solid #20ac69;
    color: #20ac69;
  `,
};

export default AuthStyled;
