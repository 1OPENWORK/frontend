import React, { useState, useEffect, useMemo } from "react";
import { Container, Aside, Article, TextArea } from "./CreateProject.styled";
import { FilledButton } from "../../../../components/UI/buttons/Button";
import Colors from "../../../../constants/Colors";
import { useNavigate } from "react-router-dom";
import { ProgressPath } from "../../../../constants/Path";
import CardProject from "./components/cardOpt/CardProject";
import { InputText, CardHunter } from "./CreateProject.styled";
import {
  DivInput,
  H3Input,
  Input,
} from "../../../auth/register/etapas/et6/RegisterEt6.styled";

import CardOverviewOne from "./components/cardOverviewOne/CardOverviewOne";
import { MdEmail, MdPhoneInTalk } from "react-icons/md";
import { AiOutlineUser } from "react-icons/ai";
import { AiFillCloseCircle } from "react-icons/ai";
import { Wallet } from "@mercadopago/sdk-react";
import { handleProeficiency } from "../../../../store/actions/Proeficiency";

import axios from "axios";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { getCompanyId, getToken } from "../../../../hooks/Cookies";
import ModalStatus from "../../../../components/UI/modal/modal-status/ModalStatus";
import { Ambiente, AmbienteBackend } from "../../../../hooks/Ambiente";
import { initMercadoPago } from "@mercadopago/sdk-react";
import { ToastSuccess } from "../../../../helpers/Toast";
import styled from "styled-components";

