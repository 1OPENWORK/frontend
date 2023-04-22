import React from "react";
import Styled from "./Cards.style";
import ImgParticipantes from "../../../../src/assets/imgs/participantes.svg";
import MenuPoints from "../../../../src/assets/imgs/menu-3-pontinhos.svg";

const Cards = () => {
  return (
    <>
      <Styled.Container>
        <Styled.ContainerCard>
          <Styled.TitleCard>Minhas equipes</Styled.TitleCard>
          <Styled.ItemCard>
            <Styled.Text>Sistemas</Styled.Text>
            <Styled.Text>Nome</Styled.Text>
            <Styled.Text>Membros</Styled.Text>
          </Styled.ItemCard>

          <Styled.ItemCard>
            <Styled.Text>Sistemas</Styled.Text>
            <Styled.Text>Nome</Styled.Text>
            <Styled.Text>Membros</Styled.Text>
          </Styled.ItemCard>

          <Styled.ItemCard>
            <Styled.Text>Sistemas</Styled.Text>
            <Styled.Text>Nome</Styled.Text>
            <Styled.Text>Membros</Styled.Text>
          </Styled.ItemCard>
        </Styled.ContainerCard>

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

          <Styled.PublicationsCardMiddle></Styled.PublicationsCardMiddle>

          <Styled.MetricsCardMiddle>
            4 Comentarios 2 Compartilhamentos
          </Styled.MetricsCardMiddle>
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
          </Styled.ContactCard>
        </Styled.ContainerSideCards>
      </Styled.Container>
    </>
  );
};

export default Cards;
