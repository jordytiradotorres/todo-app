import { useState } from "react";
import "./TodoForm.css";

export const TodoForm = ({ onAddTodo, setOpenModal }) => {
  const [textValue, setTextValue] = useState("");

  const onCancel = () => setOpenModal(false);

  const onSubmit = (e) => {
    e.preventDefault();

    onAddTodo(textValue);
    setOpenModal(false);
  };

  return (
    <form onSubmit={onSubmit}>
      <textarea
        placeholder="Escribe aqui tu tarea"
        value={textValue}
        onChange={(e) => setTextValue(e.target.value)}
      ></textarea>

      <div className="TodoForm-buttonContainer">
        <button
          onClick={onCancel}
          type="button"
          className="TodoForm-button TodoForm-button--cancel"
        >
          Cancelar
        </button>
        <button
          disabled={textValue.trim().length < 3}
          className="TodoForm-button TodoForm-button--add"
          onClick={onSubmit}
          type="submit"
        >
          Añadir
        </button>
      </div>
    </form>
  );
};
