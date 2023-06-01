import styled from "styled-components";
import Colors from "../../constants/Colors";

const StyleSideBar = {
  Container: styled.div`
    position: fixed;
    min-width: 425px;
    min-height: 100vh;
    background-color: ${Colors.PRIMARY_COLOR};
    display: flex;
    overflow: hidden;
  `,

  Header: styled.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100px;
    margin-top: 5rem;
  `,

  IconCallBack: styled.div`
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    left: 0;

    width: 100px;
    height: 100%;
    cursor: pointer;
  `,

  ContainerPhotograph: styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 88px;
    height: 88px;
    background-color: white;
    background-image: url(${(props) => props.back && props.back});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    color: black;
    border-radius: 100%;
 

    img {
    
      font-size: 80px;
      font-weight: 900;
    }

    :hover {
      cursor: pointer;
    }
  `,

  IconPlus: styled.div`
    width: 100%;
    height: 100%;
    background-repeat: no-repeat;
    background-color: ${(props) => (props.isImg ? "" : props.background)};
    background-image: url(${(props) => (props.isImg ? props.background : "")});
  `,

  AddPhotograph: styled.div`
    position: absolute;
    width: 117px;
    height: 25px;
    left: 9.625rem;
    top: 6rem;
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
    top: 14.6rem;
    display: flex;
    flex-direction: column;
    justify-content: start;
    overflow: hidden;
  `,

  SideBarOption: styled.div`
    width: 100%;
    height: 104px;
    background-color: ${(props) =>
      props.isSelected ? `${Colors.WHITE_TEST}` : `${Colors.PRIMARY_COLOR}`};
    display: flex;
    flex-direction: row;

    :hover {
      cursor: pointer;
    }
  `,

  IconSideBarOption: styled.div`
    width: 40px;
    height: 40px;
    margin-left: 5.5rem;
    margin-top: 2rem;
    background-color: ${(props) => (props.isImg ? "" : props.background)};
    background-image: url(${(props) => (props.isImg ? props.background : "")});
  `,

  TextSideBarOption: styled.div`
    position: relative;
    width: auto;
    height: 33px;
    margin-left: 1rem;
    margin-top: 2.219rem;
    font-family: "Nunito";
    font-style: normal;
    font-weight: 900;
    font-size: 1.5rem;
    line-height: 2.063rem;
    color: ${(props) =>
      props.isSelected ? Colors.PRIMARY_COLOR : Colors.WHITE};
  `,

  Input: styled.input`
    position: absolute;
    top: -2000px;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
  `,
};

export default StyleSideBar;
