import styled from "styled-components";
import Colors from "../../constants/Colors";

const StyledList = {
  ContainerList: styled.div`
    width: 100%;
    height: auto;
    
  `,

  titleList: styled.div`
    background-color: ${Colors.white2};
    height: 14vh;
    border-bottom: 3.4px solid rgba(211, 211, 211, 0.65);
    display: flex;
    align-items: flex-end;
  `,

  containerButtonTitleList: styled.div`
    width: 30%;
    padding-left: 8%;
    padding-bottom: 0%;
    display: flex;
    gap: 16%;
  `,

  Button1TitleList: styled.div`
    border-bottom: 3.4px solid;
    margin-bottom: -2.4px;
    border-color: ${(props) =>
      props.index === props.onMenu ? "#4DFF7E" : "rgba(211, 211, 211, 0.65);"};
    font-family: "Nunito";
    font-style: normal;
    font-weight: 800;
    font-size: 16px;
    line-height: 148.4%;
    /* identical to box height, or 24px */
    letter-spacing: 0.22em;
    text-align: center;
    padding-bottom: 5.2%;
    width: 30%;
    cursor: pointer;
  `,
};

export default StyledList;
