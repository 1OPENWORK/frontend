import styled from "styled-components";
import Colors from "../../../../constants/Colors";

const projectStyles = {

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
    height: 344px;
    margin-top: 1rem;
    margin-left: 5rem;
    margin-right: 5rem;
    margin-bottom: 2rem;
    border-radius: 1rem;
    backgorund-color: ${Colors.WHITE}
    box-shadow: 4px 4px 4px 2px rgba(0, 0, 0, 0.25);
    `,

    Title: styled.div`
    margin-top: 2.5rem;
    margin-left: 5rem;
    font-style: normal;
    font-weight: 900;
    font-size: 1.5rem;
    line-height: 33px;
    `,

    Content: styled.div`
    position: absolut;
    width: 100%;
    height: 264px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 1rem;
    `,

    ContainerText: styled.div`
    width: 299px;
    max-height: auto;
    overflow: hidden;
    `,

    ContainerImg: styled.div`
    width: 500px;
    max-height: auto;
    overflow: hidden;
    background-color: ${props => (props.isImg ? "" : props.background)};
    background-image: url(${props => (props.isImg ? props.background : "")});
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

export default projectStyles;