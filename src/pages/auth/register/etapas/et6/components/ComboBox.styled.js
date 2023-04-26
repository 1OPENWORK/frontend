import styled from "styled-components";

export const Select = styled.select`
  background: rgba(32, 172, 105, 0.05);
  border: 1px solid #20ac69;
  border-radius: 12px;
  width: 132px;
  height: 48px;
  padding-left: 10px;
  font-size: 1rem;
  outline: none;
  color: #20ac69;

  font-weight: 700;

  option {
    color: #20ac69;
    font-weight: 700;
  }

  option:focus {
    color: red;
  }
`;
