import "./TodoCounter.css";

export const TodoCounter = ({ completeTodos, totalTodos }) => {
  return (
    <h2 className="TodoCounter">
      Has completado {completeTodos} de {totalTodos} TODOs
    </h2>
  );
};
