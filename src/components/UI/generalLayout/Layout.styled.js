import styled from "styled-components";
import Colors from "../../../constants/Colors";



//Typography
export const H1 = styled.h1`
  word-break: break-word;
  color: ${(props) => (props.color ? props.color : "#575757")};
  font-weight: ${(props) => (props.bold ? "bold" : "")};
  font-size: ${(props) => (props.fontSize ? props.fontSize : "24px")};
  @media screen and (max-width: 760px) {
    font-size: ${(props) => (props.fontSize ? props.fontSize : "20px")};
  }

  font-weight: bold;
  font-family: "Inter", sans-serif;
`;

export const H2 = styled.h1`
  word-break: break-word;
  color: ${(props) => (props.color ? props.color : "#575757")};
  font-weight: ${(props) => (props.bold ? "bold" : "")};
  font-size: 18px;
  font-weight: bold;
  font-family: "Inter", sans-serif;
`;

export const H3 = styled.h1`
  word-break: break-word;

  color: ${(props) => (props.color ? props.color : "#575757")};
  font-weight: ${(props) => (props.bold ? "bold" : "")};
  font-size: 14px;
  font-weight: bold;
  font-family: "Inter", sans-serif;
`;

export const TitleLarge = styled.h1`

  font-weight: 600;
  letter-spacing: -0.02em;

  color: ${(props) => (props.color ? props.color : "#101828")};
  font-weight: ${(props) => (props.bold ? "bold" : "")};

  @media screen and (max-width: 1425px) {
    margin-left: 20px;
  }
`;

export const Text = styled.p`
  word-break: break-word;
  color: ${(props) => (props.color ? props.color : "#101828")};
  font-size: 16px;
  font-weight: ${(props) => (props.bold ? "bold" : "")};
  font-family: "Inter", sans-serif;
`;

export const SubTitle = styled.p`
  position: relative;
  bottom: 8px;

  color: ${(props) => (props.color ? props.color : "#9ca3af")};
  font-weight: ${(props) => (props.bold ? "bold" : "")};

  @media screen and (max-width: 1425px) {
    margin-left: 20px;
  }
`;

export const SubTitleSimple = styled.p`
  color: ${(props) => (props.color ? props.color : "#9ca3af")};
  font-weight: ${(props) => (props.bold ? "bold" : "")};
`;

export const Span = styled.span`
  word-break: break-word;
  font-size: 15px;
  color: ${(props) => (props.color ? props.color : "#9ca3af")};
  font-weight: ${(props) => (props.bold ? "bold" : "")};
  text-align: ${({ textAlign }) => textAlign};
`;

export const TextErr = styled.p`
  position: relative;
  bottom: 5px;

  color: ${(props) => (props.color ? props.color : "#d32f2f")};
  font-weight: ${(props) => (props.bold ? "bold" : "")};
  margin: 0px;
  margin-left: 5px;
  font-family: Inter;
  font-weight: 400;
  font-size: 0.75rem;
`;

export const TextLink = styled.a`
  word-break: break-word;
  color: ${(props) =>
    props.disabled ? "#939393" : props.color ? props.color : "#575757"};
  font-size: 14px;
  font-weight: ${(props) => (props.bold ? "bold" : "")};
  font-family: "Inter", sans-serif;
  cursor: ${(props) => (props.disabled ? "auto" : "pointer")};
`;

// Containers
export const FontContainer = styled.div`
  font-family: "Inter", sans-serif;
`;

export const ListItemContainer = styled.div`
  flex-direction: row;
  background-color: ${(props) =>
    props.disabled ? "#F9FAFB66;" : Colors.GRAY50};
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 5px;
  margin-bottom: 15px;
`;

export const GeneralContainer = styled.div`
height: 100vh;
`;

export const GeneralContainerQuestionnaire = styled.div`
  padding-top: 100px;
  padding-left: 10px;
  padding-right: 10px;
`;

export const GeneralContainerCenter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  margin-top: 83px;
  font-family: "Inter";
`;

export const ContainerSidebar = styled.div`
  position: fixed;
  width: 20%;
  height: 100%;
  background-color: ${Colors.PROJECT600};
  align-items: center;
  text-align: center;
  color: white;
`;
//  height: ${props=>props.isMobile? '60vh':'47vh'};

export const ScrollNavItens = styled.div`
  overflow-y: scroll;
  height: ${props=>props.isMobile? '60vh':'47vh'};
  margin-bottom: 5px;

  ::-webkit-scrollbar {
      width: 5px;
  }

  ::-webkit-scrollbar-track {
      box-shadow: inset 0 0 5px #E0F0F5; 
      border-radius: 8px;
  }

  ::-webkit-scrollbar-thumb {
      background: #ffffff; 
      border-radius: 5px;
  }

  @media screen and (min-width: 1660px ) {
    height: 65vh;
  }

`;

//flexDirection: isMobile? 'column':'row', display: 'flex'
export const ResponsiveContainer = styled.div`
  flex-direction: ${(props) => (props.isMobile ? "column" : "row")};
  display: flex;
`;

// Tables
export const Table = styled.table`
  width: 100%;
`;

export const TableData = styled.td`
  width: ${(props) => (props.width ? props.width : "")};
  text-align: ${(props) => (props.alignRight ? "right;" : "left;")};
`;
