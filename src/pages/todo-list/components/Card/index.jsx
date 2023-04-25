import React, { useState } from "react";
// import { useDrag, useDrop } from "react-dnd";

// import BoardContext from "../Board/context";

import { Container, Label } from "./styles";
import { FiEdit } from "react-icons/fi";
import { AiOutlinePlusCircle } from "react-icons/ai";

export default function Card({ data, index }) {
  // const ref = useRef();
  // const { move } = useContext(BoardContext);

  const [isEditing, setIsEditing] = useState(false); // Estado para controlar se o modo de edição está ativado
  const [newContent, setNewContent] = useState(data.content);
  const [newDescribe, setNewDescribe] = useState(data.describe); // Estado
  // Estado
  const [tasks, setTasks] = useState(data.tasks);

  function handleAddTask() {
    const lastTaskId = Math.max(...tasks.map((task) => task.id));

    const newTask = {
      id: lastTaskId + 1,
      describe: "",
      checked: false,
    };
    setTasks([...tasks, newTask]);
  }

  // const [{ isDragging }, dragRef] = useDrag({
  //   type: "CARD",
  //   item: { id: data.id, index, listIndex },
  //   collect: (monitor) => ({
  //     isDragging: monitor.isDragging(),
  //   }),
  // });

  // const [, dropRef] = useDrop({
  //   accept: "CARD",
  //   hover(item, monitor) {
  //     const draggedListIndex = item.listIndex;
  //     const targetListIndex = listIndex;

  //     const draggedIndex = item.index;
  //     const targetIndex = index;

  //     if (
  //       draggedIndex === targetIndex &&
  //       draggedListIndex === targetListIndex
  //     ) {
  //       return;
  //     }

  //     const targetSize = ref.current.getBoundingClientRect();
  //     const targetCenter = (targetSize.bottom - targetSize.top) / 2;

  //     const draggedOffset = monitor.getClientOffset();
  //     const draggedTop = draggedOffset.y - targetSize.top;

  //     if (draggedIndex < targetIndex && draggedTop < targetCenter) {
  //       return;
  //     }

  //     if (draggedIndex > targetIndex && draggedTop > targetCenter) {
  //       return;
  //     }

  //     move(draggedListIndex, targetListIndex, draggedIndex, targetIndex);

  //     item.index = targetIndex;
  //     item.listIndex = targetListIndex;
  //   },
  // });

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    // Realiza a atualização do conteúdo do card
    data.content = newContent;
    setIsEditing(false);
    setNewContent(data.content);
    setNewDescribe(data.describe);
  };

  // dragRef(dropRef(ref));

  return (
    <Container>
      <header>
        {data.labels.map((label) => (
          <Label key={label} color={label}>
            <p>Essencial</p>
          </Label>
        ))}
        {!isEditing && (
          <button className="button-edit" onClick={handleEditClick}>
            <FiEdit size={20} />
          </button>
        )}
      </header>
      {isEditing ? (
        <div className="model-edit">
          <textarea
            className="txt-edit"
            value={newContent}
            onChange={(event) => setNewContent(event.target.value)}
            autoFocus
          />
          <div className="tasks-container">
            {tasks.map((task) => (
              <label className="container" key={task.id}>
                <input
                  type="checkbox"
                  checked={task.checked}
                  onChange={() => {
                    const updatedTasks = tasks.map((item) => {
                      if (item.id === task.id) {
                        return { ...item, checked: !item.checked };
                      } else {
                        return item;
                      }
                    });
                    setTasks(updatedTasks);
                  }}
                />
                <div className="checkmark"></div>
              </label>
            ))}
            <button className="add-task-button" onClick={handleAddTask}>
              <AiOutlinePlusCircle size={16} />
              <p>Adicionar tarefa</p>
            </button>
          </div>

          <button className="btn-save" onClick={handleSaveClick}>
            Salvar
          </button>
        </div>
      ) : (
        <p className="p-content">{data.content}</p>
      )}

      <footer className="footer">
        {data.user && <img src={data.user} alt="" />}
      </footer>
    </Container>
  );
}
