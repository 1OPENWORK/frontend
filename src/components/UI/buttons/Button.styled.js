import styled from "styled-components";
import Colors from "../../../constants/Colors";

export const GenericSolidButton = styled.button`
  background-color: ${(props) =>
    props.color ? props.color : props.inverted ? "#E0F0F5" : Colors.lightBlue};
  display: flex;
  color: ${(props) => (props.isDark ? Colors.BLACK : Colors.WHITE)};
  width: ${(props) => (props.width !== null ? `${props.width}px` : "auto")};
  height: ${(props) => (props.heigth !== null ? `${props.heigth}px` : "auto")};
  flex-direction: row;
  justify-content: center;
  align-items: center;
  align-self: ${(props) =>
    props.alignSelf !== null ? `${props.alignSelf}` : ""};

  padding: 12px 16px;
  font-family: nunito;
  font-weight: 900;
  line-height: 25px;
  font-size: 18px;
  gap: 12px;
  border: ${(props) =>
    props.inverted ? "0px solid #4D638D" : "0px solid #4D638D"};
  border-radius: 8px;
  letter-spacing: 0.5px;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  margin-left: ${(props) =>
    props.marginLeft ? props.marginLeft : "24px"} !important;
  margin-right: ${(props) =>
    props.marginRight ? props.marginRight : "24px"} !important;
  margin-top: ${(props) =>
    props.marginTop ? props.marginTop : "0"} !important;

  &:disabled {
    opacity: 0.5;
  }

  &:hover {
    cursor: ${(props) => (props.disabled ? "text" : "pointer")};
  }

  &:active {
    background-color: ${(props) =>
      props.disabled ? "" : Colors.PRIMARY_COLOR};
    color: ${(props) => (props.disabled ? "" : Colors.WHITE)};
    border-color: ${(props) => (props.disabled ? "" : Colors.PRIMARY_COLOR)};
  }

  @media screen and (max-width: 760px) {
    width: 100%;
  }
`;

export const RedCancelButton = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 12px 16px;
  gap: 12px;
  margin-right: 16px;
  background-color: #fee2e2;
  color: #991b1b;
  border-radius: 8px;
  border: 0px solid white;
  font-weight: bold;

  font-family: "Inter", sans-serif;
  letter-spacing: 0.5px;

  &:disabled {
    opacity: 0.5;
  }

  &:hover {
    cursor: ${(props) => (props.disabled ? "text" : "pointer")};
  }

  &:active {
    background-color: ${(props) => (props.disabled ? "" : "#ff7a7a")};
    color: ${(props) => (props.disabled ? "" : "white")};
  }

  @media screen and (max-width: 760px) {
    width: 100%;
    margin-right: 0px;
  }
`;

export const BlueEditButton = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 12px 16px;
  margin-right: 16px;
  gap: 12px;
  background-color: ${Colors.PROJECT50};
  color: ${Colors.PROJECT600};
  border-radius: 8px;
  border: 0px solid white;
  font-weight: bold;

  font-family: "Inter", sans-serif;
  letter-spacing: 0.5px;

  &:disabled {
    opacity: 0.5;
  }

  &:hover {
    cursor: ${(props) => (props.disabled ? "text" : "pointer")};
  }

  &:active {
    background-color: ${(props) => (props.disabled ? "" : "#a1abd1")};
  }

  @media screen and (max-width: 760px) {
    width: 100%;
    margin-right: 0px;
  }
`;

export const OutlinedUpdateButton = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 12px;
  gap: 8px;
  cursor: pointer;
  color: ${Colors.PROJECT500};
  font-family: "Inter", sans-serif;
  width: ${(props) => (props.isMobile ? "95%" : "150px")};
  border: 1px solid ${Colors.PROJECT500};
  border-radius: 8px;
`;
