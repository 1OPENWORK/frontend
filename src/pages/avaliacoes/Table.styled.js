import Styled from "styled-components";
import Colors from "../../constants/Colors";

export const Container = Styled.div`
    font-family: nunito;
    width: 100%;
    min-height: 100%;
    display: flex;
    flex-direction: column;
    
    td, th {
        text-align: center;
        vertical-align: middle;
    }

    td {
        max-width: 331px;
        height: 112px;
    }

    th {
        font-style: normal;
        font-weight: 500;
        font-size: 1rem;
        line-height: 148.4%;
        letter-spacing: 0.22em;
    }

    thead {
        border-bottom: 3px solid #D3D3D3A6;
        border-top: 3px solid #D3D3D3A6;
    }
    
    p {
        word-wrap: break-word;
        font-style: normal;
        font-weight: 400;
        font-size: 1rem;
        line-height: 148.4%;
        letter-spacing: 0.22em;
    }

    h1 {
        font-style: normal;
        font-weight: 900;
        font-size: 1.5rem;
        line-height: 33px;
        text-decoration-line: underline;
        color: ${Colors.AZUL_LINK};
    }

    h2 {
        font-style: normal;
        font-weight: 700;
        font-size: 1rem;
        line-height: 148.4%;
        letter-spacing: 0.22em;
    }

    
    .containerCompany {
        position: relative;
        width: 183px;
        height: 65px;
        display: flex;
        align-items: center;
        left: 24px;
        overflow: hidden;
    }
    
    .img {
        position: absolute;
        width: 40px;
        height: 40px;
    }

    .profileInformation {
        width: 100%;
        height: 100%;
        margin-left: 3rem;
    }

    .grade {
        display: flex;
        flex-direction: row;
    }

    .date{
        font-style: normal;
        font-weight: 900;
        font-size: 1.5rem;
        line-height: 33px;
    }

    .evaluate {
        position: relative;
        width: 140px;
        display: inline-block;
        flex-direction: column;
    }

    .stars {
        display: flex;
        flex-direction: row;
        gap: 5px;
        font-style: normal;
        font-weight: 900;
        font-size: 1.5rem;
        line-height: 33px;

        :hover {
            cursor: pointer;
        }
    }
    
    .white-row {
        background-color: ${Colors.WHITE};
    }

    .gray-row {
        background-color: ${Colors.GRAY_EA};
    }
    `;
