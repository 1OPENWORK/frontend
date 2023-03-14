import styled from "styled-components";

export const ButtonCheck = styled.button`
  width: 160px;
  height: 44px;
  color: ${(props) => props.color};

  background-color: ${(props) => props.backGround};
  border: 1px solid #20ac69;
  border-radius: 12px;
  margin-bottom: 32px;
  padding-top: 8px;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const TitleProf = styled.h3`
  font-size: 18px;
  font-weight: 900;
`;

