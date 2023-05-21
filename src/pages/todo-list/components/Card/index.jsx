import React, { useState } from "react";
// import { useDrag, useDrop } from "react-dnd";

// import BoardContext from "../Board/context";

import { Container, InputDate, Label } from "./styles";
import { FiEdit } from "react-icons/fi";
import { RiAddCircleLine, RiDeleteBin2Fill } from "react-icons/ri";

import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';
import Modal from 'react-bootstrap/Modal';
import { useEffect } from "react";

import moment from 'moment'

export default function Card({ data, index }) {

  const now = moment();
  const day = now.format('DD');
  const month = now.format('MM');
  const year = now.format('YYYY');
  // const ref = useRef();
  // const { move } = useContext(BoardContext);

  const [isEditing, setIsEditing] = useState(false); // Estado para controlar se o modo de edição está ativado
  const [newContent, setNewContent] = useState(data.content);
  const [newDescribe, setNewDescribe] = useState(data.describe); // Estado
  // Estado

  const [lgShow, setLgShow] = useState(false);


  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const handleAddTask = () => {
    if (newTask.trim() !== "") {
      setTasks([...tasks, newTask]);
      setNewTask("");
    }
  };


  const style = {
    font: "inherit",
    border: "0.15em solid currentColor",
    borderRadius: "0.15em",
    placeContent: 'center',


  }

  const [checked, setChecked] = useState(false);
  const [radioValue, setRadioValue] = useState('1');

  const radios = [
    { name: 'Desejável', value: '1' },
    { name: 'Importante', value: '2' },
    { name: 'Essencial', value: '3' },
  ];



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
    setLgShow(true);
  };

  // const handleSaveClick = () => {
  //   // Realiza a atualização do conteúdo do card
  //   data.content = newContent;
  //   setNewContent(data.content);
  //   setNewDescribe(data.describe);
  // };

  // dragRef(dropRef(ref));

  return (
    <>

      <Container>
        <header>
          {data.labels.map((label) => (
            <Label key={label} color={label}>
              <p>Essencial</p>
            </Label>
          ))}
          {!lgShow && (
            <button className="button-edit" onClick={handleEditClick}>
              <FiEdit size={20} />
            </button>
          )}
        </header>



        <div style={{
          minHeight: "88px", maxHeight: "88px", border: "none", marginTop: ".5rem", wordBreak: "break-all", overflowY: "scroll", padding: ".5rem", borderRadius: ".3em",
          background: "#f6f6f6f6",
          boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
        }}>
          <p>{data.content}</p>

        </div>



        <footer className="footer">
          {data.user && <img src={data.user} alt="" />}
        </footer>

        <Modal
          size="lg"
          show={lgShow}
          onHide={() => setLgShow(false)}
          aria-labelledby="example-modal-sizes-title-lg"
          style={{ maxHeight: "calc(100% - 8px)", overflowY: "scroll" }}
        >
          <Modal.Header closeButton>
            <Modal.Title id="example-modal-sizes-title-lg">
              Editar Card
            </Modal.Title>
          </Modal.Header>
          <form action="submit">

            <Modal.Body>
              <h3>Título</h3>
              <br />
              <p>Atribuições</p>
              <div className="add-user">
                {data.user && <img style={{ height: "24px", width: "24px", borderRadius: "50%" }} src={data.user} alt="" />}
                <RiAddCircleLine size={14} style={{ marginLeft: ".5rem", cursor: "pointer" }} />

              </div>

              <br />
              <br />

              <div className="div-priority-date" style={{ display: "flex", width: "80%", height: "88px", justifyContent: "space-between", alignItems: "center" }}>
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <p>
                    Prioridade
                  </p>

                  <ButtonGroup>
                    {radios.map((radio, idx) => (
                      <ToggleButton
                        key={idx}
                        id={`radio-${idx}`}
                        type="radio"
                        variant={idx === 0 ? ('outline-primary') : idx === 1 ? ('outline-warning') : ('outline-danger')}
                        name="radio"
                        value={radio.value}
                        checked={radioValue === radio.value}
                        onChange={(e) => setRadioValue(e.currentTarget.value)}
                      >
                        {radio.name}
                      </ToggleButton>
                    ))}
                  </ButtonGroup>
                </div>
                <div style={{ display: "flex", flexDirection: "column" }}> <p>Fim estimado</p> <InputDate type="date" min={`${day}/${month}/${year}`} /></div>

              </div>
              <br />
              <br />
              <label htmlFor="describe">Descrição</label>
              <br />
              <br />
              <textarea placeholder="Adicione aqui a descrição de sua tarefa" style={{ width: "100%", height: "104px", backgroundColor: "#f3f2f1", borderRadius: "8px", border: "none", padding: ".6rem", boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px" }}>{data.content}</textarea>

              <br />
              <br />
              <label htmlFor="task" style={{ cursor: "pointer", gap: "8px" }}
                onClick={handleAddTask}
              >
                Lista de tarefas
                <RiAddCircleLine size={14} style={{ marginLeft: ".5rem", cursor: "pointer" }}
                />

              </label>
              <br />
              <br />


              <div>
                <input
                  type="text"
                  value={newTask}
                  onChange={(e) => setNewTask(e.target.value)}
                  placeholder="Digite aqui a descrição da sua nova tarefa"
                  style={{
                    outline: "none", border: "none", width: "100%"
                  }}
                />
              </div>

              <br />
              <div className="div-tasks">
                {tasks.map((task, index) => (
                  <div key={index} style={{ marginBottom: ".5rem" }}>


                    <label class="form-control" >
                      <input className="input" htmlFor={`task-${index}`} style={style} type="checkbox" name="checkbox" id={`task-${index}`} />
                      <span style={{ marginLeft: ".5rem" }}>{task}</span>

                    </label>

                    <FiEdit size={16} style={{ position: "absolute", right: "3rem", marginTop: ".1em", transform: "translateY(-1.8em)", cursor: "pointer", zIndex: 100, color: "#6e6d6d" }} />
                    <RiDeleteBin2Fill size={18} style={{ position: "absolute", right: "1.5rem", transform: "translateY(-1.8em)", cursor: "pointer", zIndex: 100, color: "#6e6d6d" }} />
                  </div>
                ))}
              </div>

            </Modal.Body>
            <Modal.Footer >
              <Button variant="danger" >
                Deletar card
              </Button>

              <Button variant="success" >
                Salvar Alterações
              </Button>
            </Modal.Footer>

          </form>
        </Modal>
      </Container>



    </>
  );
}
