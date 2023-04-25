import styled from "styled-components";

export const Input = styled.input`
  background: transparent;
  border: none;
  outline: none;
  border-radius: 12px;
  width: ${(props) => (props.w ? props.w : "358px")};
  height: 57px;
  padding-left: 10px;
  font-size: 28px;
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
  background: rgba(32, 172, 105, 0.05);
  border: 1px solid #20ac69;
  border-radius: 12px;
  width: ${(props) => props.w};
  height: 57px;
  padding-left: 10px;
  font-size: 24px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const H3Input = styled.h3`
  margin-top: 0.5rem;
  align-self: center;
  font-weight: 700;

  color: #20ac69;
`;

export const Button = styled.button`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  color: ${(props) => props.color};

  background-color: ${(props) => props.backGround};
  border: 1px solid #20ac69;
  border-radius: 12px;
  margin-bottom: 32px;
  padding-top: 8px;

  display: flex;
  align-items: center;
  justify-content: center;

  font-weight: 800;

  font-size: 1.2rem;
`;


export const DivFlowScroll = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  overflow-y: scroll;
  overflow-y: auto;
  height: 100%;
`;

