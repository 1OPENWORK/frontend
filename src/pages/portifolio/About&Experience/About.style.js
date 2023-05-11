import styled from "styled-components";
import Colors from "../../../constants/Colors";

const aboutStyles = {

    Container: styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    overflow: hidden;
    font-family: nunito;
    `,

    ContainerContent: styled.div`
    width: 72.3%;
    height: 100%;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    `,
    
    Header: styled.div `
    position: relative;
    display: flex;
    width: 50%;
    height: 90px;
    margin-left: 5rem;
    margin-top: 3rem;
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
    position: absolute;
    width: 80%;
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
    width: auto;
    height: 393px;
    margin-top: 4rem;
    margin-left: 5rem;
    margin-right: 5rem;
    margin-bottom: 2rem;
    `,

    ContainerAboutMe: styled.div`
    position: absolute;
    width: 100%;
    max-height: 48.6%;
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

    Content: styled.div`
    margin-top: 1rem;
    font-style: normal;
    font-weight: 400;
    font-size: 1rem;
    line-height: 148.4%;
    `,

    ContainerWhatLook: styled.div`
    position: absolute;
    width: 51.7%;
    max-height: auto;
    overflow: hidden;
    margin-top: 13.9rem;
    `,

    ContainerPreferences: styled.div`
    position: absolute;
    right: 0;
    width: 36.9%;
    max-height: auto;
    overflow: hidden;
    margin-top: 13.9rem;
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
}

export default aboutStyles;