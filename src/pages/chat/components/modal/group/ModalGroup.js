import { Avatar, AvatarGroup } from "@mui/material";
import { useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
import ImageCircule from "../../messages/components/ImageCircule/ImageCircule";
import Styled from "./ModalGroup.styled";
import CardConexao from "./components/CardConexao/CardConexao";
import { useSelector } from "react-redux";
import { selectedWebSocket } from "../../../../../store/reducers/WebSocketSlice";
import { handleImgGroup } from "../../../../../store/actions/MicroService";

const ModalGroup = ({ socket, show, handleClick }) => {
  const { websocket } = useSelector(selectedWebSocket);
  // Informações
  const [img, setImg] = useState("");
  const [nomeGroup, setNomeGroup] = useState("");
  const [describe, setDescribe] = useState("");
  const [participantes, setParticipantes] = useState([]);

  // funcionalidades
  const [friends, setFriends] = useState([]);
  const [search, setSearch] = useState("");
  const [showOverlay, setShowOverlay] = useState(false);

  const handleClickOverlay = event => {
    setShowOverlay(!showOverlay);
    setNomeGroup("");
    setDescribe("");
    setSearch("");
    setParticipantes([]);
  };

  const handleAdicionar = newParticipant => {
    setSearch("");
    setParticipantes(prevParticipant => [...prevParticipant, newParticipant]);
  };

  const handleRemove = participantId => {
    setParticipantes(prevItems =>
      prevItems.filter(item => item.id !== participantId)
    );
  };

  const handleGroup = async () => {
    const bodyFormData = new FormData();

    bodyFormData.append("img", img);

    const { imageFile } = await handleImgGroup(bodyFormData);

    const dados = {
      nome: nomeGroup,
      describe: describe,
      img: imageFile,
      participantes: [...participantes],
      myId: websocket.idUser,
    };

    socket.emit("newGroup", { dados }, callback => {
      console.log(
        "🚀 ~ file: ModalGroup.js:64 ~ socket.emit ~ callback:",
        callback
      );
    });
  };

  useEffect(() => {
    setFriends(websocket.friends);
  }, [websocket]);

  useEffect(() => {
    console.log(participantes);
  }, [participantes]);

  return (
    <Styled.Modal
      show={show}
      fullscreen={true}
      onHide={() => {
        handleClick(false);
        setShowOverlay(false);
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
                handleClickOverlay(false);
              }}
              name="close-outline"
              style={{ cursor: "pointer" }}
            ></ion-icon>
          </Styled.DivBetween>
          <Styled.Body>
            <Styled.Divisor>
              <ImageCircule setImg={setImg} />
              <Styled.DivisorInput>
                <Styled.Label>Digite um nome</Styled.Label>
                <Styled.Input
                  value={nomeGroup}
                  onChange={e => setNomeGroup(e.target.value)}
                  width={"600px"}
                  placeholder="Squad, Amigos, Work"
                />
              </Styled.DivisorInput>
              <Styled.DivisorInput>
                <Styled.Label>Descrição</Styled.Label>
                <Styled.TextArea
                  value={describe}
                  onChange={e => setDescribe(e.target.value)}
                  width={"600px"}
                  rows={5}
                  placeholder="Esse grupo tem algumas regras...."
                />
              </Styled.DivisorInput>
              <Styled.DivisorButton>
                <Styled.Button
                  onClick={handleGroup}
                  backgroundColor={"#07ea8b"}
                >
                  <ion-icon name="people-outline"></ion-icon> Criar grupo
                </Styled.Button>
                <Styled.Button
                  onClick={() => {
                    handleClick(false);
                    handleClickOverlay(false);
                  }}
                >
                  <ion-icon name="close-outline"></ion-icon> Cancelar
                </Styled.Button>
              </Styled.DivisorButton>
            </Styled.Divisor>
            <Styled.Divisor>
              <Styled.DivContainerPersons>
                <Styled.DivPersonsBetween height={"100%"}>
                  <Styled.DivPersons backgroundColor={"#101318"}>
                    <Styled.HeaderConexoes>
                      <div>
                        <Styled.DivPersonsTitle>
                          {participantes.length > 0 ? "Participantes" : ""}
                        </Styled.DivPersonsTitle>
                        <AvatarGroup
                          max={6}
                          total={parseInt(participantes.length)}
                          style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                        >
                          {participantes.map((d, index) => (
                            <Avatar key={index} alt={d.nome} src={d.img} />
                          ))}
                        </AvatarGroup>
                      </div>
                      <Styled.DivSearch>
                        <Styled.InputSearch
                          value={search}
                          onChange={e => setSearch(e.target.value)}
                          placeholder="Digite o nome da conexão"
                        />
                      </Styled.DivSearch>
                    </Styled.HeaderConexoes>
                    <Styled.BodyConexao>
                      {friends
                        .filter(d =>
                          d.nome.toLowerCase().includes(search.toLowerCase())
                        )
                        .map((d, index) => (
                          <CardConexao
                            dados={d}
                            key={index}
                            handleAdd={handleAdicionar}
                            handleRemove={handleRemove}
                            participants={participantes}
                          />
                        ))}
                    </Styled.BodyConexao>
                  </Styled.DivPersons>
                </Styled.DivPersonsBetween>
              </Styled.DivContainerPersons>
            </Styled.Divisor>
          </Styled.Body>
        </Styled.Container>
      </Modal.Body>
    </Styled.Modal>
  );
};

export default ModalGroup;
