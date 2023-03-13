import styled from "styled-components";

const StyledInputForm = {
  Container: styled.div`
    margin-bottom: ${(props) =>
      props.spaceBottom ? props.spaceBottom : "0px"};
  `,

  Input: styled.input`
    background: rgba(32, 172, 105, 0.05);
    border: ${props => props.isInvalid ? "1px solid #e63946" : "1px solid #20ac69"};
    border-radius: 12px;
    width: ${props => props.w ? props.w : "358px"};
    height: 57px;
    padding-left: 10px;
    font-size: 28px;
    color: #495057;
    font-weight: normal;
    margin-left: ${props => props.ml ? props.ml : "0px"};
    margin-right: ${props => props.mr ? props.mr : "0px"};
    margin-top: ${props => props.mt ? props.mt : "0px"};
    margin-bottom: ${props => props.mb ? props.mb : "0px"};

    &:focus {
      outline: none;
    }
  `,

  Text: styled.p`
    font-weight: 700;
    font-size: 18px;
    color: ${props => props.isInvalid ? "#e63946" : "#20ac69"};
  `,
};

export default StyledInputForm;
