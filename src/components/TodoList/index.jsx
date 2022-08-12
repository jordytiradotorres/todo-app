import "./TodoList.css";

export const TodoList = ({
  error,
  loading,
  onError,
  onLoading,
  totalTodos,
  onEmptyTodos,
  onEmptySearchResults,
  filteredTodos,
  searchValue,
  render,
  children,
}) => {
  const renderFunct = children || render;

  return (
    <section>
      {error && onError()}
      {loading && onLoading()}
      {!loading && !totalTodos && onEmptyTodos()}
      {!!totalTodos &&
        !filteredTodos.length &&
        onEmptySearchResults(searchValue)}
      {!loading && !error && filteredTodos.map(renderFunct)}
    </section>
  );
};
