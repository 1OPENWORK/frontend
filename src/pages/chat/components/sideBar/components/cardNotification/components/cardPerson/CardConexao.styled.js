import styled from "styled-components";
import Colors from "../../../../../../../../constants/Colors";

const StyledCardConexao = {
  Container: styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px;
    height: 80px;

    &:hover{
        background-color: ${Colors.BLACK_GREY01};
    }

  `,

  Div: styled.div`
    span {
      margin-left: 10px;
      font-weight: 700;
      word-break: break-all;
    }
  `,

  ImgPerson: styled.img`
    border-radius: 100%;
    height: 60px;
    width: 60px;
    object-fit: cover;
    object-position: center;
  `,

  ButtonAdd: styled.button`
    width: 50px;
    background-color: ${Colors.PRIMARY_COLOR};
    color: white;
    font-size: 25px;
    font-weight: bold;
    display: flex;
    align-items: center;
    justify-content: center;

    @media screen and (max-width: 1200px) {
      width: 30px;
    }
  `,
};

export default StyledCardConexao;
