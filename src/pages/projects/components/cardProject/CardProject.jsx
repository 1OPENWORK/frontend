import React, { useEffect, useRef, useState } from "react";
import moment from "moment";
import {
  DivCard,
  DivLeft,
  DivRight,
  DivFooterCard,
  TitleImg,
  UserImg,
  DivData,
  AlertData,
  BtnReset,
} from "./CardProject.styled";
import { Logo } from "../sideBar/SidebarProjecteds.styled";
import ProgressBar from "react-bootstrap/ProgressBar";
import { useNavigate } from "react-router-dom";

import { SlOptions } from "react-icons/sl";
import { GrConfigure } from "react-icons/gr";

import ButtonGroup from "react-bootstrap/ButtonGroup";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

import { usePopper } from "react-popper";
import Cookies from "js-cookie";
import Colors from "../../../../constants/Colors";

function CardProject({
  developers,
  canceled,
  title,
  describe,
  progress,
  finishDate,
  initDate,
  company,
  logoCompany,
}) {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [clicked, setClicked] = useState(false);
  const numDevelopers = developers.length;

  const [hovered, setHovered] = useState(false);

  const referenceElement = useRef(null);
  const popperElement = useRef(null);

  const clickNavigate = () => {
    setClicked(true);
    navigate("/gerenciador");
  };

  const { styles, attributes } = usePopper(referenceElement, popperElement, {
    placement: "bottom",
    modifiers: [
      {
        name: "offset",
        options: {
          offset: [0, 8],
        },
      },
    ],
  });

  return (
    <>
      <DivCard canceled={canceled}>
        <DivLeft>
          <div className="div-pro">
            <Logo height={"32px"} src={logoCompany} />
            <h2>{company}</h2>
          </div>
          <h2>{title}</h2>
          <p>{describe}</p>
        </DivLeft>

        <DivRight>
          <div className="div-row">
            <div className="progress-bar">
              <h2>Progresso</h2>
              <ProgressBar
                max={"100"}
                now={progress}
                label={`${progress}%`}
                variant={"success"}
              />
            </div>

            <div className="div-user-config">
              <div
                className="div-developers"
                ref={referenceElement}
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
              >
                {hovered ? (
                  <div
                    ref={popperElement}
                    style={styles.popper}
                    {...attributes.popper}
                  >
                    <div
                      style={{
                        backgroundColor: "#fafafa",
                        display: "flex",
                        flexDirection: "column",
                        width: "200px",
                        borderTop: `3px solid ${Colors.PRIMARY_COLOR}`,
                        gap: ".5rem",
                        padding: "5px",
                        boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
                        borderRadius: "5px",
                        transition: "all 1s ease-in-out",
                      }}
                    >
                      {developers.slice(0).map((developer) => (
                        <>
                          <div className="pop-align">
                            <UserImg
                              style={{ zIndex: "5", float: "left" }}
                              ref={popperElement}
                              width="24px"
                              height="24px"
                              key={developer.id}
                              imageSrc="https://api.dicebear.com/5.x/adventurer-neutral/svg?seed=Annie"
                            >
                              <TitleImg></TitleImg>
                            </UserImg>
                            <p style={{fontSize: "1.25rem"}}>{developer.nameUser}</p>
                          </div>
                        </>
                      ))}
                    </div>
                  </div>
                ) : (
                  <>
                    {developers.map((developer) => (
                      <div
                        key={developer.id}
                        className={`developer-card ${
                          numDevelopers > 2 ? "card-block" : ""
                        }`}
                      >
                        <UserImg imageSrc="https://api.dicebear.com/5.x/adventurer-neutral/svg?seed=Annie">
                          <TitleImg></TitleImg>
                        </UserImg>
                      </div>
                    ))}
                  </>
                )}

                <div
                  className={`dev-apos ${
                    numDevelopers > 2 && !hovered ? "display" : ""
                  }`}
                >
                  <SlOptions size={16} />
                </div>
              </div>

              {/* {open && (
                <DivConfig>
                  <Ul>
                    <Li>Editar</Li>
                    <Li>Finalizar</Li>
                    <Li>Deletar</Li>
                  </Ul>
                </DivConfig>
              )}

              <GrSettingsOption
                color={"#e5e5e5"}
                className="btn-config"
                size={18}
                onClick={() => setOpen(!open)}
              /> */}

              <div style={{ zIndex: 5 }}>
                <DropdownButton
                  id="dropdown-toggle"
                  as={ButtonGroup}
                  size="sm"
                  variant=""
                  style={{ backgroundColor: "transparent", outline: "none" }}
                  title={
                    <GrConfigure
                      size={24}
                      alt="Botão de configurações (mais)"
                    />
                  }
                >
                  <Dropdown.Item
                    as="button"
                    className="highlight-dropdown-item"
                    eventKey="1"
                    onClick={() => alert("Editando...")}
                  >
                    Editar
                  </Dropdown.Item>
                  <Dropdown.Item
                    as="button"
                    className="highlight-dropdown-item"
                    eventKey="2"
                    onClick={() => alert("Finalizando...")} //exemplo para fazer o modal quando clicar em cada uma das opções dropdown.item
                  >
                    Finalizar
                  </Dropdown.Item>
                  <Dropdown.Divider />
                  <Dropdown.Item
                    as="button"
                    className="highlight-dropdown-item"
                    eventKey="3"
                    onClick={() => alert("Deletando...")}
                  >
                    Deletar
                  </Dropdown.Item>
                </DropdownButton>
              </div>
            </div>
          </div>

          <DivFooterCard>
            <div className="div-row">
              <DivData>
                <h2>Data Início</h2>
                <h3>{moment(initDate).format("DD/MM/YYYY")}</h3>
              </DivData>
              <DivData>
                <h2>Fim estimado</h2>
                <h3>{moment(finishDate).format("DD/MM/YYYY")}</h3>
              </DivData>
            </div>
            <div className="div-row-re">
              <BtnReset
                className={clicked ? "btn-reset clicked" : "btn-reset"}
                onClick={() => clickNavigate()}
              >
                <h2>Abrir</h2>
              </BtnReset>

              <AlertData>
                <h2>Faltam 8 meses</h2>
              </AlertData>
            </div>
          </DivFooterCard>
        </DivRight>
      </DivCard>
    </>
  );
}

export default CardProject;
