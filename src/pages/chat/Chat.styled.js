import styled from "styled-components";



const StyledChat = {

    Container: styled.div`
        width: 100%;
        max-height: 100vh;
        display: flex;
        overflow: hidden;

    `,

    Div: styled.div`
        width: ${props => props.width ? props.width : "auto"};
    `,

}

export default StyledChat;