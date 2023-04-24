import { Avatar, AvatarGroup } from "@mui/material";
import { useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
import ImageCircule from "../../messages/components/ImageCircule/ImageCircule";
import Styled from "./ModalNewConversa.styled";
import { useSelector } from "react-redux";
import { selectedWebSocket } from "../../../../../store/reducers/WebSocketSlice";
import { handleImgGroup } from "../../../../../store/actions/MicroService";

const ModalNewConversa = ({ show, handleClick, handleConversation }) => {
  const { websocket } = useSelector(selectedWebSocket);
  // Informações

  // funcionalidades
  const [friends, setFriends] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    setFriends(websocket.friends);
  }, [websocket]);


  useEffect(() => {
    setSearch("")
  }, [show])

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
