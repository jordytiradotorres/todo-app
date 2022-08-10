import { useContext } from "react";
import { TodoContext } from "../../TodoContext";
import "./TodoSearch.css";

export const TodoSearch = () => {
  const { onInputChange, searchValue } = useContext(TodoContext);
  return (
    <input
      className="TodoSearch"
      type="text"
      placeholder="Busca una tarea"
      onChange={onInputChange}
      value={searchValue}
    />
  );
};
