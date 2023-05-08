import styled, {css} from "styled-components";

export const DivCard = styled.div`
  height: 16em;

  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 30px;
  padding: 16px;
  display: flex;

  ${(props) =>
    props.checked && css`
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
  background-color: #20ac69;
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
    display: flex;
    justify-content: space-between;
    width: 25%;
  }

  .div-row {
    display: flex;
    width: 100%;
    margin-top: 1.5em;
  }

  .btn-reset.clicked {
    background-color: red;
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

  .div-row-re {
    width: 30%;
    display: flex;
    align-items: center;
    gap: 10px;

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
  width: 20%;
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
  height: 42px;
  width: 42px;
  padding-top: 0.7em;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #20ac69;
  align-self: flex-end;
  margin-left: 0.5em;
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
  background-color: #20ac69;
  color: white;

  display: flex;
  align-self: center;
  justify-content: center;

  border-radius: 20px;
`;

export const DivConfig = styled.div`
  background: linear-gradient(145deg, #fff, #ffffff);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  width: 120px;
  position: fixed;
  z-index: 1;
  right: 132px;
  transform: translateY(-5px);
  border-radius: 5px;
  font-style: Nunito, sans-serif;
  transition: all 1s ease-in-out !important;
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
    background: #20ac69;
    color: white;
    border-radius: 5px;
  }
`;
