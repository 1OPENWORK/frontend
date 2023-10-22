import React from "react";
import List from "../List";

import { Container, Content } from "./styles";
import { Droppable, DragDropContext } from "react-beautiful-dnd";
import { useState, useEffect } from "react";
import axios from "axios";
import { getToken } from "../../../../hooks/Cookies";
import { AmbienteBackend } from "../../../../hooks/Ambiente";
import axiosInstance from "../../../../services/Axios";

export default function Board({ id }) {
  const [lists, setLists] = useState([]);

  const fetchLists = `${AmbienteBackend()}/api/projetos-grandes/` + id;

  const token = getToken();

  useEffect(() => {
    fetchBoard();
  }, []);

  async function fetchBoard() {
    await axios
      .get(fetchLists, {
        headers: {
          Authorization: "Bearer " + token,
        },
      })
      .then((response) => {
        if (response.status === 200) {
          setLists(response.data.listCards);
          console.log(response.data.listCards);
        } else if (response.status === 204) {
          console.log("NO_CONTENT: ", response);
        }
      })
      .catch((error) => {
        console.log("ERROR: " + error);
      });
  }

  const handleDragEnd = async (result) => {
    if (!result.destination) {
      return;
    }

    const { source, destination } = result;

    if (!source || !destination) {
      return;
    }

    // Encontre a lista de origem e a lista de destino com base nos índices
    const sourceListIndex = lists.findIndex(
      (list) => list.idType.toString() === source.droppableId
    );
    const destinationListIndex = lists.findIndex(
      (list) => list.idType.toString() === destination.droppableId
    );

    if (sourceListIndex !== -1 && destinationListIndex !== -1) {
      // Crie cópias das listas e dos cartões
      const updatedLists = [...lists];
      const sourceList = {
        ...updatedLists[sourceListIndex],
        cards: updatedLists[sourceListIndex].cards || [],
      };
      const destinationList = {
        ...updatedLists[destinationListIndex],
        cards: updatedLists[destinationListIndex].cards || [],
      };

      // Remova o item da lista de origem e armazene-o em movedItem
      const movedItem = sourceList.cards.splice(source.index, 1)[0];

      // Insira o item na lista de destino na posição correta
      destinationList.cards.splice(destination.index, 0, movedItem);

      // Atualize as listas no estado

      // Faça uma chamada à API para atualizar a posição do item
      await axiosInstance.put(
        `${AmbienteBackend()}/api/listas/${sourceList.id}/cards/${
          movedItem.id
        }/position`,
        { newPosition: destination.index }
      );
      updatedLists[sourceListIndex] = sourceList;
      updatedLists[destinationListIndex] = destinationList;

      setLists(updatedLists); // Atualize o estado das listas para refletir a nova ordem

      console.log("source:", source);
      console.log("destination:", destination);
      console.log("movedItem:", movedItem);
    }
  };

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <Container>
        {lists.length > 0 &&
          lists.map((list, index) => {
            // Mapeia as listas com base no idType
            let listTitle = "";
            switch (list.idType) {
              case 1:
                listTitle = "Tarefas";
                break;
              case 2:
                listTitle = "Fazendo";
                break;
              case 3:
                listTitle = "Pausado";
                break;
              case 4:
                listTitle = "Concluído";
                break;
              default:
                listTitle = "";
            }

            return (
              <Droppable droppableId={String(list.idType)} key={list.idType}>
                {(provided) => (
                  <Content ref={provided.innerRef} {...provided.droppableProps}>
                    <List index={list.id} data={list} title={listTitle} />
                    {provided.placeholder}
                  </Content>
                )}
              </Droppable>
            );
          })}
      </Container>
    </DragDropContext>
  );
}
