import styled from 'styled-components'

export const Container = styled.div`
  height: 100%;
  width: 10em;
  position: fixed;
  background: #161616;
  text-shadow: 0 2px 2px rgba(0, 0, 0, 0.4);
  align-items: center;
  gap: 2rem;
  display: flex;
  flex-direction: column;
  z-index: 1000;
  font-size: 1rem;
`

export const BodyContainerProjecteds = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100%;
  gap: 2rem;

  h2 {
    font-size: 1.2rem;
    font-weight: 400;
    letter-spacing: 1.5px;
  }

  button {
    background-color: transparent;
    border: none;
    color: #fff;
    cursor: pointer;
    color: ${(props) => props.color};
  }
`

export const Logo = styled.img`
  height: ${(props) => props.height};
`

export const Tarefa = styled.img`
  height: 28px;
`
