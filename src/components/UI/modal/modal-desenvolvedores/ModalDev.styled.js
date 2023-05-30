import styled from "styled-components";

const ModalList = {
  ModalHeader: styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding-inline: 20px;
  `,

  ModalClosedButton: styled.button`
    color: #d9d9d9;
    border: none;
    background-color: transparent;
    font-size: 24px;
    font-family: nunito;
  `,

  ModalTitle: styled.p`
    font-family: "Nunito";
    font-style: normal;
    font-weight: 800;
    font-size: 24px;
  `,

  DivSearch: styled.div`
    margin-top: 20px;
  `,

  DivFilters: styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
  `,

  DivFiltreds: styled.div`
    padding: 20px;
    padding-inline: 15px;
    height: 39px;
    background:  ${props => props.cor};
    border-radius: 16px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: white;
    width: 153px;
    margin-inline: 10px;
  `,

  SpanIcons: styled.span`
    cursor: pointer;
    font-family: nunito;
  `,

  InputSearch: styled.input`
    width: 100%;
    height: 48px;
    background-color: transparent;
    border: 1px solid #20ac69;
    border-radius: 16px;
    color: black;
    padding-left: 20px;
    padding-right: 20px;
    font-family: nunito;
    margin-top: 20px;
    background: rgba(32, 172, 105, 0.05);
  `,

  SelectSearch: styled.select`
    width: 100%;
    height: 48px;
    background-color: transparent;
    border: 1px solid #20ac69;
    border-radius: 16px;
    color: black;
    padding-left: 20px;
    padding-right: 20px;
    font-family: nunito;
    margin-top: 20px;
    background: rgba(32, 172, 105, 0.05);
  `,

  ButtonSearch: styled.button`
    width: ${props => props.tamanho ? props.tamanho : "100%"};
    height: 48px;
    background-color: #20ac69;
    border: none;
    border-radius: 16px;
    color: white;
    padding-left: 20px;
    padding-right: 20px;
    font-family: nunito;
    margin-top: 30px;
    font-family: "Nunito";
    font-style: normal;
    font-weight: 800;
    font-size: 22px;
  `,

  DivButton : styled.div`
   display: flex;
   justify-content: center; 
  `

};

export default ModalList;
