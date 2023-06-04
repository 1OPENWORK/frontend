import { Avatar, AvatarGroup } from "@mui/material";
import { useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
import ImageCircule from "../../messages/components/ImageCircule/ImageCircule";
import Styled from "./ModalNewConversa.styled";
import { useSelector } from "react-redux";
import { selectedWebSocket } from "../../../../../store/reducers/WebSocketSlice";
import { handleImgGroup } from "../../../../../store/actions/MicroService";
import axios from "axios";
import { AmbienteBackend } from "../../../../../hooks/Ambiente";

const ModalNewConversa = ({ show, handleClick, handleConversation }) => {
  const { websocket } = useSelector(selectedWebSocket);
  // Informações

  // funcionalidades
  const [friends, setFriends] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    listFriends();
  }, [websocket]);

  const listFriends = () => {
    const friendsList = websocket.friends;

    let friendsImgs = [];
    friendsList.map(async (dados) => {
      const img = await fetchImage(dados.idRelacionado);

      friendsImgs.push({ ...dados, img: img });
    });

    setFriends(friendsImgs);
  };

  const fetchImage = async (id) => {
   return axios
      .get(AmbienteBackend() + "/api/usuarios/imagem/" + id)
      .then((response) => {
        return response.data.image;
      })
      .catch((error) => {
        console.log("🚀 ~ file: Messages.js:42 ~ ).then ~ error:", error);
      });
  };

  useEffect(() => {
    setSearch("");
  }, [show]);

  return (
    <Styled.Modal
      show={show}
      fullscreen={false}
      size="lg"
      onHide={() => {
        handleClick(false);
      }}
    >
      <Modal.Body
        style={{
          margin: 0,
          padding: 0,
        }}
      >
        <Styled.Container>
          <Styled.DivBetween>
            <ion-icon
              onClick={() => {
                handleClick(false);
              }}
              name="close-outline"
              style={{ cursor: "pointer" }}
            ></ion-icon>
          </Styled.DivBetween>
          <Styled.Body>
            <Styled.InputSearch
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Pesquisar"
            />
            <Styled.HR />
            <Styled.ContainerConexao>
              {friends
                .filter((d) =>
                  d.nome.toLowerCase().includes(search.toLowerCase())
                )
                .map((dados, index) => (
                  <Styled.BodyConexao key={index}>
                    <Styled.Divisor>
                      <Avatar src={dados.img} />
                      {dados.nome}
                    </Styled.Divisor>
                    <Styled.Divisor>
                      <Styled.Button
                        onClick={() => {
                          handleClick(false);
                          handleConversation(dados);
                        }}
                      >
                        Conversar
                      </Styled.Button>
                    </Styled.Divisor>
                  </Styled.BodyConexao>
                ))}
            </Styled.ContainerConexao>
          </Styled.Body>
        </Styled.Container>
      </Modal.Body>
    </Styled.Modal>
  );
};

export default ModalNewConversa;
