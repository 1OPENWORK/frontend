import styled from "styled-components";
import Colors from "../../../../../../constants/Colors";

const StyledBalaoMessage = {
  BodyMessage: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    min-width: 150px;
  `,

  Message: styled.div``,

  Time: styled.span`
    font-size: 14px;
    margin-top: 5px;
    margin-bottom: 3px;
    color: #999;
  `,

  ContainerFooter: styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 0.5rem;
  `,
};

export default StyledBalaoMessage;
