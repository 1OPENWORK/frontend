import styled from "styled-components";
import Colors from "../../../../constants/Colors";

const StyledSideBar = {
  Container: styled.div`
    width: 100%;
    height: 100%;
    background-color: ${Colors.BLACK_GREY01};
    border-right: 1px solid ${Colors.WHITE02};
    display: flex;
    flex-direction: column;
    color: ${Colors.WHITE01};
 overflow: scroll;
      overflow-x: hidden;
      overflow-y: auto;

      ::-webkit-scrollbar {
        width: 5px;
        position: absolute;
      }

      /* Track */
      ::-webkit-scrollbar-track {
        background: transparent;
        position: absolute;
      }

      /* Handle */
      ::-webkit-scrollbar-thumb {
        background: #888;
        position: absolute;
        opacity: 30%;
        z-index: 1;
      }

      /* Handle on hover */
      ::-webkit-scrollbar-thumb:hover {
        background: #555;
        position: absolute;
      }
    
  `,

  Header: styled.div`
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px;
    padding-left: 30px;
    border-bottom: 1px solid ${Colors.WHITE02};
    width: 100%;
    height: 80px;
    background-color: #0a0a0a;
    z-index: 1000;
  `,

  ListPersons: styled.div`
    height: 100%;
    padding-top: 90px;
  `,
};

export default StyledSideBar;
