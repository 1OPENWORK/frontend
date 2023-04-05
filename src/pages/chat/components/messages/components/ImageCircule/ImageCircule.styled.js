import styled from "styled-components";

const StyledImageCircule = {
  Container: styled.div`
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;

    p {
      display: none;
      position: absolute;
      font-size: 30px;
      margin: 0;
    }

    p ion-icon {
      font-size: 50px;
      margin: 0;
    }

    &:hover {
      img {
        opacity: 0.4;
      }
      p {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
      }
    }
  `,

  Input: styled.input`
    position: absolute;
    top: -2000px;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
  `,

  Img: styled.img`
    width: 2 00px;
    height: 200px;
    border-radius: 100%;
    object-fit: cover;
    transition: all 0.3s;
  `,
};

export default StyledImageCircule;
