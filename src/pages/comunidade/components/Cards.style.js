import styled from "styled-components";
import Colors from "../../../constants/Colors";

const StyledCard = {
  Container: styled.div`
    width: 100%;
    height: 69vh;
    display: flex;
    flex-direction: row;
    font-family: nunito;
  `,

  ContainerCardSquad: styled.div`
    width: 316px;
    height: 483px;
    margin: 7.625rem 0 3rem 3rem;
    background: ${Colors.WHITE};
    border-radius: 30px;
    padding-top: 1.5rem;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    display: flex;
    flex-direction: column;
  `,

  TitleCard: styled.div`
    width: 52.8%;
    height: 5%;
    margin-left: 4.75rem;
    font-style: normal;
    font-weight: 800;
    font-size: 1rem;
    line-height: 148.4%;
    letter-spacing: 0.22em;
  `,

  ItemCard: styled.div`
    width: 84.8%;
    height: 26.1%;
    margin: 1.5rem;
    display: flex;
    flex-direction: column;
  `,

  Text: styled.div`
    font-style: normal;
    font-weight: 200;
    font-size: 1rem;
    line-height: 148.4%;
    padding-top: 0.5rem;
    display: flex;
    align-itens: flex-end;
  `,

  ImgGroupCard: styled.div`
    width: 104px;
    height: 94px;
    background-color: ${(props) => (props.isImg ? "" : props.background)};
    background-image: url(${(props) => (props.isImg ? props.background : "")});
    display: flex;
    align-items: flex-start;
  `,

  ContainerCardMiddle: styled.div`
    width: 660px;
    height: 483px;
    border-radius: 30px;
    margin-left: 3rem;
    background: ${Colors.WHITE};
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    margin-top: 7.625rem;
  `,

  HeaderPubli: styled.div`
    width: 90.3%;
    height: 9.94%;
    margin: 2rem 2rem 0 2rem;
    display: flex;
  `,

  ImgUser: styled.div`
    width: 48px;
    height: 48px;
    background-color: ${(props) => (props.isImg ? "" : props.background)};
    background-image: url(${(props) => (props.isImg ? props.background : "")});
  `,

  TitleCardMiddle: styled.div`
    width: auto;
    height: 7.87%;
    margin-left: 1.5rem;
    font-style: normal;
    font-weight: 700;
    font-size: 1.75rem;
    line-height: 38px;
    text-align: center;
  `,

  ButtonMenu: styled.div`
    width: 33px;
    height: 6px;
    background-color: ${(props) => (props.isImg ? "" : props.background)};
    background-image: url(${(props) => (props.isImg ? props.background : "")});
    margin-left: 14.313rem;

    :hover {
      cursor: pointer;
    }
  `,

  SubtitleCardMiddle: styled.div`
    height: auto;
    margin-left: 6.5rem;
  `,

  CaptionsCardMiddle: styled.div`
    width: 90.3%;
    height: 14.9%;
    margin: 1rem 2rem 0 2rem;
    font-style: normal;
    font-weight: 400;
    font-size: 1rem;
    line-height: 148.4%;
  `,

  PublicationsCardMiddle: styled.div`
    width: 596px;
    height: 198px;
    margin-top: 1rem;
    margin-left: 2rem;
    background-color: ${Colors.BLACK};
    border-radius: 24px;
  `,

  MetricsCardMiddle: styled.div`
    width: auto;
    height: auto;
    margin-left: 27.688rem;
    font-style: normal;
    font-weight: 200;
    font-size: 8px;
    line-height: 148.4%;
    letter-spacing: 0.22em;
  `,

  ContainerReactionsCardMiddle: styled.div`
    width: 417px;
    height: 32px;
    margin-left: 2rem;
    margin-top: 0.5rem;
    display: flex;
    justify-content: space-between;
  `,

  CircleReactionsCardMiddle: styled.div`
    width: 32px;
    height: 100%;
    background-color: ${Colors.GRAY};
    border-radius: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    :hover {
      cursor: pointer;
    }
  `,

  IconReactionCardMiddle: styled.div`
    width: 16px;
    height: 16px;
    background-color: ${(props) => (props.isImg ? "" : props.background)};
    background-image: url(${(props) => (props.isImg ? props.background : "")});
  `,

  ContainerCommentCardMiddle: styled.div`
    width: 126px;
    height: 100%;
    border-radius: 30px;
    display: flex;
    align-items: center;
    padding-left: 0.5rem;
    background-color: ${Colors.GRAY};
  `,

  TextCommentCardMiddle: styled.div`
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 148.4%;
    letter-spacing: 0.22em;
    padding-left: 0.5rem;
    color: ${Colors.AZUL_LINK};
  `,

  ContainerShareCardMiddle: styled.div`
    width: 163px;
    height: 100%;
    border-radius: 30px;
    display: flex;
    align-items: center;
    padding-left: 0.5rem;
    background-color: ${Colors.GRAY};
  `,

  ContainerSideCards: styled.div`
    width: 337px;
    height: 483px;
    margin-top: 7.625rem;
    margin-left: 3rem;
  `,

  PopularCard: styled.div`
    width: 100%;
    height: 193px;
    border-radius: 30px;
    background: ${Colors.WHITE};
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  `,

  TitlePopularCard: styled.div`
    margin-left: 2rem;
    font-style: normal;
    font-weight: 800;
    font-size: 1rem;
    line-height: 148.4%;
    letter-spacing: 0.22em;
    padding-top: 1rem;
  `,

  ContentPopularCard: styled.div`
    color: ${Colors.AZUL_LINK};
    font-style: normal;
    font-weight: 700;
    font-size: 1.125rem;
    line-height: 1.563rem;
    padding-top: 1rem;
    padding-left: 2rem;
  `,

  ContactCard: styled.div`
    width: 100%;
    height: 266px;
    border-radius: 30px;
    margin-top: 1.5rem;
    background: ${Colors.WHITE};
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    display: flex;
    flex-direction: column;
  `,

  TitleContactCard: styled.div`
    margin-left: 2rem;
    font-style: normal;
    font-weight: 800;
    font-size: 1rem;
    line-height: 148.4%;
    letter-spacing: 0.22em;
    padding-top: 1rem;
  `,

  ContentContactCard: styled.div`
    width: auto;
    height: 48px;
    margin-top: 1rem;
    padding: 1rem;
    margin-left: 1rem;
    display: flex;
    flex-direction: row;
    text-align: center;
    align-items: center;
  `,

  ContentTextContactCard: styled.div`
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 25px;
    text-decoration-line: none;
    margin-left: 1rem;
    color: ${Colors.AZUL_LINK};
  `,
};

export default StyledCard;
