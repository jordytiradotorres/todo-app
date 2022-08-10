import { useContext } from "react";
import { TodoContext } from "../../TodoContext";
import "./TodoCounter.css";

export const TodoCounter = () => {
  const { completeTodos, totalTodos } = useContext(TodoContext);
  return (
    <h2 className="TodoCounter">
      Has completado {completeTodos} de {totalTodos} TODOs
    </h2>
  );
};
