import styled from "styled-components";

export const ImgCardPerson = styled.div`
  width: 170px;
  height: 300px;
  border-radius: 20px;
  background-image: url(${(props) => (props.img ? props.img : "")});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  filter: grayscale(${(props) => (!props.disabled ? 0 : "100%")});
  margin-left: 40px;
  margin-right: 40px;
  margin-top: 64px;
  cursor: pointer;
  transition: all 0.5s;
`;
