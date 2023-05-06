import styled from "styled-components";

const StyledInputForm = {
  Container: styled.div`
    margin-bottom: ${props => (props.spaceBottom ? props.spaceBottom : "0px")};
  `,

  Input: styled.input`
    background: rgba(32, 172, 105, 0.05);
    border: 1px solid #20ac69;
    border-radius: 12px;
    width: ${props => (props.w ? props.w : "22.375rem")};
    height: 3.563rem;
    padding-left: 0.625rem;
    color: #495057;
    font-weight: normal;
    margin-left: ${props => (props.ml ? props.ml : "0px")};
    margin-right: ${props => (props.mr ? props.mr : "0px")};
    margin-top: ${props => (props.mt ? props.mt : "0px")};
    margin-bottom: ${props => (props.mb ? props.mb : "0px")};
    font-size: 1rem;

    &:focus {
      outline: none;
    }
  `,

  Text: styled.p`
    font-weight: 700;
    font-size: 1.125rem;
    color: #20ac69;
    margin-bottom: 0.5rem;
  `,
};

export default StyledInputForm;
