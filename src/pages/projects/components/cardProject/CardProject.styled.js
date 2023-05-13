import styled, { css } from "styled-components";
import Colors from "../../../../constants/Colors";

export const DivCard = styled.div`
  min-height: 16em;

  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 30px;
  padding: 1.5em;
  display: flex;
  margin-bottom: 1.5em;
  z-index: -2;
  ${(props) =>
    props.canceled &&
    css`
      div,
      h1,
      h2,
      p,
      button {
        opacity: 0.75;
      }
    `};
`;

export const BtnReset = styled.button`
  background-color: ${Colors.PRIMARY_COLOR};
  color: white;
  border-radius: 20px;
  width: 184px;
  height: 42px;
  width: 132px;
  outline: none;
  border: none;
  text-decoration: none;
  align-self: center;
  justify-content: center;

  border-radius: 20px;
`;

export const DivLeft = styled.div`
  height: 100%;
  width: 33%;
  display: flex;
  flex-direction: column;

  padding-left: 36px;

  p {
    margin-top: 1.5rem;
    width: 300px;
    font-family: "Nunito";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 148.4%;
    letter-spacing: 0.22em;
  }

  h2 {
    font-size: 1.5rem;
    font-weight: medium;
  }

  .div-pro {
    display: flex;
  }
`;

export const DivRight = styled.div`
  height: 100%;
  width: 100%;

  display: flex;
  flex-direction: column;
  padding: 16px;
  justify-content: space-between;

  .progress-bar {
    width: 75%;
  }

  .div-user-config {
    position: relative;
    display: flex;
    justify-content: space-between;
    width: 25%;
  }

  .div-user-config .div-developers {
    position: relative;
    min-width: 70%;
    display: flex;
    align-items: center;
  }

  .div-user-config .div-developers .dev-apos {
    position: absolute;
    display: none;
  }

  .div-user-config .div-developers .dev-apos.display {
    top: 22px;
    display: inline-block;
    position: absolute;
    left: 70px;
  }

  .div-user-config .div-developers .developer-card:nth-child(2) {
    position: absolute;
    left: 25px;
    z-index: -1;
  }

  .div-user-config .div-developers .developer-card:nth-child(2) div {
    height: 40px;
    width: 40px;
    align-self: center;
  }

  .div-user-config .div-developers .developer-card.card-block:nth-child(3),
  .div-user-config .div-developers .developer-card.card-block:nth-child(4),
  .div-user-config .div-developers .developer-card.card-block:nth-child(5),
  .div-user-config .div-developers .developer-card.card-block:nth-child(6),
  .div-user-config .div-developers .developer-card.card-block:nth-child(7),
  .div-user-config .div-developers .developer-card.card-block:nth-child(8),
  .div-user-config .div-developers .developer-card.card-block:nth-child(9),
  .div-user-config .div-developers .developer-card.card-block:nth-child(10) {
    display: none;
  }

  .div-row {
    display: flex;
    width: 100%;
    margin-top: 1.5em;
  }

  .btn-reset.clicked {
    background-color: red;
  }

  .div-user-config .btn-config {
    color: ${(props) => props.color};
    cursor: pointer;
  }
  .highlight-dropdown-item {
    text-align: center;
  }

  .highlight-dropdown-item:hover {
    background-color: ${Colors.PRIMARY_COLOR} !important;
    color: white;
    width: 80%;
    margin: 0 auto;
    border-radius: 5px;
  }

  .highlight-dropdown-item:active {
    background-color: ${Colors.SECONDARY_COLOR} !important;
    color: white;
  }
  #dropdown-toggle {
    border: none;
    outline: none !important;
    text-decoration: none;
  }

  h2,
  h3 {
    font-size: 1rem;
    font-weight: 700;
    align-self: flex-start;
  }
`;

export const DivFooterCard = styled.div`
  height: 45%;
  background-color: white;
  display: flex;
  margin-top: 1.5em;

  .div-row-re {
    width: 30%;
    display: flex;
    align-items: center;
    gap: 10px;
    align-self: end;

    h2 {
      align-self: center;
      margin-top: 0.5em;
      font-weight: 500;
      line-height: 148.4%;
    }
  }

  .btn-reset.clicked {
    background: red;
  }
`;

export const DivData = styled.div`
  width: 25%;
  display: flex;
  flex-direction: column;
  /* align-items: end; */
  justify-content: center;

  h2,
  h3 {
    align-self: center;
  }
`;

export const UserImg = styled.div`
  background-image: url(${(props) => props.imageSrc});
  background-repeat: no-repeat;
  background-size: cover;
  height: 42px;
  width: 42px;
  padding-top: 0.7em;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${Colors.PRIMARY_COLOR};
  align-self: flex-end;
  margin-left: 0.5em;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

export const TitleImg = styled.h3`
  font-size: 2rem;
  font-weight: 600;
  color: #fff;
`;

export const ConfigImg = styled.img`
  height: 1rem;
  position: relative;
  cursor: pointer;
`;

export const AlertData = styled.div`
  width: 184px;
  height: 42px;
  background-color: ${Colors.PRIMARY_COLOR};
  color: white;

  display: flex;
  align-self: center;
  justify-content: center;

  border-radius: 20px;
`;

export const DivConfig = styled.div`
  background: linear-gradient(145deg, #fff, #ffffff);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  left: 64px;
  width: 120px;
  z-index: 1;
  transform: translateY(-5px);
  border-radius: 5px;
  font-style: Nunito, sans-serif;
  transition: all 1s ease-in-out !important;
  position: absolute;
`;

export const Ul = styled.ul`
  text-decoration: none;
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 0;
  margin-top: 5px;
`;

export const Li = styled.li`
  align-self: center;
  transition: all 0.2s ease-in-out;
  width: 80%;

  cursor: pointer;

  :hover {
    background: ${Colors.PRIMARY_COLOR};
    color: white;
    border-radius: 5px;
  }
`;