function CreateProject() {
  const navigate = useNavigate();
  const [selectedOption, setSelectedOption] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [typeError, setTypeError] = useState();
  const [modalError, setModalError] = useState(true);
  const [isReady, setIsReady] = React.useState(true);

  // Integração.
  const [preferenceId, setPreferenceId] = useState(null);
  initMercadoPago("TEST-e1ceca9c-b4bd-44ce-85e1-d6b4dac2d997");

  const [selectedOptions, setSelectedOptions] = useState([]);

  const [search, setSearch] = useState("");
  const [proef, setProef] = useState([]);
  const [tools, setTools] = useState([]);

  const idCompany = getCompanyId();

  const handleOnReady = () => {
    setIsReady(true);
  };

  const fetchChange =
    selectedOption === 1
      ? AmbienteBackend() + `/api/projetos-grandes`
      : AmbienteBackend() + `/api/projetos-pequenos`;

  useEffect(() => {
    listar();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isModalOpen]);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleCloseError = () => {
    setModalError(false);
  };

  const notifySucess = () => {
    ToastSuccess("Projeto cadastrado com sucesso");
  };

  const notifyInfo = () => {
    toast.info("Ferramenta já adicionada", {
      position: "top-left",
      autoClose: 2500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  const listar = async () => {
    const dados = await handleProeficiency();
    setProef(dados.data);
    console.log(dados.data);

    const allTools = proef.flatMap(({ tools }) => Object.values(tools));
    setTools(allTools);
  };

  //info empresa - GET

  const [infoUser, setInfoUser] = useState({
    name: "",
    sector: "",
    email: "",
    user: {
      name: "",
      cellphone: "",
    },
  });

  async function fetchUser() {
    await axios
      .get(AmbienteBackend() + `/api/empresas/${idCompany}`)
      .then((response) => {
        setInfoUser(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log("Deu erro: " + error);
      });
  }

  useEffect(() => {
    fetchUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  //cadastro projetos - POST

  const token = getToken();

  async function cadastrar() {
    const registerProject = {
      title: debouncedInputValues.nameProject,
      description: debouncedInputValues.describe,
      value: parseInt(debouncedInputValues.value),
      idCompany: parseInt(idCompany),
      qtdSprint: parseInt(debouncedInputValues.estimatedTime),
      daysToSprint: parseInt(debouncedInputValues.estimatedTime),
      maxDevelopers: parseInt(debouncedInputValues.qntdPeople),
      tools: {
        projectTool: selectedOptions,
      },
    };

    if (
      debouncedInputValues.nameProject === null ||
      debouncedInputValues.nameProject.length <= 0
    ) {
      console.log("Nome do projeto não pode estar vazio");
      setTypeError(1);
      setModalError(true);

      return;
    } else if (debouncedInputValues.describe.length <= 60) {
      setTypeError(2);
      setModalError(true);
      console.log("A descrição deve ter um tamanho maior que sessenta");
      return;
    } else if (debouncedInputValues.qntdPeople <= 0) {
      setTypeError(3);
      setModalError(true);
      console.log("Número de pessoas deve ser maior que 0");
      return;
    } else if (debouncedInputValues.qntdPeople > 6) {
      setTypeError(4);
      setModalError(true);
      console.log("Número de pessoas excedido deve ser menor ou igual que 6");
      return;
    } else if (debouncedInputValues.estimatedTime <= 0) {
      setTypeError(5);
      setModalError(true);
      console.log("Quantidade de meses deve ser maior que 0");
      return;
    } else if (debouncedInputValues.estimatedTime > 12) {
      setTypeError(6);
      setModalError(true);
      console.log("Quantidade de meses excedido, deve ser menor ou igual á 12");
      return;
    } else if (!/^\d+(\.\d{1,2})?$/.test(debouncedInputValues.value)) {
      setTypeError(7);
      setModalError(true);
      console.log("O valor não pode conter letras");
      return;
    } else if (debouncedInputValues.value <= 100.0) {
      setTypeError(8);
      setModalError(true);
      console.log("O valor deve ser maior que R$100,00");
      return;
    }

    const dados = {
      quantity: "1",
      price: registerProject.value,
      amount: 1,
      description: registerProject.title,
    };

    await axios
      .post(Ambiente() + "/create_preference", dados)
      .then((response) => {
        setPreferenceId(response.data.id);
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {
        // setIsLoading(false);
      });

    axios
      .post(fetchChange, registerProject, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        console.log(res);
        // notifySucess();
        // const myTimeout = () => setTimeout(() => navigate("/jobs"), 1000);
        // myTimeout();
      })
      .catch((err) => {
        console.log("Deu erro: " + err);
        console.log(registerProject);
      });
  }

  const renderCheckoutButton = (preferenceId) => {
    if (!preferenceId) return null;

    return (
      <Wallet
        locale="pt-BR"
        initialization={{ preferenceId: preferenceId, redirectMode: "modal" }}
        onReady={handleOnReady}
        customization={{
          visual: {
            valuePropColor: "grey",
          },
          texts: {
            valueProp: "security_safety",
            action: "pay",
          },
        }}
      />
    );
  };

  //filtro de ferramentas

  const filterSearch = useMemo(() => {
    const searchLowerCase = search.toLowerCase();

    return tools.filter((tool) =>
      tool.name.toLowerCase().includes(searchLowerCase)
    );
  }, [tools, search]);

  //seleção de ferramentas

  const handleSelectOption = (option) => {
    if (selectedOptions.includes(option)) {
      notifyInfo();
    } else if (!selectedOptions.includes(option)) {
      setSelectedOptions((prevOptions) => [...prevOptions, option]);
      console.log(selectedOptions);
    }
  };

  const handleDeselectOption = (option) => {
    setSelectedOptions((prevOptions) =>
      prevOptions.filter((selectedOption) => selectedOption !== option)
    );
  };

  //captura de informações(input) com debounced

  const [inputValues, setInputValues] = useState({
    nameProject: "",
    nameCompany: "",
    languages: [{ id: "" }],
    describe: "",
    qntdPeople: 0,
    estimatedTime: 0,
    value: 0.0,
  });

  const [debouncedInputValues, setDebouncedInputValues] = useState({
    nameProject: "",
    nameCompany: "",
    languages: [{ id: "" }],
    describe: "",
    qntdPeople: 0,
    estimatedTime: 0,
    value: 0.0,
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    let updatedValue = value;

    // Remover o prefixo e separador de milhares antes de atualizar o valor
    if (name === "value") {
      updatedValue = value.replace("R$", "").replace(/\./g, "").trim();
    }

    setInputValues((prevInputValues) => ({
      ...prevInputValues,
      [name]: updatedValue,
    }));
  };

  useEffect(() => {
    const timeoutIds = {};

    for (const inputName in inputValues) {
      clearTimeout(timeoutIds[inputName]);

      timeoutIds[inputName] = setTimeout(() => {
        setDebouncedInputValues((prevDebouncedInputValues) => ({
          ...prevDebouncedInputValues,
          [inputName]: inputValues[inputName],
        }));
      }, 500);
    }

    return () => {
      for (const inputName in inputValues) {
        clearTimeout(timeoutIds[inputName]);
      }
    };
  }, [inputValues]);

  function formatNumber(value, prefix, thousandSeparator, decimalSeparator) {
    const parts = value.toString().split(decimalSeparator);
    const formattedValue = parts[0].replace(
      /\B(?=(\d{3})+(?!\d))/g,
      thousandSeparator
    );

    if (parts.length === 2) {
      return `${prefix}${formattedValue}${decimalSeparator}${parts[1]}`;
    } else {
      return `${prefix}${formattedValue}`;
    }
  }

  const handleOptionSelect = (type) => {
    setSelectedOption(type === selectedOption ? null : type);
  };

  const voltar = () => {
    navigate(ProgressPath);
  };

  return (
    <>
      <Container>
        <Aside>
          <div className="container-align">
            <FilledButton
              onClick={voltar}
              marginRight={"0px"}
              marginLeft={"0px"}
              color={Colors.BLACK}
              width={110}
              heigth={60}
            >
              {"Voltar"}
            </FilledButton>

            <div className="content-desc">
              <h2>Como será seu projeto?</h2>
              <br />
              <p>Crie seu projeto da melhor forma,</p>
              <p>rapido e pratico para você</p>
            </div>
            <br />
            <br />
            <br />

            <div className="content-opt">
              <CardProject
                type={1}
                selected={selectedOption === 1}
                onSelect={() => handleOptionSelect(1)}
              />

              <CardProject
                type={2}
                selected={selectedOption === 2}
                onSelect={() => handleOptionSelect(2)}
              />
            </div>

            <div className="content-desc">
              <label style={{ fontSize: 14 }}>{"Nome do Projeto"}</label>
              <br />
              <InputText
                onBlur={() => closeModal()}
                type="text"
                name="nameProject"
                value={inputValues.nameProject}
                onChange={handleInputChange}
              />
              <br />

              <br />
              <label style={{ fontSize: 14 }}>{"Linguagens e Softwares"}</label>
              <br />
              <div className="lang-program">
                <InputText
                  type="text"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  onFocus={openModal}
                  placeholder={"selecionar campo para escolher"}
                />

                <div className={`modal ${isModalOpen ? "display" : ""}`}>
                  {/* <AiFillCloseCircle
                    onClick={() => closeModal()}
                    size={24}
                    style={{
                      position: "fixed",
                      top: 8,
                      right: 4,
                      cursor: "pointer",
                    }}
                  /> */}
                  <ul>
                    {filterSearch.map((tool) => (
                      <li
                        onClick={() => handleSelectOption(tool)}
                        key={tool.id}
                      >
                        {tool.name}
                      </li>
                    ))}
                  </ul>
                  <div
                    className={`modal-close ${isModalOpen ? "display" : ""}`}
                  >
                    <AiFillCloseCircle
                      onClick={() => closeModal()}
                      size={24}
                      style={{
                        cursor: "pointer",
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="content-desc">
              <label style={{ fontSize: 14 }}>{"Descrição"}</label>
              <br />

              <TextArea
                onBlur={() => closeModal()}
                type="text"
                name="describe"
                value={inputValues.describe}
                onChange={handleInputChange}
              />
              <br />

              <div className="lang-program">
                {selectedOption === 1 ? (
                  <>
                    <div className="qnt-check">
                      <label style={{ fontSize: 14 }}>
                        {"Quatidade de Pessoas"}{" "}
                      </label>
                      <br />
                      <br />
                      <DivInput style={{ width: "100%", height: "58px" }}>
                        <Input
                          style={{ boxSizing: "border-box" }}
                          w={"58px"}
                          type="number"
                          min="0"
                          max="6"
                          placeholder="0"
                          maxLength="99"
                          name="qntdPeople"
                          value={inputValues.qntdPeople}
                          onChange={handleInputChange}
                          onBlur={() => closeModal()}
                        />
                        <H3Input>{"Pessoas"}</H3Input>
                      </DivInput>
                    </div>

                    <div className="qnt-check">
                      <label style={{ fontSize: 14 }}>
                        {"Meses Estimados"}{" "}
                      </label>
                      <br />
                      <br />
                      <DivInput style={{ width: "100%", height: "58px" }}>
                        <Input
                          style={{
                            "word-break": "break-all",
                            boxSizing: "border-box",
                          }}
                          w={"58px"}
                          type="number"
                          min="0"
                          max="12"
                          placeholder="0"
                          name="estimatedTime"
                          value={inputValues.estimatedTime}
                          onChange={handleInputChange}
                          onBlur={() => closeModal()}
                        />
                        <H3Input>{"Meses"}</H3Input>
                      </DivInput>
                    </div>
                  </>
                ) : (
                  ""
                )}
              </div>
              <br />

              <br />

              <label style={{ fontSize: 14 }}>{"Valor Bruto"} </label>
              <br />

              <InputText
                type="text"
                name="value"
                value={formatNumber(inputValues.value, "R$", ".", ",")}
                onChange={handleInputChange}
                placeholder="R$00,00"
                onBlur={() => closeModal()}
              />

              <br />
            </div>
          </div>
        </Aside>

        <Article>
          <div className="container-align">
            <div className="header"></div>
            <div className="content-desc">
              <h2>Seu projeto!</h2>
              <br />
              <p>Confira se as informações estão</p>
              <p>corretas</p>
            </div>
            <br />
            <br />
            <br />
            <CardOverviewOne
              selectedOptions={selectedOptions}
              handleDeselectOption={handleDeselectOption}
              debouncedInputValues={debouncedInputValues}
              type={selectedOption}
            />

            <br />
            <br />
            <br />

            <CardHunter>
              <h3>{infoUser.name}</h3>
              <br />
              <p>{infoUser.sector}</p>
              <br />
              <div className="content-infos-company">
                <div className="info-company">
                  <p>{infoUser.user.name}</p>
                  <AiOutlineUser size={24} color={`${Colors.PRIMARY_COLOR}`} />
                </div>
                <br />
                <div className="info-company">
                  <p>{infoUser.email}</p>
                  <MdEmail size={24} color={`${Colors.PRIMARY_COLOR}`} />
                </div>
                <br />
                <div className="info-company">
                  <p>{infoUser.user.cellphone}</p>
                  <MdPhoneInTalk size={24} color={`${Colors.PRIMARY_COLOR}`} />
                </div>
              </div>
            </CardHunter>
          </div>

          <div className="content-desc" style={{ marginBottom: 20 }}>
            {preferenceId === null ? (
              <FilledButton
                marginRight={""}
                color={Colors.PRIMARY_COLOR}
                width={477}
                heigth={60}
                alignSelf={"center"}
                onClick={() => cadastrar()}
              >
                {"Realizar pagamento"}
              </FilledButton>
            ) : (
              <div
                style={{
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {renderCheckoutButton(preferenceId)}
              </div>
            )}
          </div>
        </Article>

        {typeError === 1 ? (
          <ModalStatus
            status={"error"}
            texto={"Nome do projeto não pode estar vazio"}
            onClose={handleCloseError}
            modalError={modalError}
          />
        ) : typeError === 2 ? (
          <ModalStatus
            status={"error"}
            texto={
              "A descrição deve ter um tamanho maior que sessenta (60) caractéres"
            }
            onClose={handleCloseError}
            modalError={modalError}
          />
        ) : typeError === 3 ? (
          <ModalStatus
            status={"error"}
            texto={"Número de pessoas deve ser maior que 0"}
            onClose={handleCloseError}
            modalError={modalError}
          />
        ) : typeError === 4 ? (
          <ModalStatus
            status={"error"}
            texto={"Número de pessoas excedido deve ser menor ou igual que 6"}
            onClose={handleCloseError}
            modalError={modalError}
          />
        ) : typeError === 5 ? (
          <ModalStatus
            status={"error"}
            texto={"Quantidade de meses deve ser maior que 0"}
            onClose={handleCloseError}
            modalError={modalError}
          />
        ) : typeError === 6 ? (
          <ModalStatus
            status={"error"}
            texto={"Quantidade de meses excedido, deve ser menor ou igual á 12"}
            onClose={handleCloseError}
            modalError={modalError}
          />
        ) : typeError === 7 ? (
          <ModalStatus
            status={"error"}
            texto={"O valor não pode conter letras"}
            onClose={handleCloseError}
            modalError={modalError}
          />
        ) : typeError === 8 ? (
          <ModalStatus
            status={"error"}
            texto={"O valor deve ser maior que R$100,00"}
            onClose={handleCloseError}
            modalError={modalError}
          />
        ) : (
          ""
        )}
      </Container>
    </>
  );
}

export default CreateProject;
