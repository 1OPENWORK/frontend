import styled from "styled-components";

export const ContainerMain = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f5f5f5;

  h1 {
    font-weight: bold;
    font-size: 2rem;
    color: #20ac51;
  }
`;

export const ContainerContent = styled.div`
  height: 40em;
  width: 80%;
  margin-left: 10%;
  display: flex;
  flex-direction: column;
  gap: 1.5em;
`;
