import styled from "styled-components";

export const Container = styled.div`
  height: 100%;
  width: 10em;
  position: fixed;
  background: #111111;
  color: #fff;
  text-shadow: 0 2px 2px rgba(0, 0, 0, 0.4);
  border-radius: 0 24px 24px 0;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  display: flex;
  flex-direction: column;
  z-index: 1000;
  font-size: 1rem;

  h2 {
    font-size: 1.2rem;
    font-weight: 400;
    color: #fff;
    letter-spacing: 1.5px;
  }

  button:nth-child(2) h2 {
    color: #20ac51;
  }
  

  button {
    background-color: transparent;
    border: none;
    color: #fff;
    cursor: pointer;

    
  }
`;

export const Logo = styled.img`
  height: ${(props) => props.height};
`;

export const Tarefa = styled.img`
  height: 28px;
`;
