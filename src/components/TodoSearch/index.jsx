import "./TodoSearch.css";

export const TodoSearch = ({ onInputChange, searchValue }) => {
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
