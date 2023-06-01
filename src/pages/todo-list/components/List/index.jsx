import React, { useEffect, useState } from "react";
import { MdAdd } from "react-icons/md";
import Card from "../Card/index.jsx";
import { Container } from "./styles";
import { Draggable } from "react-beautiful-dnd";
import axios from "axios";
import { getToken } from "../../../../hooks/Cookies.js";
import { AmbienteBackend } from "../../../../hooks/Ambiente.js";

export default function List({ data }) {
  const [cards, setCards] = useState(data.cardList);

  const token = getToken();

  // useEffect(() => {
  //   setCards(data.cardList);
  // }, [data.cardList]);

  // const fetchCards = async () => {
  //   try {
  //     const response = await axios.get(
  //       `${AmbienteBackend()}/api/cards/list-cards?idType=${data.idType}`,
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

    const typeIdCreated = data.id;
    axios
      .post(
        `${AmbienteBackend()}/api/listas/add-card/${typeIdCreated}`,
        newCard,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((response) => {
        
        if (response.status === 201) {
          setCards([...cards, response.data]);
        } else {
          console.error("Invalid response:", response);
        }
      })
      .catch((error) => {
        console.error("Error adding card:", error);
      });
  }

  // function handleDeleteCard(id) {
  //   axios
  //     .delete(`${AmbienteBackend()}/api/cards/${id}`, {
  //       headers: {
  //         Authorization: 'Bearer ' + token
  //       }
  //     })
  //     .then((res) => {
  //       setCards(data.filter((card) => card.id !== id));
  //     })
  //     .catch((err) => {
  //       console.log("Deu erro: " + err);
  //     });
  // }
  return (
    <Container done={!data.creatable && true} creatable={data.creatable}>
      <header>
        <h2>{data.title}</h2>
        {data.creatable && (
          <button className="btn-edit" type="button" onClick={handleAddCard}>
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
                <Card
                  key={card.id}
                  isDragging={snapshot.isDragging}
                  data={card}
                  // onDelete={() => handleDeleteCard(card.id)}
                />
              </div>
            )}
          </Draggable>
        ))}
      </ul>
    </Container>
  );
}
