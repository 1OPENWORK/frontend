import styled from "styled-components";
import Colors from "../../../../constants/Colors";

const StyledMessage = {
  Container: styled.div`
    display: flex;
    flex-direction: column-reverse;
    padding-top: 100px;
    padding-bottom: 100px;
    height: 100vh;
    background-color: #101318;
    color: ${Colors.WHITE01};
    overflow: scroll;
    overflow-x: hidden;
    overflow-y: auto;
    transition: all 0.2s;

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

  Reverce: styled.div``,

  Header: styled.div`
    display: flex;
    align-items: center;
    position: fixed;
    height: 80px;
    width: 70%;
    padding-left: 20px;
    top: 0;
    background-color: #171a1f;
    z-index: 10;
  `,

  Divisor: styled.div`
    display: flex;
    padding-left: 20px;
    padding-right: 20px;
    justify-content: ${(props) => (props.receiver ? "start" : "flex-end")};
  `,

  ContainerNotSelected: styled.div`
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  `,
};

export const IMessageContainer = styled.div`
  border-radius: 0.25rem;
  display: flex;
  flex-direction: column;
  font-size: 1.25rem;

  & p {

    line-height: 1.25;
    font-size: 16px;
    max-width: 75%;
    padding: 0.5rem 0.875rem;
    position: relative;
    word-wrap: break-word;
  }

 

  & p.from-me {
    border-radius: 5px 5px 10px 5px;
    align-self: flex-end;
    background-color: #1b4332;
    color: #fff;
  }

  & p.from-me::before {
    border-radius: 1.15rem;
    border-right: 1rem solid #1b4332;
    right: -0.35rem;
    transform: translate(0, -0.1rem);
  }

  & p.from-me::after {
    background-color: #101318;
    border-bottom-left-radius: 0.5rem;
    right: -40px;
    transform: translate(-30px, -2px);
    width: 10px;
  }

  & p[class^="from-"] {
    width: fit-content;
  }

  & p.from-them {
    border-radius: 5px 5px 5px 10px;
    align-items: flex-start;
    background-color: #e5e5ea;
    color: #000;
  }

  & p.from-them:before {
    border-bottom-right-radius: 0.8rem 0.7rem;
    border-left: 1rem solid #e5e5ea;
    left: -0.35rem;
    transform: translate(0, -0.1rem);
  }

  & p.from-them::after {
    background-color: #101318;
    border-bottom-right-radius: 0.5rem;
    left: 20px;
    transform: translate(-30px, -2px);
    width: 10px;
  }

  .no-tail::before {
    display: none;
  }
`;

export default StyledMessage;
