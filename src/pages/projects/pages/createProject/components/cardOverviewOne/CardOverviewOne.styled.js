import styled from "styled-components";
import Colors from "../../../../../../constants/Colors";

export const Container = styled.div`
  min-height: 1000px;
  width: 100%;

  background-color: #ffffff;
  box-shadow: 4px 4px 2px rgba(0, 0, 0, 0.25);
  border-radius: 18px;

  padding-top: 34px;
  padding-bottom: 34px;

  h2 {
    font-family: "Nunito";
    font-style: normal;
    font-weight: bold;
    font-size: 36px;
    text-align: center;

    color: ${Colors.PRIMARY_COLOR};
  }

  label {
    margin-bottom: 12px;
  }

  /* .global {
    display: flex;
    flex-direction: column;
    margin-left: 10%;
    width: 80%;
    align-items: center;
  } */
  .content-desc-over {
    display: flex;
    flex-direction: column;
    align-items: center;

    margin-top: 10%;
  }

  .content-desc-over p {
    margin: 0;
    padding: 0;
    width: 85%;
    font-family: "Nunito";
    font-style: normal;
    font-weight: 600;
    font-size: 1rem;
    line-height: 1rem;
    letter-spacing: 0.25em;

    color: #161616;
  }

  .content-desc-over label {
    width: 100%;
    font-family: "Nunito";
    font-style: normal;
    font-weight: 800;
    font-size: 1.2rem;
    line-height: 148.4%;

    text-align: center;
    letter-spacing: 0.25em;
  }

  .content-data {
    display: flex;
    flex-direction: column;
    width: 80%;
    gap: 1em;
  }

  .content-data h3 {
    align-self: start;
    font-family: "Nunito";
    font-style: normal;
    font-weight: 400;
    font-size: 1.2rem;
    line-height: 22px;

    text-align: center;
    letter-spacing: 0.22em;

    color: #161616;
  }

  .content-data h3 span {
    font-weight: bold;
    font-style: normal;
  }

  .content-display {
    width: 80%;

    display: flex;
    flex-direction: column;
  }

  .content-display label {
    width: 100%;
    font-family: "Nunito";
    font-style: normal;
    font-weight: 800;
    font-size: 1.2rem;
    line-height: 148.4%;

    text-align: center;
    letter-spacing: 0.25em;
  }
  .content-tools {
    height: 332px;
    padding: 0 10px;
    overflow-y: scroll;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 1em;
    grid-row-gap: 1em;
    grid-auto-rows: 72px;
  }

  .content-tools .card-tool {
    display: flex;
    justify-content: center;
    background: #161616;
    border-radius: 12px;
    padding: 18px 18px;
    margin-bottom: 18px;
    text-align: center;
    min-height: 72px;
  }

  .content-tools .card-tool p {
    font-size: 1rem;
    color: #ffffff;
    align-self: center;
  }
`;
