import React, { useEffect, useState } from "react";
import { MdAdd } from "react-icons/md";
import Card from "../Card";
import { Container } from "./styles";
import { Draggable } from "react-beautiful-dnd";
import produce from "immer"; // importa o método 'produce' da biblioteca Immer

export default function List({ data, index }) {
  const [cards, setCards] = useState(data.cards);

  function handleAddCard() {
    let highestId = Math.max(...cards.map(card => card.id));

    // use o método 'produce' para criar uma cópia completa do objeto 'data'
    const newData = produce(data, draftData => {
      draftData.cards.push({
        id: highestId + 1,
        content: "Novo Card",
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
        user: null,
        tasks: []
      });
    });

    setCards(newData.cards);
  }

  useEffect(() => {
    setCards(data.cards);
  }, [data]);

  return (
    <Container done={data.done} creatable={data.creatable}>
      <header>
        <h2>{data.title}</h2>
        {data.creatable && (
          <button className="btn-edit" type="button" onClick={() => handleAddCard()}>
            <MdAdd size={24} color="#FFF" />
          </button>
        )}
      </header>

      <ul>
        {cards.map((card, index) => (
          <Draggable key={card.id} draggableId={String(card.id)} index={index}>
            {(provided, snapshot) => (
              <div
                ref={provided.innerRef}
                {...provided.dragHandleProps}
                {...provided.draggableProps}
              >
                <Card key={card.id}
                  isDragging={snapshot.isDragging} data={card} />
                {provided.placeholder}
              </div>
            )}
          </Draggable>
        ))}
      </ul>
    </Container>


  );
}