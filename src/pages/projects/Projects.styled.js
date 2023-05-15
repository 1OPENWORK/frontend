import styled from "styled-components";

export const ContainerMain = styled.div`
  min-height: 100vh;
  padding: 3em 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f2f2f2;
  z-index: -10;
  overflow-x: hidden;

  h1 {
    font-weight: bold;
    font-size: 2rem;
    color: #20ac51;
  }
`;

export const ContainerContent = styled.div`
  z-index: 5;
  width: 80%;
  display: flex;
  flex-direction: column;
  margin-left: 10%;

  h1 {
    margin-bottom: 1em;
  }

  .loading {
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 10;
  }

  .loading h3 {
    font-size: 2rem;
    color: #20ac51;
  }
`;
