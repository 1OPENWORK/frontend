import React from "react";
import Styled from "./Cards.style";
import ImgParticipantes from "../../../../src/assets/imgs/participantes.svg";
import MenuPoints from "../../../../src/assets/imgs/menu-3-pontinhos.svg";
import IconLike from "../../../../src/assets/icons/icon-like.svg";
import IconClapHands from "../../../../src/assets/icons/icon-slap.svg";
import IconHeart from "../../../../src/assets/icons/icon-heart.svg";
import IconMessage from "../../../../src/assets/icons/icon-message.svg";
import IconShare from "../../../../src/assets/icons/icon-share.svg";
import IconLogo from "../../../../src/assets/imgs/logo.svg";
import Desenvolvedor from "../../../../src/assets/imgs/desenvolvedor.svg"

const Cards = () => {
  return (
    <>
      <Styled.Container>
        <Styled.ContainerCardSquad>
          <Styled.TitleCard>Minhas equipes</Styled.TitleCard>
          <Styled.ItemCard>
            <Styled.ImgGroupCard
              isImg={true}
              background={IconLogo}
            ></Styled.ImgGroupCard>
            <Styled.ContainerTextCard>
              <Styled.Text>Sistemas web</Styled.Text>
              <Styled.TextBold>Yucatan</Styled.TextBold>
              <Styled.Text>2 membros</Styled.Text>
            </Styled.ContainerTextCard>
          </Styled.ItemCard>

          <Styled.ItemCard>
            <Styled.ImgGroupCard
              isImg={true}
              background={IconLogo}
            ></Styled.ImgGroupCard>
            <Styled.ContainerTextCard>
              <Styled.Text>Sistemas web</Styled.Text>
              <Styled.TextBold>Yucatan</Styled.TextBold>
              <Styled.Text>2 membros</Styled.Text>
            </Styled.ContainerTextCard>
          </Styled.ItemCard>

          <Styled.ItemCard>
            <Styled.ImgGroupCard
              isImg={true}
              background={IconLogo}
            ></Styled.ImgGroupCard>
            <Styled.ContainerTextCard>
              <Styled.Text>Sistemas web</Styled.Text>
              <Styled.TextBold>Yucatan</Styled.TextBold>
              <Styled.Text>2 membros</Styled.Text>
            </Styled.ContainerTextCard>
          </Styled.ItemCard>
        </Styled.ContainerCardSquad>

        <Styled.ContainerCardMiddle>
          <Styled.HeaderPubli>
            <Styled.ImgUser
              isImg={true}
              background={ImgParticipantes}
            ></Styled.ImgUser>

            <Styled.TitleCardMiddle>Sistema Open Work</Styled.TitleCardMiddle>

            <Styled.ButtonMenu
              isImg={true}
              background={MenuPoints}
            ></Styled.ButtonMenu>
          </Styled.HeaderPubli>

          <Styled.SubtitleCardMiddle>
            Sistemas Web | 2 horas
          </Styled.SubtitleCardMiddle>

          <Styled.CaptionsCardMiddle>
            Criar plataforma freelancer do zero, backend, frontend, bd conectado
            na nuvem, e aplicação mobile. Criar plataforma freelancer do zero,
            backend, frontend, bd conectado na nuvem, e aplicação mobile.
          </Styled.CaptionsCardMiddle>

          <Styled.PublicationsCardMiddle isImg={true} background={Desenvolvedor}></Styled.PublicationsCardMiddle>

          <Styled.MetricsCardMiddle>
            4 Comentarios 2 Compartilhamentos
          </Styled.MetricsCardMiddle>

          <Styled.ContainerReactionsCardMiddle>
            <Styled.CircleReactionsCardMiddle>
              <Styled.IconReactionCardMiddle
                isImg={true}
                background={IconLike}
              ></Styled.IconReactionCardMiddle>
            </Styled.CircleReactionsCardMiddle>

            <Styled.CircleReactionsCardMiddle>
              <Styled.IconReactionCardMiddle
                isImg={true}
                background={IconClapHands}
              ></Styled.IconReactionCardMiddle>
            </Styled.CircleReactionsCardMiddle>

            <Styled.CircleReactionsCardMiddle>
              <Styled.IconReactionCardMiddle
                isImg={true}
                background={IconHeart}
              ></Styled.IconReactionCardMiddle>
            </Styled.CircleReactionsCardMiddle>

            <Styled.ContainerCommentCardMiddle>
              <Styled.IconReactionCardMiddle
                isImg={true}
                background={IconMessage}
              ></Styled.IconReactionCardMiddle>
              <Styled.TextCommentCardMiddle>
                Comentar
              </Styled.TextCommentCardMiddle>
            </Styled.ContainerCommentCardMiddle>

            <Styled.ContainerShareCardMiddle>
              <Styled.IconReactionCardMiddle
                isImg={true}
                background={IconShare}
              ></Styled.IconReactionCardMiddle>
              <Styled.TextCommentCardMiddle>
                Compartilhar
              </Styled.TextCommentCardMiddle>
            </Styled.ContainerShareCardMiddle>
          </Styled.ContainerReactionsCardMiddle>
        </Styled.ContainerCardMiddle>

        <Styled.ContainerSideCards>
          <Styled.PopularCard>
            <Styled.TitlePopularCard>Popular</Styled.TitlePopularCard>
            <Styled.ContentPopularCard>
              Sistema Open Work
            </Styled.ContentPopularCard>

            <Styled.ContentPopularCard>
              Sistema Open Work
            </Styled.ContentPopularCard>

            <Styled.ContentPopularCard>
              Sistema Open Work
            </Styled.ContentPopularCard>
          </Styled.PopularCard>

          <Styled.ContactCard>
            <Styled.TitleContactCard>Contato</Styled.TitleContactCard>
            <Styled.ContentContactCard>
              <Styled.ImgUser
                isImg={true}
                background={ImgParticipantes}
              ></Styled.ImgUser>
              <Styled.ContentTextContactCard>
                Yuri Martins
              </Styled.ContentTextContactCard>
            </Styled.ContentContactCard>

            <Styled.ContentContactCard>
              <Styled.ImgUser
                isImg={true}
                background={ImgParticipantes}
              ></Styled.ImgUser>
              <Styled.ContentTextContactCard>
                Andreas Rodrigues
              </Styled.ContentTextContactCard>
            </Styled.ContentContactCard>

            <Styled.ContentContactCard>
              <Styled.ImgUser
                isImg={true}
                background={ImgParticipantes}
              ></Styled.ImgUser>
              <Styled.ContentTextContactCard>
                Yucatan Mozart
              </Styled.ContentTextContactCard>
            </Styled.ContentContactCard>
          </Styled.ContactCard>
        </Styled.ContainerSideCards>
      </Styled.Container>
    </>
  );
};

export default Cards;
