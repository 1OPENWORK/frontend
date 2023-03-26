import styled from "styled-components";
import Colors from "../../../../../constants/Colors";

export const ContainerCardBePartToo = styled.div`
  width: 455px;
  height: 235px;
  background: #ffffff;
  border-radius: 18px;
  margin: 80px 32px 80px 80px;
  display: flex;
  flex-direction: column;
  font-family: nunito;
`;

export const ContainerBodyCardBePartToo = styled.div`
  margin: 32px;
`;

export const TagCardBePartTo = styled.div`
  color: white;
  font-weight: 400;
  font-size: 16px;
  background: #20ac69;
  border-radius: 12px;
  width: 88px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const TitleCardBePartTo = styled.h2`
  font-weight: 900;
  font-size: 28px;
  color: ${Colors.SECONDARY_COLOR};
  margin-top: 16px;
  height: 32px;
`;

export const DescriptionCardBePartTo = styled.p`
  font-weight: 400;
  font-size: 18px;
  margin-top: 16px;
  width: 292px;
  height: 75px;
`;
