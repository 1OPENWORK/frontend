import Styled from "styled-components";
import Colors from "../../constants/Colors";

export const Container = Styled.div`
    position: relative;
    font-family: nunito;
    min-width: 100%;
    min-height: 80px;
    top: 0;
    display: flex;
    flex-direction: column;

    li {
        list-style: none;
        font-style: normal;
        font-weight: 800;
        font-size: 1rem;
        line-height: 148.4%;
        letter-spacing: 0.22em;
    }

    a {
        text-decoration: none;
        color: ${Colors.BLACK};
    }

    ul {
        padding: 0;
    }

    .containerItemSubMenu {
        position: absolute;
        width: fit-content;
        height: 24px;
        display: flex;
        left: 24px;
        bottom: 0;
    }

    .header {
        display: flex;
        justify-content: space-between;
    }

    .header-menu {
        gap: 40px;
        display: flex;
        flex-wrap: wrap;
    }

    .header-menu a {
        position: relative;
        display: inline-block;
    }

    .header-menu a::after{
        content: "";
        position: absolute;
        width: 0px;
        height: 3px;
        display: block;
        transition: 0.4s;
        background: ${Colors.SECONDARY_COLOR};
    }

    .header-menu a:hover::after {
        width: 100%;
    }

    .header-menu .display::after {
        width: 100%;
    }
`;
