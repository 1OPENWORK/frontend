import styled from "styled-components";
import Colors from "../../../constants/Colors";

const StyleSideBar = {
  Container: styled.div`
    width: 425px;
    height: 100vh;
    border-radius: 0px 30px 30px 0px;
    background-color: ${Colors.BLACK};
    display: flex;
  `,

  ContainerPhotograph: styled.div`
    width: 88px;
    height: 88px;
    margin-left: 10.531rem;
    margin-top: 5rem;
    background-color: ${Colors.WHITE_TEST};
    border-radius: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    :hover {
      cursor: pointer;
    }
  `,

  IconPlus: styled.div`
    width: 24px;
    height: 24px;
    background-repeat: no-repeat;
    background-color: ${(props) => (props.isImg ? "" : props.background)};
    background-image: url(${(props) => (props.isImg ? props.background : "")});
  `,

  AddPhotograph: styled.div`
    position: absolute;
    width: 117px;
    height: 25px;
    left: 9.625rem;
    top: 11rem;
    font-family: "Nunito";
    font-style: normal;
    font-weight: 400;
    font-size: 1.125rem;
    line-height: 1.563rem;
    text-align: center;
    text-decoration-line: underline;
    color: ${Colors.WHITE_TEST};

    :hover {
      cursor: pointer;
    }
  `,

  ContainerSideBarOption: styled.div`
    position: absolute;
    width: 425px;
    height: 480px;
    left: 0px;
    top: 17.188rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  `,

  SideBarOption: styled.div`
    width: 100%;
    height: 120px;
    background-color: ${(props) => (props.isSelected ? `${Colors.WHITE_TEST}` : `${Colors.BLACK}`)};
    display: flex;
    flex-direction: row;

    :hover {
      cursor: pointer;
    }
  `,

  IconSideBarOption: styled.div`
    width: 56px;
    height: 56px;
    margin-left: 5.5rem;
    margin-top: 2rem;
    background-color: ${(props) => (props.isImg ? "" : props.background)};
    background-image: url(${(props) => (props.isImg ? props.background : "")});
  `,

  TextSideBarOption: styled.div`
    width: auto;
    height: 33px;
    margin-top: 2.719rem;
    margin-left: 1rem;
    font-family: "Nunito";
    font-style: normal;
    font-weight: 900;
    font-size: 1.5rem;
    line-height: 2.063rem;
    color: ${(props) => (props.isSelected ? `${Colors.BLACK}` : `${Colors.WHITE}`)};
  `,
};

export default StyleSideBar;
