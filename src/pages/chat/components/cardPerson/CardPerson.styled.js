import styled from "@emotion/styled";
import Colors from "../../../../constants/Colors";

const StyledCardPerson = {
  Container: styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 16px;
    cursor: pointer;

    &:hover {
      mix-blend-mode: difference;
      background-color: #2b2e34;
    }
  `,

  UserFoto: styled.img`
    width: 48px;
    height: 48px;
    border-radius: 50%;
    margin-right: 16px;
  `,

  CardContent: styled.div`
    border-radius: 10px;
    padding: 12px;
    width: 100%;
  `,

  Header: styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 8px;
  `,

  UserName: styled.label`
    font-size: 16px;
    font-weight: bold;
    margin: 0;
  `,

  MessageInfo: styled.div`
    display: flex;
    align-items: center;
  `,

  MessageTime: styled.p`
    font-size: 14px;
    color: #999;
    margin: 0;
  `,

  MessageText: styled.p`
    margin: 8px 0 0;
    font-size: 16px;
    color: #888;
  `,

  SeeIcon: styled.span`
    margin-right: 5px;
    color: #4fc3f7;
    font-size: 16px;
  `,
};

export default StyledCardPerson;
