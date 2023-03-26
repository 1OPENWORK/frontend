import styled from "styled-components";
import Colors from "../../../../../../constants/Colors";

const StyledBalaoMessage = {
  Container: styled.div`
    background-color: ${(props) =>
      props.receiver ? Colors.BLACK_GREY05 : Colors.GREEN};
    border-radius: 20px;
    padding: 10px;
    margin-bottom: 10px;
    max-width: 70%;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    &.mine {
      margin-left: 30%;
    }

    &:not(.mine)::before {
      left: -10px;
      border-right: 10px solid #fff;
    }
  `,

  Message: styled.p``,

  Time: styled.span`
    font-size: 12px;
    margin-top: 5px;
    margin-bottom: 3px;
    color: #999;
  `,

  Divisor: styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    align-items: center;
    gap: 1rem;
  `,
};

export default StyledBalaoMessage;
