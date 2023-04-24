import styled from "styled-components";

const StyledCardConexao = {
  Container: styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 80px;
    padding: 20px;
    border-bottom: 1px solid #495057;
    gap: 5rem;
  `,

  Divisor: styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;

    label {
      font-size: 20px;
    }
  `,

  ButtonCheck: styled.button`
    width: 200px;
    height: 50px;
    border: none;
    font-size: 20px;
    font-weight: 600;
    background-color: ${props => (props.selected ? "#d90429" : "#07ea8b")};
    color: ${props => props.selected && "#ffffff"};

    &:hover {
      background-color: ${props => (props.selected ? "#d90429" : "#03834d")};
    }
  `,
};

export default StyledCardConexao;
