import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  left: 164px;
  top: 2.5rem;
  padding: 0 5px;
  height: 100%;
  flex: 0 0 320px;

  opacity: ${(props) => (props.done ? 0.6 : 1)};

  & + div {
    border-left: 1px solid rgba(0, 0, 0, 0.05);
  }

  background: #20ac69;
  border-radius: 20px;
  overflow-y: scroll;

  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 42px;

    h2 {
      font-weight: 500;
      font-size: 16px;
      padding: 0 10px;
      color: white;
    }
    button {
      width: 35px;
      height: 35px;
      border-radius: 50px;
      background: #4dff7e;
      border: 0;
      cursor: pointer;
    }

    .btn-edit {
      border-radius: 104px;
      background: linear-gradient(145deg, #34b777, #3ed98d);
      box-shadow: 19px 19px 51px #1d6642, -19px -19px 51px #57ffc6;
    }
  }

  ul {
    margin-top: 30px;
  }
`;
