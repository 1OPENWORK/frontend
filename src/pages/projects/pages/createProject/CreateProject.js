import React, { useState, useEffect, useMemo } from "react";
import { Container, Aside, Article, TextArea } from "./CreateProject.styled";
import { FilledButton } from "./../../../../components/UI/buttons/Button";
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
import Cookies from "js-cookie";
import { handleProeficiency } from "../../../../store/actions/Proeficiency";
import { Filter } from "../../../dashboardFinanceira/Dashboard.styled";

function CreateProject() {
  const navigate = useNavigate();
  const [selectedOption, setSelectedOption] = useState();
  const fullname = Cookies.get("fullname");
  const email = Cookies.get("email");

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const [search, setSearch] = useState("");
  const [proef, setProef] = useState([]);

  const listar = async () => {
    const dados = await handleProeficiency();
    setProef(dados.data);
  };

  useEffect(() => {
    listar();
  }, []);

  const filter = useMemo(() => {
    const searchLowerCase = search.toLowerCase();

    return proef.filter((proef) =>
      proef.name.toLowerCase().includes(searchLowerCase)
    );
  }, [proef, search]);

  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleSelectOption = (option) => {
    setSelectedOptions([...selectedOptions, option]);
    closeModal();
    console.log(selectedOptions);
  };

  const [inputValues, setInputValues] = useState({
    nameProject: "",
    nameCompany: "",
    languages: [{ id: "" }],
    describe: "",
    qntdPeople: "",
    estimatedTime: "",
    value: "",
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
              <label>{"Nome do Projeto"}</label>
              <br />
              <InputText
                type="text"
                name="nameProject"
                value={inputValues.nameProject}
                onChange={handleInputChange}
              />
              <br />

              <br />
              <label>{"Linguagens e Softwares"}</label>
              <br />
              <div className="lang-program">
                <InputText
                  type="text"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  onFocus={openModal}
                  w={"50%"}
                />

                <div className={`modal ${isModalOpen ? "display" : ""}`}>
                  <ul>
                    {filter.map((proef) => (
                      <li
                        onClick={() => handleSelectOption(proef)}
                        key={proef.id}
                      >
                        {proef.name}
                      </li>
                    ))}
                  </ul>
                </div>

                <FilledButton
                  marginRight={"0px"}
                  color={Colors.PRIMARY_COLOR}
                  width={200}
                  heigth={60}
                >
                  {"Adicionar"}
                </FilledButton>
              </div>
            </div>

            <div className="content-desc">
              <label>{"Descrição"}</label>
              <br />

              <TextArea
                type="text"
                name="describe"
                value={inputValues.describe}
                onChange={handleInputChange}
              />
              <br />

              <div className="lang-program">
                <div className="qnt-check">
                  <label>{"Quatidade de Pessoas"} </label>
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
                    />
                    <H3Input>{"Pessoas"}</H3Input>
                  </DivInput>
                </div>

                <div className="qnt-check">
                  <label>{"Meses Estimados"} </label>
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
                    />
                    <H3Input>{"Meses"}</H3Input>
                  </DivInput>
                </div>
              </div>
              <br />

              <br />

              <label>{"Valor Bruto"} </label>
              <br />

              <InputText
                type="text"
                name="value"
                value={formatNumber(inputValues.value, "R$", ".", ",")}
                onChange={handleInputChange}
                placeholder="R$00,00"
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
              debouncedInputValues={debouncedInputValues}
            />

            <br />
            <br />
            <br />

            <CardHunter>
              <h3>{debouncedInputValues.nameCompany}</h3>
              <br />
              <p>{"Empresa de Freelancer"}</p>
              <br />
              <div className="content-infos-company">
                <div className="info-company">
                  <p>{fullname}</p>
                  <AiOutlineUser size={24} color={`${Colors.PRIMARY_COLOR}`} />
                </div>
                <br />
                <div className="info-company">
                  <p>{email}</p>
                  <MdEmail size={24} color={`${Colors.PRIMARY_COLOR}`} />
                </div>
                <br />
                <div className="info-company">
                  <p>{"+55 (11) 9000-4222"}</p>
                  <MdPhoneInTalk size={24} color={`${Colors.PRIMARY_COLOR}`} />
                </div>
              </div>
            </CardHunter>
          </div>

          <div className="content-desc">
            <FilledButton
              marginTop={"48px"}
              marginRight={""}
              color={Colors.PRIMARY_COLOR}
              width={477}
              heigth={60}
              alignSelf={"center"}
            >
              {"Criar Job"}
            </FilledButton>
          </div>
        </Article>
      </Container>
    </>
  );
}

export default CreateProject;
