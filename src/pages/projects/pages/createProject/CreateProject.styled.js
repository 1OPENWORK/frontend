import styled from "styled-components";
import Colors from "../../../../constants/Colors";

export const Container = styled.div`
  min-height: 100vh;
  display: flex;
  background-color: #f5f5f5;
  font-size: 1rem;

  .container-align {
    margin: 1.8em auto;
    width: 80%;
    max-width: 1920px;
  }

  .container-margin {
    margin: 0;
    padding: 0;
    border: 1px solid red;
  }
`;

export const Aside = styled.aside`
  min-height: 100vh;
  width: 50%;
  margin-bottom: 6.25em;

  .content-desc {
    margin-top: 5em;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
  }

  .content-desc h2,
  p {
    font-weight: 600;
  }

  .content-desc h2 {
    font-size: 2rem;
    color: #20ac69;
  }

  .content-desc p {
    margin-top: 0;
    font-size: 1rem;
    font-weight: bold;
    height: 1em;
    width: 65%;
    text-align: center;
    letter-spacing: 0.1em;
    color: #161616;
  }

  .content-desc label {
    margin-top: 0;
    font-size: 1.1rem;
    font-weight: bold;
    height: 1em;
    width: 65%;
    text-align: center;
    letter-spacing: 0.15em;
  }

  .content-opt {
    display: flex;
    justify-content: space-between;
  }

  .content-desc .lang-program {
    width: 100%;
    display: flex;
    justify-content: space-between;
    gap: 80px;
  }
  .modal {
    display: none;
    flex-direction: column;
    position: absolute;
    left: 5%;
    top: 991px;
    height: 144px;
    width: 20%;
    border-radius: 5px;
    background: #f2f2f2;
    border: 1px solid ${Colors.PRIMARY_COLOR};

    margin-top: 0;
    font-size: 1.1rem;
    font-weight: bold;
    text-align: center;
    letter-spacing: 0.15em;

    list-style: none;
    text-decoration: none;
  }

  .modal.display {
    display: flex;
  }

  .modal ul {
    list-style: none;
    text-decoration: none;
    padding: 8px 0;
  }
  .modal ul li {
    cursor: pointer;
  }

  .modal ul li:hover {
    margin-left: 10%;
    width: 80%;
    background-color: ${Colors.PRIMARY_COLOR};
    color: #ffffff;
    border-radius: 5px;
  }

  .content-desc .lang-program .qnt-check {
    width: 100%;
  }

  .content-desc .lang-program .qnt-check label {
    width: 100%;
  }

  #my-input {
    color: #20ac69;
    text-align: center;
    font-weight: 500;
    letter-spacing: 0.1em;
  }
`;

export const Article = styled.article`
  min-height: 100vh;
  width: 50%;
  background: #161616;
  float: right;

  .content-desc {
    margin-top: 5em;
    display: flex;
    flex-direction: column;
    width: 100%;
  }

  .content-desc h2,
  p {
    font-weight: 600;
    align-self: center;
  }

  .content-desc h2 {
    font-size: 2rem;
    color: #20ac69;
  }

  .content-desc p {
    margin-top: 0;
    font-size: 1rem;
    font-weight: bold;
    height: 1em;
    width: 65%;
    text-align: center;
    letter-spacing: 0.1em;
    color: #fff;
  }

  .content-desc label {
    margin-top: 0;
    font-size: 1.1rem;
    font-weight: bold;
    height: 1em;
    width: 65%;
    text-align: center;
    letter-spacing: 0.15em;
  }

  .content-opt {
    display: flex;
    justify-content: space-between;
  }

  .content-desc .lang-program {
    width: 100%;
    display: flex;
    justify-content: space-between;
    gap: 56px;
  }

  .content-desc .lang-program .qnt-check {
    width: 100%;
  }

  .content-desc .lang-program .qnt-check label {
    width: 100%;
  }

  .header {
    height: 60px;
  }
`;

export const InputText = styled.input`
  width: ${(props) => (props.w ? props.w : "100%")};
  height: 58px;
  border: 1px solid ${Colors.PRIMARY_COLOR};
  background: rgba(32, 172, 105, 0.05);
  outline: none;
  border-radius: 12px;
  font-size: 1.125rem;
  padding-left: 1rem;

  text-align: center;
  font-weight: 500;
  letter-spacing: 0.1em;
  color: #20ac69;

  ::placeholder {
    text-align: center;
    font-weight: 500;
    letter-spacing: 0.1em;
    color: #20ac69;
  }
`;

export const TextArea = styled.textarea`
  width: 100%;
  overflow-y: scroll;
  height: 500px;
  outline: none;
  border: 1px solid #20ac69;
  border-radius: 12px;
  padding: 16px 16px;
  font-family: Nunito, sans-serif, monospace;
  font-weight: 500;
  background: rgba(32, 172, 105, 0.05);
`;

export const CardHunter = styled.div`
  min-height: 300px;
  width: 100%;
  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 18px;
  display: flex;
  flex-direction: column;
  align-items: start;
  padding: 44px 44px;

  h3 {
    font-family: "Nunito";
    font-style: normal;
    font-weight: 700;
    font-size: 36px;
    line-height: 49px;
    text-align: center;

    color: ${Colors.PRIMARY_COLOR};
  }

  p {
    font-family: "Nunito";
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 148.4%;
    /* identical to box height, or 27px */

    text-align: center;
    letter-spacing: 0.22em;

    color: #000000;
  }
  .content-infos-company {
    width: 100%;
    border-right: 2px solid ${Colors.PRIMARY_COLOR};
  }

  .info-company {
    height: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-right: 8px;
  }

  .info-company p {
    font-family: "Nunito";
    font-style: normal;
    font-weight: 800;
    font-size: 18px;
    line-height: 148.4%;
    /* identical to box height, or 27px */

    text-align: center;
    letter-spacing: 0.22em;

    color: #000000;
  }
`;
