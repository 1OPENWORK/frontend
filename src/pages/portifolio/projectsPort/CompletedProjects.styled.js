import styled from "styled-components";
import Colors from "../../../constants/Colors";

const StyledCompletedProjects = {
  Container: styled.div`
    width: 100%;
    margin-left: 430px;
    overflow: scroll;
    overflow-x: hidden;
    overflow-y: auto;
  `,

  ContainerContent: styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    overflow: hidden;
  `,

  Header: styled.div`
    position: relative;
    display: flex;
    width: 50%;
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
    background-image: url(${props => props.img ? props.img : ""});
    background-size: cover;
    background-position: center;
  `,

  ContainerHeader: styled.div`
    position: absolute;
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
    height: 100%;
    display: flex;
    flex-direction: row;
  `,

  Text: styled.div`
    font-size: 1.1rem;
    font-style: normal;
    font-weight: 600;
    line-height: 148.4%;
    margin-left: 0.5rem;
    padding-left: 20px;
    padding-right: 20px;
  `,

  Specializations: styled.div`
    width: auto;
    height: 100%;
  `,

  ContainerData: styled.div`
    display: flex;
    flex-direction: column;
    padding: 30px;
    width: 90%;
    height: 444px;
    margin-top: 1rem;
    margin-left: 2rem;
    margin-bottom: 2rem;
    border-radius: 1rem;
    background-color: ${Colors.WHITE};
    box-shadow: 4px 4px 4px 2px rgba(0, 0, 0, 0.25);

    @media screen and (min-width: 2000px) {
      width: 60%;
    }
  `,

  Title: styled.div`
    margin-top: 2.5rem;
    margin-left: 2rem;
    font-style: normal;
    font-weight: 900;
    font-size: 1.5rem;
    line-height: 33px;
  `,

  Content: styled.div`
    width: 100%;
    height: 264px;
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
    margin-top: 1rem;
  `,

  ContainerText: styled.div`
    width: 100%;
    max-height: auto;
    overflow: hidden;
  `,

  ContainerImg: styled.div`
    width: 500px;
    max-height: auto;
    overflow: hidden;
    border-radius: 10px;
    background-color: ${(props) => (props.isImg ? "" : props.background)};
    background-image: url(${(props) => (props.isImg ? props.background : "")});
    background-position: center;
    background-size: cover;
  `,

  ContainerButtons: styled.div`
    position: relative;
    display: flex;
    width: auto;
    height: 60px;
    flex-direction: row;
    overflow: hidden;
    margin-left: 5rem;
    margin-right: 5rem;
    justify-content: space-between;
  `,

  ButtonInfoDiv: styled.div`
    display: flex;
    align-items: center;
  `,

  Info: styled.p`
    cursor: pointer;
    margin-left: ${(props) => (props.tamanho ? props.tamanho : "0")};
  `,

  InfoText: styled.p`
    padding-inline: 20px;
    text-align: justify;
  `,

  ContainerCalendary: styled.div`
    margin-top: 10px;
    font-size: 16px;
    font-style: italic;
    font-weight: 600;
  `,
};

export default StyledCompletedProjects;
