import styled from "@emotion/styled";
import Colors from "../../constants/Colors";
const AuthStyled = {
  Container: styled.div`
    display: flex;
    justify-content: space-between;
    font-family: nunito;
  `,

  ContainerForm: styled.div`
    display: flex;
    justify-content: ${(props) => (props.position ? props.position : "start")};
    align-items: center;
    width: 75%;
  `,

  Form: styled.div`
    display: flex;
    margin: 0 auto;
    height: 100%;
    flex-direction: column;
    padding-top: 91px;
  `,

  TitleForm: styled.h2`
    font-weight: 700;
    font-size: 3rem;
    color: ${Colors.PRIMARY_COLOR};
    margin-bottom: 2.5rem;
  `,

  Link: styled.a`
    text-decoration: underline;
    font-weight: 300;
    font-size: 1rem;
    color: ${Colors.PRIMARY_COLOR};
    cursor: pointer;

    :hover {
      color: ${Colors.PRIMARY_COLOR};
    }
  `,

  Label: styled.label`
    font-weight: 300;
    font-size: 1rem;
    color: #545454;
  `,

  Row: styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    grid-gap: 1rem;
    margin-top: 1rem;
  `,

  Connection: styled.div`
    display: flex;
    flex-direction: row;
    margin-top: 1rem;
    justify-content: space-between;
  `,

  RememberPassword: styled.div`
    display: flex;
    flex-direction: row;
    gap: 0.5rem;
  `,

  CheckBox: styled.input`
    width: 16px;
    height: 16px;
    background: rgba(32, 172, 105, 0.05);
    border: 1px solid ${Colors.PRIMARY_COLOR};
  `,
};

export default AuthStyled;
