import styled from "styled-components";
import Colors from "../../constants/Colors";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  overflow: hidden;
  font-family: nunito;
`;

export const ContainerComponents = styled.div`
  width: 50%;
  margin: 40px;

  @media screen and (max-width: 1900px) {
    width: 80%;
  }
`;

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row-reverse;
`;

export const Header = styled.div`
  height: 11.6%;
  display: flex;
  flex-direction: row;
`;

export const Img = styled.img`
  width: 80px;
  height: 100%;
  border-radius: 100%;
`;

export const NameGrade = styled.div`
  width: fit-content;
  height: 100%;
  display: flex;
  flex-direction: column;
  margin-left: 0.5rem;
`;

export const Name = styled.text`
  font-style: normal;
  font-weight: 900;
  font-size: 1.5rem;
  line-height: 44px;
  text-decoration-line: underline;
  color: ${Colors.AZUL_LINK};
`;

export const ContainerGrade = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
`;

export const Grade = styled.text`
  font-style: normal;
  font-weight: 700;
  font-size: 1rem;
  line-height: 148.4%;
  letter-spacing: 0.22em;
  color: ${Colors.BLACK};
`;

export const ContainerNameProject = styled.div`
  width: 100%;
  height: 56px;
  margin-top: 2.5rem;
  border-radius: 1rem;
  border: 1px solid ${Colors.PRIMARY_COLOR};
  background: rgba(32, 172, 105, 0.05);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ContentText = styled.text`
  font-style: normal;
  font-weight: 700;
  font-size: 1.5rem;
  line-height: 148.4%;
  letter-spacing: 0.22em;
`;

export const ContentTextSobre = styled.div`
  font-style: normal;
  font-weight: 700;
  font-size: 1rem;
  line-height: 148.4%;
  letter-spacing: 0.22em;
  margin-top: 30px;
`;

export const CardProject = styled.div`
  width: 100%;
  height: 61%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 2.5rem;
  margin-bottom: 2.5rem;
  border-radius: 2rem;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
  padding-top: 1rem;
`;

export const ContainerCard = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const Aside = styled.div`
  position: relative;
  width: fit-content;
  height: fit-content;
  margin-top: 2rem;
  margin-bottom: 2.5rem;
  margin-left: 2.5rem;
  display: flex;
  flex-direction: column;
`;

export const Article = styled.div`
  display: flex;
  width: 25%;
  margin: 2.5rem;
`;

export const NameProject = styled.text`
  text-align: center;
  font-style: normal;
  font-weight: 900;
  font-size: 2rem;
  line-height: 46px;
  text-decoration-line: underline;
  color: ${Colors.AZUL_LINK};
`;

export const HourDificulty = styled.div`
  width: fit-content;
  height: fit-content;
  display: flex;
  flex-direction: row;
  gap: 2.5rem;
`;

export const Content = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const Title = styled.text`
  font-style: normal;
  font-weight: 800;
  font-size: 1rem;
  line-height: 148.4%;
  letter-spacing: 0.22em;
  color: ${Colors.BLACK};
`;

export const SubTitle = styled.text`
  margin-top: 0.5rem;
  font-style: normal;
  font-weight: 400;
  font-size: 1rem;
  line-height: 148.4%;
  letter-spacing: 0.22em;
  color: ${Colors.BLACK};
`;

export const ContainerLanguages = styled.div`
  width: fit-content;
  height: fit-content;
  text-align: left;
  margin-top: 2.5rem;
`;

export const Languages = styled.div`
  height: 100%;
  display: flex;
  flex-direction: row;
  margin-top: 0.5rem;
  gap: 2.5rem;
`;

export const IconAndName = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ContainerProposal = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-radius: 0.5rem;
  background-color: ${Colors.PRIMARY_COLOR};
`;

export const ContainerImgEnviarProposta = styled.img`
  width: 134px;
  height: 145px;
  margin-top: 2rem;
  margin-left: 3.2rem;
`;
