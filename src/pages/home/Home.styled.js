import styled from "styled-components";
import Colors from "../../constants/Colors";

export const DivHome = styled.div`
  display: flex;
  flex-direction: column;
  align-items: ${(props) => (props.center ? "center" : "auto")};
  width: ${(props) => (props.w ? props.w : "auto")};
`;

export const ContainerBodyMetricaHome = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 120px;
  width: 100%;
  height: 100vh;
`;

export const ImgHome = styled.img`
  left: 160px;
  height: 545px;
  margin-top: 58px;
`;

export const DivUpInformation = styled.div`
  display: flex;
  flex-direction: ${(props) => (props.directionColumn ? "column" : "row")};
  align-items: ${(props) =>
    props.center ? "center" : props.isFlexEnd ? "flex-end" : "auto"};
  justify-content: ${(props) =>
    props.center ? "center" : props.spaceBettewen ? "space-between" : "auto"};
  padding: ${(props) => (props.padding ? props.padding : "auto")};
  background-color: ${(props) => (props.isImg ? "" : props.background)};
  background-image: url(${(props) => (props.isImg ? props.background : "")});
  width: 50%;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 0rem;
  height: 90vh;
`;

export const ContainerAceptedAll = styled.div`
  display: flex;
  flex-direction: row;
  height: 90vh;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export const TitleDivInformation = styled.p`
  font-family: nunito;
  font-style: normal;
  font-weight: 900;
  font-size: 48px;
  width: 417px;
  height: 388px;
  margin-top: 80px;
  line-height: 65.47px;
  color: ${(props) => (props.color ? props.color : Colors.WHITE)};
`;

export const HomeText = styled.p`
  font-family: nunito;
  font-style: normal;
  color: #ffffff;
  font-weight: 500;
  font-size: 18px;
`;

export const HomeTextLink = styled.a`
  position: relative;
  bottom: 8px;
  font-weight: 700;
  font-size: 18px;
  color: #ffffff;
  margin-left: 16px;
  text-decoration: none;
  cursor: pointer;
  :hover {
    color: ${Colors.BLACK};
  }
`;

export const Description = styled.p`
  font-weight: 400;
  font-size: 18px;
  margin-bottom: 50px;
`;
