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
    width: ${(props) => (props.type === 2 ? "50px" : "200px")};
    height: 50px;
    border: none;
    font-size: ${(props) => (props.type === 2 ? "10px" : "20px")};
    border-radius: ${(props) => (props.type === 2 ? "10%" : "0")};
    font-weight: 600;
    background-color: ${(props) => (props.type === 2 ? "#ffffff" : props.selected ? "#ced4da" : "#07ea8b")};
    color: ${(props) => (props.type === 2 ? "#e63946" : "#ffffff")};

    &:hover {
      background-color: ${(props) => (props.type === 2 ? "" : props.selected ? "#ced4da" : "#03834d")}; 
    }
  `,
};

export default StyledCardConexao;
