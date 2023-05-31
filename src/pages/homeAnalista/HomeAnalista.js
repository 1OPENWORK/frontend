import React, { useState, useEffect } from "react";
import Styled from "./HomeAnalista.styled";
import { FilledButton } from "../../components/UI/buttons/Button";
import { deleteId, deleteIsDev, deleteToken } from "../../hooks/Cookies";
import { useNavigate } from "react-router-dom";
import { post } from "../../services/Generected";
import emailjs from "@emailjs/browser";
import axios from "axios";
import { AmbienteBackend } from "../../hooks/Ambiente";

const HomeAnalista = () => {
  const navigate = useNavigate();
  const [assuntoGet, setAssunto] = useState("");
  const [descricaoGet, setDescricao] = useState("");
  const [fila, setFila] = useState([]);

  useEffect(() => {
    const obterDadosFila = async () => {
      try {
        const URI = AmbienteBackend() + "/api/queue/obterFila";
        const response = await axios.get(URI);
        const dados = await response.data;

        if (dados) {
          const registros = dados.split("\n");

          const filaArray = registros.map((registro) => {
            const [email, tipo] = registro.split(" - ");
            return { email, tipo };
          });

          setFila(filaArray);
        }
      } catch (error) {
        console.error("Erro ao obter dados da fila:", error);
      }
    };

    obterDadosFila();
  }, []);

  function enviarEmail(assunto, descricao) {
    const templateParams = {
      email: "yuri.martins@sptech.school",
      from_name: "openworkAnalista@gmail.com",
      subject: assunto,
      message: descricao,
    };

    emailjs
      .send(
        "service_xmllsz6",
        "template_29mubfs",
        templateParams,
        "RFDBRsIDOfvwI7OR-"
      )
      .then(
        (response) => {
          setAssunto("");
          setDescricao("");
        },
        (err) => {
          console.error("Erro ao enviar o email:", err);
        }
      );
  }

  const enviarNotificacao = async () => {
    try {
      // Obter o topo da pilha
      const response = await fetch(AmbienteBackend() + "/api/queue/topoPilha");
      const topoPilha = await response.text();

      // Separar assunto e descrição do topoPilha
      const [assuntoEmail, descricaoEmail] = topoPilha.split(" - ");

      // Enviar o email com o assunto e descrição
      enviarEmail(assuntoEmail, descricaoEmail);
    } catch (error) {
      console.error("Erro ao enviar o email:", error);
    }
  };

  const cadastrarPilha = async () => {
    try {
      const URI = AmbienteBackend() + "/api/queue/cadastroPilha";
      const dados = {
        assunto: assuntoGet,
        descricao: descricaoGet,
      };

      await post(URI, dados);
    } catch (error) {
      console.error("Erro ao cadastrar na pilha:", error);
    }
  };

  const handleAssuntoChange = (event) => {
    setAssunto(event.target.value);
  };

  const handleDescricaoChange = (event) => {
    setDescricao(event.target.value);
  };

  const deslogar = () => {
    deleteToken();
    deleteId();
    deleteIsDev();
    navigate("/login");
  };

  const [highlightedItem, setHighlightedItem] = useState(null);

  // eslint-disable-next-line no-unused-vars
  const handleItemClick = (item) => {
    setHighlightedItem(item);
  };

  const handleMouseEnter = (item) => {
    setHighlightedItem(item);
  };

  const handleMouseLeave = () => {
    setHighlightedItem(null);
  };

  const handleDeleteItem = async () => {
    if (fila.length > 0) {
      setFila((prevFila) => prevFila.slice(1));

      if (fila.length > 1) {
        setHighlightedItem(fila[1]);
      } else {
        setHighlightedItem(null);
      }

      try {
        const response = await fetch(
          AmbienteBackend() + "/api/queue/topoFila",
          {
            method: "GET",
          }
        );

        if (response.ok) {
          // eslint-disable-next-line no-unused-vars
          const valorTopo = await response.text();
        } else {
          console.error("Não foi possível excluir o elemento da fila.");
        }
      } catch (error) {
        console.error("Erro ao excluir o elemento da fila:", error);
      }
    }
  };

  return (
    <>
      <Styled.Container>
        <Styled.ContainerLeft>
          <Styled.ContainerTitle>
            Notificações Para Usuários
          </Styled.ContainerTitle>

          <Styled.InputText>
            <Styled.H1>Assunto</Styled.H1>
            <Styled.Input
              id="assunto"
              value={assuntoGet}
              onChange={handleAssuntoChange}
            ></Styled.Input>
          </Styled.InputText>

          <Styled.InputText>
            <Styled.H1>Descrição</Styled.H1>
            <Styled.InputMore
              id="descricao"
              value={descricaoGet}
              onChange={handleDescricaoChange}
              rows={6}
            ></Styled.InputMore>
          </Styled.InputText>

          <Styled.ButtonLeft primary onClick={() => cadastrarPilha()}>
            Salvar Notificação
          </Styled.ButtonLeft>

          <Styled.ButtonLeft onClick={() => enviarNotificacao()}>
            Enviar Notificação
          </Styled.ButtonLeft>
        </Styled.ContainerLeft>

        <Styled.ContainerRight>
          <Styled.ContainerTitle2>
            <Styled.ContainerText2>Lista de Suporte</Styled.ContainerText2>
            <FilledButton
              onClick={() => deslogar()}
              color={"#161616"}
              width={190}
              heigth={60}
              marginRight={"1.5rem"}
            >
              {"Sair"}
            </FilledButton>
          </Styled.ContainerTitle2>

          <Styled.ContainerRole>
            <Styled.TextRole1>Nome</Styled.TextRole1>

            <Styled.TextRole2>Role</Styled.TextRole2>
          </Styled.ContainerRole>

          <Styled.ContainerTableRole>
            {fila.map((item, index) => {
              const isFirstItem = index === 0;
              const isHighlighted = item === highlightedItem;
              const rowClassName =
                isFirstItem && isHighlighted ? "highlighted" : "";

              return (
                <Styled.ContainerTable
                  key={index}
                  className={rowClassName}
                  onMouseEnter={() => handleMouseEnter(item)}
                  onMouseLeave={handleMouseLeave}
                  onClick={handleDeleteItem}
                >
                  <Styled.TextTable1>{item.email}</Styled.TextTable1>
                  <Styled.TextTable2>{item.tipo}</Styled.TextTable2>
                  {isFirstItem && isHighlighted && (
                    <Styled.ExcluirText>Excluir</Styled.ExcluirText>
                  )}
                </Styled.ContainerTable>
              );
            })}
          </Styled.ContainerTableRole>
        </Styled.ContainerRight>
      </Styled.Container>
    </>
  );
};
export default HomeAnalista;
