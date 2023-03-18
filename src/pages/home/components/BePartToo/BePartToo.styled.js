import styled from "styled-components";
import Colors from "../../../../constants/Colors";

export const ContainerBePartToo = styled.div`
padding-top: 100px;
    background-color: ${Colors.PRIMARY_COLOR};
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-top: 50px;
  padding-bottom:50px;
`;

export const BePartTooParagrafo = styled.p`
  font-weight: 400;
  font-size: 18px;
  color: white;
  margin-bottom: 100px;
  margin-top: 40px;
  width: 500px;
  text-align: center;
`;

export const BePartTooCards = styled.div`
  height: 100%;
  width: 100%;
  display: flexbox;
  overflow-x: scroll;

  ::-webkit-scrollbar {
    width: 10px;
    height: 5px;

}
                    
::-webkit-scrollbar-track {
    border-radius: 10px;

}
                    
::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background: ${Colors.BLACK};
}
  
`;
