import { Modal } from "react-bootstrap";
import styled from "styled-components";

const StyledModalGroup = {
  Modal: styled(Modal)``,

  Container: styled.div`
    display: flex;
    flex-direction: column;
    background-color: #171a1f;
    width: 100%;
    height: 100%;
    border: 1px solid red;
    color: white;
    padding-left: 50px;
  `,

  DivBetween: styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    height: 50px;
    width: 98%;
    color: white;
    font-size: 30px;
  `,
};

export default StyledModalGroup;
