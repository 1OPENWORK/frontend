import styled from "@emotion/styled";
import Colors from "../../../../constants/Colors";

const StyledCardPerson = {
  Container: styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #495057;
    height: 75px;
    padding-left: 30px;
    cursor: pointer;

    &:hover {
        background-color: ${Colors.BLACK_GREY03};
    }

  `,

  Divisor: styled.div`
    display: flex;
    flex-direction: ${(props) => (props.isColumn ? "column" : "row")};
  `,

  Name: styled.label`
    overflow: hidden;
    font-size: 18px;
    font-weight: 500;
    text-overflow: ellipsis;
    white-space: nowrap;
    text-overflow: "...";
    cursor: pointer;

  `,

  PrevMessage: styled.label`
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    text-overflow: "...";
    cursor: pointer;

  `,
};

export default StyledCardPerson;
