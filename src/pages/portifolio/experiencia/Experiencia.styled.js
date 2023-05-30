import styled from "styled-components";
import Colors from "../../../constants/Colors";

const StyledExperiencia = {
  Container: styled.div`
    height: 100vh;
    width: 100%;
    overflow: scroll;
    overflow-x: hidden;
    overflow-y: auto;
    margin-left: 430px;
  `,

  Header: styled.div`
    position: relative;
    display: flex;
    height: 90px;
    margin-left: 5rem;
    margin-top: 1rem;
  `,

  ImgUser: styled.div`
    position: absolute;
    width: 90px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    left: 0;
    cursor: pointer;
    border-radius: 100%;
    background-color: ${Colors.BLACK};
  `,

  ContainerHeader: styled.div`
    height: 100%;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    margin-left: 7.65rem;
  `,

  NameUser: styled.div`
    width: 100%;
    height: auto;
    font-size: 2.5rem;
    font-style: normal;
    font-weight: 900;
    line-height: 57px;
    color: ${Colors.PRIMARY_COLOR};
  `,

  ContainerNoteArea: styled.div`
    width: 100%;
    height: 30%;
    display: flex;
    flex-direction: row;
  `,

  Note: styled.div`
    width: 11%;
    height: 100%;
    display: flex;
    flex-direction: row;
  `,

  Text: styled.div`
    font-size: 1rem;
    font-style: normal;
    font-weight: 700;
    line-height: 148.4%;
    letter-spacing: 0.22em;
    margin-left: 0.5rem;
  `,

  Specializations: styled.div`
    width: auto;
    height: 100%;
    margin-left: 2rem;
    margin-right: 2rem;
  `,

  ContainerData: styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    padding: 40px;
    width: auto;
  `,

  ContainerAboutMe: styled.div`
    width: 100%;
    height: 250px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
  `,

  Title: styled.div`
    font-style: normal;
    font-weight: 900;
    font-size: 1.5rem;
    line-height: 33px;
  `,

  ContentBox: styled.textarea`
    margin-top: 1rem;
    font-style: normal;
    font-weight: 400;
    font-size: 1rem;
    line-height: 148.4%;
    width: 100%;
    height: 250px;
    padding: 10px;
    border-radius: 8px;

    &:focus {
      outline: none;
    }
  `,

  ContainerWhatLook: styled.div`
  width: 100%;
  `,

  ContainerPreferences: styled.div`
    width: 36.9%;
    overflow: hidden;
  `,

  ContentPreferences: styled.div`
    height: 100%;
    margin-top: 1rem;
    display: flex;
    flex-direction: column;
  `,

  ItemContent: styled.div`
    display: flex;
    flex-direction: row;
    gap: 1rem;
  `,

  Itens: styled.div`
    max-width: 70%;
    overflow: hidden;
    font-size: large;
  `,

  ContainerButtons: styled.div`
    position: relative;
    display: flex;
    width: auto;
    height: 60px;
    flex-direction: row;
    overflow: hidden;
    margin-left: 1rem;
    margin-bottom: 5rem;
    justify-content: space-between;
  `,

  DivRow: styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 20px;
  `,
};

export default StyledExperiencia;
