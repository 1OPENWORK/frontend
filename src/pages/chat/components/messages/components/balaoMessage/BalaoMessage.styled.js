import styled from "styled-components";
import Colors from "../../../../../../constants/Colors";



const StyledBalaoMessage = {

    Container: styled.div`
        background-color: ${props => props.receiver ? Colors.BLACK_GREY05 : Colors.GREEN};
        width: 400px;
        padding: 20px;
        border-radius: 5px;
        margin: 1px;
        font-size: 14px;
    `




}

export default StyledBalaoMessage;