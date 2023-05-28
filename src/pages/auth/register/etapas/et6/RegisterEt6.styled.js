import styled from "styled-components";

export const Input = styled.input`
  background: transparent;
  border: none;
  outline: none;
  border-radius: 12px;
  width: ${(props) => (props.w ? props.w : "358px")};
  height: 48px;
  padding-left: 10px;
  font-size: 1.5rem;
  color: #20ac69;

  font-weight: 700;
  margin-left: ${(props) => (props.ml ? props.ml : "0px")};
  margin-right: ${(props) => (props.mr ? props.mr : "0px")};
  margin-top: ${(props) => (props.mt ? props.mt : "0px")};
  margin-bottom: ${(props) => (props.mb ? props.mb : "0px")};

  ::placeholder {
    color: #20ac69;
  }
`;

export const DivInput = styled.div`
  width: ${(props) => (props.w ? props.w : "")};
  background: rgba(32, 172, 105, 0.05);
  border: 1px solid #20ac69;
  border-radius: 12px;
  width: 132px;
  height: 48px;
  padding-left: 10px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const H3Input = styled.h3`
  margin-top: 0.5rem;
  align-self: center;
  font-weight: 700;
  font-size: 1rem;

  color: #20ac69;
`;

export const Button = styled.button`
  position: relative;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  color: ${(props) => props.color};

  background-color: ${(props) => props.backGround};
  border: 1px solid #20ac69;
  border-radius: 12px;
  margin-bottom: 32px;

  display: flex;
  align-items: center;
  justify-content: center;

  font-weight: 800;

  font-size: 1rem;
`;

export const DivFlowScroll = styled.div`
  margin-top: 16px;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  height: 70%;
  width: 55%;
`;
