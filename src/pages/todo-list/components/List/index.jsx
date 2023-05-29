import React, { useEffect, useState } from "react";
import { MdAdd } from "react-icons/md";
import Card from "../Card";
import { Container } from "./styles";
import { Draggable } from "react-beautiful-dnd";
import axios from "axios";
import { getToken } from "../../../../hooks/Cookies";

export default function List({ data }) {
  const [cards, setCards] = useState([]);
  const token = getToken();

  useEffect(() => {
    setCards(data.cardList);
  }, [setCards, cards]);

  // const fetchCards = async () => {
  //   try {
  //     const response = await axios.get(
  //       `${process.env.REACT_APP_BACKEND_LOCAL_HOST}/api/cards/list-cards?idType=${data.idType}`,
  //       {
  //         headers: {
  //           Authorization: `Bearer ${token}`,
  //         },
  //         params: {
  //           idType: data.idType,
  //         },
  //       }
  //     );
  //     if (response.status === 200 && response.data) {
  //       setCards(response.data);
  //     } else {
  //       console.error("Invalid response:", response);
  //     }
  //   } catch (error) {
  //     console.error("Error fetching cards:", error);
  //   }
  // };

  function handleAddCard() {
    const newCard = {
      content: "Novo Card (Faça edição para melhor personalização)",
      label: 1,
      tasks: [],
    };

    const typeIdCreated = data.idType;
    axios
      .post(
        `${process.env.REACT_APP_BACKEND_LOCAL_HOST}/api/listas/${typeIdCreated}/add-card`,
        newCard,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((response) => {
        if (response.status === 201) {
          const updatedCards = [...cards, response.data.cardList];
          setCards(updatedCards);
        } else {
          console.error("Invalid response:", response);
        }
      })
      .catch((error) => {
        console.error("Error adding card:", error);
      });
  }

  return (
    <Container done={!data.creatable && (true)} creatable={data.creatable}>
      <header>
        <h2>{data.title}</h2>
        {data.creatable && (
          <button className="btn-edit" type="button" onClick={handleAddCard}>
            <MdAdd size={24} color="#FFF" />
          </button>
        )}
      </header>

      <ul>
        {data.cardList.map((card, index) => (
          <Draggable key={card.id} draggableId={String(card.id)} index={index}>
            {(provided, snapshot) => (
              <div
                ref={provided.innerRef}
                {...provided.dragHandleProps}
                {...provided.draggableProps}
              >
                <Card key={card.id} isDragging={snapshot.isDragging} data={card} />
              </div>
            )}
          </Draggable>
        ))}
      </ul>
    </Container>
  );
}