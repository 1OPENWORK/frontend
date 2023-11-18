import styled from "styled-components";

export const Container = styled.div`
  width: 220px;
  min-height: 200px;
  background-color: #ffffff;
  padding: 12px 12px;
  border-radius: 18px;
  border: 1px solid ${(props) => (props.color ? props.color : "none")};
  box-shadow: rgba(0, 0, 0, 0.07) 0px 1px 1px, rgba(0, 0, 0, 0.07) 0px 2px 2px,
    rgba(0, 0, 0, 0.07) 0px 4px 4px, rgba(0, 0, 0, 0.07) 0px 8px 8px,
    rgba(0, 0, 0, 0.07) 0px 16px 16px;

  cursor: pointer;
`;

export const Header = styled.div`
  min-height: 1em;
  /* border: 1px solid red; */
  display: flex;
  justify-content: end;
  color: #20ac69;
`;

export const GroupUser = styled.div`
  min-height: 3.75em;
  display: flex;
  justify-content: center;
  color: ${(props) => props.color};
  /* border: 1px solid red; */
`;

export const Desc = styled.div`
  min-height: 3.75em;
  display: flex;
  justify-content: center;
  flex-direction: column;
  /* border: 1px solid red; */

  text-align: center;

  h3 {
    font-size: 1.5rem;
    font-weight: 500;
    letter-spacing: 0.1rem;
    margin: 0;
  }

  p {
    font-size: .9rem;
    font-weight: medium;
    letter-spacing: 0.2rem;
  }
`;
