import "./TodoCounter.css";

export const TodoCounter = ({ completeTodos, totalTodos, loading }) => {
  return (
    <h2 className={`TodoCounter ${loading && "TodoCounter--loading"}`}>
      Has completado {completeTodos} de {totalTodos} TODOs
    </h2>
  );
};
