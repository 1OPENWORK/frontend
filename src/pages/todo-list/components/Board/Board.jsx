import React from "react";
// import produce from "immer";

// import { loadLists } from "../../services/api";


import List from "../List";

import { Container, Content } from "./styles";
import { Droppable, DragDropContext } from "react-beautiful-dnd";
import { useState, useEffect } from "react";




export default function Board({ listId }) {




  const data = [
    {


      id: 1,
      title: 'Tarefas',
      creatable: true,
      cards: [
        {
          id: 1,
          content: 'Estudar módulo 01 de NodeJS',
          labels: [{
            id: 1,
            title: 'Desejável',
            color: '#0d6efd'
          }, {

            id: 2,
            title: 'Importante',
            color: '#ffc107'
          }, {
            id: 3,
            title: 'Essencial',
            color: '#F04D4D '
          }],
          user: 'https://api.dicebear.com/5.x/adventurer-neutral/svg?seed=Annie',
          tasks: [
            {
              id: 1,
              describe: '1. Colocar no git',
              checked: false
            },
            {
              id: 2,
              describe: '2. criar entidades',
              checked: false
            },
            {
              id: 3,
              describe: '3. fazer end-poitns',
              checked: false
            }
          ]
        },
        {
          id: 2,
          content:
            'Criar vídeo para o Youtube ensinando a recriar a interface do PipefyCriar vídeo para o Youtube ensinando a recriar a interface do PipefyCriar vídeo para o Youtube ensinando a recriar a interface do PipefyCriar vídeo para o Youtube ensinando a recriar a interface do PipefyCriar vídeo para o Youtube ensinando a recriar a interface do PipefyCriar vídeo para o Youtube ensinando a recriar a interface do Pipefy',
          labels: [{
            id: 1,
            title: 'Desejável',
            color: '#0d6efd'
          }, {

            id: 2,
            title: 'Importante',
            color: '#ffc107'
          }, {
            id: 3,
            title: 'Essencial',
            color: '#F04D4D '
          }],
          user: 'https://api.dicebear.com/5.x/adventurer-neutral/svg?seed=Annie',
          tasks: []
        },
        {
          id: 3,
          content: 'Estudar módulo 03 de React Native',
          labels: [{
            id: 1,
            title: 'Desejável',
            color: '#0d6efd'
          }, {

            id: 2,
            title: 'Importante',
            color: '#ffc107'
          }, {
            id: 3,
            title: 'Essencial',
            color: '#F04D4D '
          }],
          user: 'https://api.dicebear.com/5.x/adventurer-neutral/svg?seed=Oliver',
          tasks: []
        },
        {
          id: 4,
          content:
            'Gravar Aula "NextJS: Utilizando server-side rendering com ReactJS"',
          labels: [{
            id: 1,
            title: 'Desejável',
            color: '#0d6efd'
          }, {

            id: 2,
            title: 'Importante',
            color: '#ffc107'
          }, {
            id: 3,
            title: 'Essencial',
            color: '#F04D4D '
          }],
          user: 'https://api.dicebear.com/5.x/adventurer-neutral/svg?seed=Oliver',
          tasks: []
        },
        {
          id: 5,
          content: 'Gravar testes e deploy ReactJS',
          labels: [{
            id: 1,
            title: 'Desejável',
            color: '#0d6efd'
          }, {

            id: 2,
            title: 'Importante',
            color: '#ffc107'
          }, {
            id: 3,
            title: 'Essencial',
            color: '#F04D4D '
          }],
          user: 'https://api.dicebear.com/5.x/adventurer/svg?seed=Daisy',
          tasks: []
        }
      ]
    },
    {
      id: 2,
      title: 'Fazendo',
      creatable: true,
      cards: [
        {
          id: 6,
          content: 'Recriando clone do Pipefy',
          labels: [{
            id: 1,
            title: 'Desejável',
            color: '#0d6efd'
          }, {

            id: 2,
            title: 'Importante',
            color: '#ffc107'
          }, {
            id: 3,
            title: 'Essencial',
            color: '#F04D4D '
          }],
          user: 'https://api.dicebear.com/5.x/adventurer/svg?seed=Daisy',
          tasks: []
        }
      ]
    },
    {
      id: 3,
      title: 'Pausado',
      creatable: true,
      cards: [
        {
          id: 7,
          content: 'Gravar sobre Geolocalização e mapas com React Native',
          labels: [{
            id: 1,
            title: 'Desejável',
            color: '#0d6efd'
          }, {

            id: 2,
            title: 'Importante',
            color: '#ffc107'
          }, {
            id: 3,
            title: 'Essencial',
            color: '#F04D4D '
          }],
          user: 'https://api.dicebear.com/5.x/adventurer-neutral/svg?seed=Jack',
          tasks: []
        },
        {
          id: 8,
          content: 'Gravar testes e deploy ReactJS',
          labels: [{
            id: 1,
            title: 'Desejável',
            color: '#0d6efd'
          }, {

            id: 2,
            title: 'Importante',
            color: '#ffc107'
          }, {
            id: 3,
            title: 'Essencial',
            color: '#F04D4D '
          }],
          user: 'https://api.dicebear.com/5.x/adventurer-neutral/svg?seed=Jack',
          tasks: []
        },
        {
          id: 9,
          content: 'Ajustes na biblioteca unform',
          labels: [{
            id: 1,
            title: 'Desejável',
            color: '#0d6efd'
          }, {

            id: 2,
            title: 'Importante',
            color: '#ffc107'
          }, {
            id: 3,
            title: 'Essencial',
            color: '#F04D4D '
          }],
          tasks: []
        }
      ]
    },
    {
      id: 4,
      title: 'Concluído',
      creatable: false,
      done: true,
      cards: [
        {
          id: 10,
          content: 'Gravar aula sobre deploy e CI com React Native',
          labels: [{
            id: 1,
            title: 'Desejável',
            color: '#0d6efd'
          }, {

            id: 2,
            title: 'Importante',
            color: '#ffc107'
          }, {
            id: 3,
            title: 'Essencial',
            color: '#F04D4D '
          }],
          tasks: []
        },
        {
          id: 12,
          content: 'Gravar testes e deploy ReactJS',
          labels: [{
            id: 1,
            title: 'Desejável',
            color: '#0d6efd'
          }, {

            id: 2,
            title: 'Importante',
            color: '#ffc107'
          }, {
            id: 3,
            title: 'Essencial',
            color: '#F04D4D '
          }],
          tasks: []
        },
        {
          id: 13,
          content:
            'Gravar Aula "Internacionalização de aplicações Node.js, ReactJS e React Native"',
          labels: [{
            id: 1,
            title: 'Desejável',
            color: '#0d6efd'
          }, {

            id: 2,
            title: 'Importante',
            color: '#ffc107'
          }, {
            id: 3,
            title: 'Essencial',
            color: '#F04D4D '
          }],
          tasks: []
        }
      ]
    }



  ]

  const [lists, setLists] = useState(data);


  // function move(fromList, toList, from, to) {
  //   setLists(
  //     produce(lists, (draft) => {
  //       const dragged = draft[fromList].cards[from];

  //       draft[fromList].cards.splice(from, 1);
  //       draft[toList].cards.splice(to, 0, dragged);
  //     })
  //   );
  // }

  // const handleDragEnd = (result) => {
  //   if (!result.destination) return;

  //   const { source, destination } = result;
  //   const items = Array.from(lists);

  //   // remove o card na origem
  //   const [removed] = items[source.droppableId - 1].cards.splice(source.index, 1);

  //   // adiciona o card no destino
  //   items[destination.droppableId - 1].cards.splice(destination.index, 0, {
  //     ...removed,
  //     id: `${destination.droppableId}-${removed.id}`,
  //   });

  //   setLists(items);
  // };



  // TRABALHAR COM VÁRIAS LISTAS, REMOVER DA ANTERIOR E ADICIONAR EM UMA NOVA

  // const [lists, setLists] = useState([]);

  useEffect(() => {
    fetchLists();
  }, []);

  const fetchLists = async () => {
    // Faça uma chamada à API para obter as listas do servidor
    const response = await fetch("/api/lists");
    const data = await response.json();
    setLists(data);
  };

  const handleDragEnd = async (result) => {
    if (!result.destination) {
      return;
    }

    const { source, destination } = result;

    // Encontre a lista de origem e a lista de destino com base nos índices
    const sourceList = lists.find((list) => list.id.toString() === source.droppableId);
    const destinationList = lists.find((list) => list.id.toString() === destination.droppableId);

    if (sourceList && destinationList) {
      // Remova o item da lista de origem
      const movedItem = sourceList.cards.splice(source.index, 1)[0];

      // Insira o item na lista de destino na posição correta
      destinationList.cards.splice(destination.index, 0, movedItem);

      // Faça uma chamada à API para atualizar a posição do item
      await fetch(`/api/lists/${sourceList.id}/cards/${movedItem.id}/position?newPosition=${destination.index}`, {
        method: "PUT",
      });




      setLists([...lists]); // Atualize o estado das listas para refletir a nova ordem

      console.log("source:" + source)
      console.log("destination:" + destination)
      console.log("movedItem:" + movedItem)
    }
  };


  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <Container>
        {lists.map((list, index) => (
          <Droppable droppableId={String(list.id)} key={list.id}>
            {(provided) => (
              <Content ref={provided.innerRef} {...provided.droppableProps}>
                <List index={list.id} data={list} />
                {provided.placeholder}
              </Content>
            )}
          </Droppable>
        ))}
      </Container>
    </DragDropContext>
  );
}