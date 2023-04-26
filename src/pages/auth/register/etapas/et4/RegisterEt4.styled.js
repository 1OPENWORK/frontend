import styled from "styled-components";

export const Container = styled.div`
  height: 70%;
  display: flex;
  align-items: start;
  justify-content: center;
  overflow: hidden;
`;

export const Flex = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: start;
  flex-direction: column;
`;

export const ColumCount = styled.div`
  column-count: ${(props) => props.count};
  column-gap: ${(props) => props.gap};
`;

export const Divider = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  height: 100%;
  width: 100%;
  align-self: flex-end;
  padding-bottom: 24px;
`;
