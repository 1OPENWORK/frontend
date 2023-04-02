import { Avatar, AvatarGroup } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import { Modal } from "react-bootstrap";
import ImageCircule from "../../messages/components/ImageCircule/ImageCircule";
import Styled from "./ModalGroup.styled";
import Overlay from "react-bootstrap/Overlay";
import Popover from "react-bootstrap/Popover";
import styled from "styled-components";
import CardConexao from "./components/CardConexao/CardConexao";
import { useSelector } from "react-redux";
import { selectedWebSocket } from "../../../../../store/reducers/WebSocketSlice";

const ModalGroup = ({ show, handleClick }) => {
  const { websocket } = useSelector(selectedWebSocket);
  const [img, setImg] = useState("");
  const [nomeGroup, setNomeGroup] = useState("");
  const [search, setSearch] = useState("");
  const [friends, setFriends] = useState([]);
  const [participantes, setParticipantes] = useState([]);
  const [showOverlay, setShowOverlay] = useState(false);
  const [target, setTarget] = useState(null);

  const ref = useRef(null);

  const handleClickOverlay = (event) => {
    setShowOverlay(!showOverlay);
    setTarget(event.target);
  };

  function handleAdicionar(newParticipant) {
    setSearch("")
    setParticipantes((prevParticipant) => [...prevParticipant, newParticipant]);
  }

  function handleRemove(participantId) {
    if (participantes.length === 1) {
      setShowOverlay(false);
    }
    setParticipantes((prevItems) =>
      prevItems.filter((item) => item.id !== participantId)
    );
  }

  const StyledOverlay = styled(Overlay)`
    background-color: #07ea8b;
  `;

  const StyledPopover = styled(Popover)`
    background-color: #07ea8b;
    color: black;
  `;

  useEffect(() => {
    setFriends(websocket.friends);
  }, [websocket]);

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
                setShowOverlay(false);
              }}
              name="close-outline"
              style={{ cursor: "pointer" }}
            ></ion-icon>
          </Styled.DivBetween>
          <Styled.Body>
            <Styled.Divisor>
              <ImageCircule />
              <Styled.DivisorInput>
                <Styled.Label>Digite um nome</Styled.Label>
                <Styled.Input
                  width={"600px"}
                  placeholder="Squad, Amigos, Work"
                />
              </Styled.DivisorInput>
              <Styled.DivisorInput>
                <Styled.Label>Descrição</Styled.Label>
                <Styled.TextArea
                  width={"600px"}
                  rows={5}
                  placeholder="Esse grupo tem algumas regras...."
                />
              </Styled.DivisorInput>
              <Styled.DivisorButton>
                <Styled.Button backgroundColor={"#07ea8b"}>
                  <ion-icon name="people-outline"></ion-icon> Criar grupo
                </Styled.Button>
                <Styled.Button
                  onClick={() => {
                    handleClick(false);
                    setShowOverlay(false);
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
                          total={parseInt(participantes.length + 1)}
                          style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                        >
                          <div ref={ref}>
                            {participantes.length > 0 && (
                              <>
                                {!showOverlay ? (
                                  <ion-icon
                                    onClick={handleClickOverlay}
                                    name="chevron-forward-outline"
                                    style={{
                                      marginRight: 10,
                                      marginLeft: 10,
                                      fontSize: 24,
                                      cursor: "pointer",
                                    }}
                                  ></ion-icon>
                                ) : (
                                  <ion-icon
                                    onClick={handleClickOverlay}
                                    name="chevron-down-outline"
                                    style={{
                                      marginRight: 10,
                                      marginLeft: 10,
                                      fontSize: 24,
                                      cursor: "pointer",
                                    }}
                                  ></ion-icon>
                                )}
                              </>
                            )}

                            <StyledOverlay
                              show={showOverlay}
                              target={target}
                              placement="bottom"
                              container={ref}
                              containerPadding={20}
                            >
                              <StyledPopover id="popover-contained">
                                <StyledPopover.Header as="h3">
                                  Participantes
                                </StyledPopover.Header>
                                <StyledPopover.Body
                                  style={{
                                    overflow: "scroll",
                                    overflowX: "auto",
                                    height: 400,
                                  }}
                                >
                                  {participantes.map((d, index) => (
                                    <CardConexao
                                      type={2}
                                      dados={d}
                                      key={index}
                                      handleRemove={handleRemove}
                                      participants={participantes}
                                    />
                                  ))}
                                </StyledPopover.Body>
                              </StyledPopover>
                            </StyledOverlay>
                          </div>
                          {participantes.map((d, index) => (
                            <Avatar key={index} alt={d.nome} src={d.img} />
                          ))}
                        </AvatarGroup>
                      </div>
                      <Styled.DivSearch>
                        <Styled.InputSearch
                          value={search}
                          onChange={(e) => setSearch(e.target.value)}
                          placeholder="Digite o nome da conexão"
                        />
                      </Styled.DivSearch>
                    </Styled.HeaderConexoes>
                    <Styled.BodyConexao>
                      {friends
                        .filter((d) =>
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
