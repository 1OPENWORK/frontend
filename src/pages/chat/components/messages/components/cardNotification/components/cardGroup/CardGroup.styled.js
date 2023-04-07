import { Avatar } from "@mui/material";
import styled from "styled-components";

const StyledCardGroup = {
  Container: styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 100%;
    border-radius: 8px;
    position: relative;
    margin-bottom: 10px;
    padding-bottom: 20px;
  `,

  Imagem: styled.div`
    position: absolute;
    height: 100%;
    width: 100%;
    opacity: 0.3;
    background: rgba(0, 0, 0, 0.3) url(${(props) => props.img}) no-repeat top
      center / cover;
    border-radius: 8px;
    z-index: 1;
  `,

  Title: styled.h2`
    font-size: 18px;
    text-align: center;
    opacity: 1;
    z-index: 2;
  `,

  ImgUser: styled(Avatar)`
    height: 50px !important;
    width: 50px !important;
    z-index: 2;
  `,

  Divisor: styled.div`
    display: flex;
    align-items: center;
    justify-content: ${(props) =>
      props.justifyContent ? props.justifyContent : "start"};
    flex-wrap: wrap;
    gap: 1rem;
    width: ${(props) => (props.width ? props.width : "100%")};
  `,

  Button: styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    width: 100px;
    height: 30px;
    border: none;
    font-size: 18px;
    font-weight: 600;
    border-radius: 5px;
    background-color: ${(props) => (props.success ? "#06bb6f" : "#ffff")};
    color: ${(props) => (props.success ? "#ffff" : "#000")};
    cursor: pointer;
    z-index: 2;
    opacity: 0.8;

    ion-icon {
        font-size: 20px;
        font-weight: bold;
    }
  `,
};

export default StyledCardGroup;
