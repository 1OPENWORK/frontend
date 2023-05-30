import styled from "styled-components";

const ModalStatus = {
  ModalHeader: styled.img`
    display: flex;
    flex-direction: row;
    justify-content: center;
    padding-inline: 20px;
    position: relative;
    top: 0px;
    width: 16%;
    margin: 0 auto;
  `,

  ModalBody: styled.p`
    font-family: "Poppins";
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 30px;
    text-align: center;
    color: #000000;
    margin-bottom: 45px;
    margin-top: 40px;
  `,

  ModalButton: styled.button`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    padding: 0px;
    width: 90%;
    height: 44px;
    background: #20ac69;
    border-radius: 8px;
    border: none;
    color: #f5f5f5;
    font-family: "Inter";
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
  `,
};

export default ModalStatus;
