import { useContext } from "react";
import {
  TodoSearch,
  TodoCounter,
  TodoItem,
  TodoList,
  CreateTodoButton,
  Modal,
  TodoForm,
  Loader,
} from "../components";

import { TodoContext } from "../TodoContext";

export const AppUI = () => {
  const {
    loading,
    error,
    onComplete,
    onDeleteTodo,
    filteredTodos,
    openModal,
    setOpenModal,
  } = useContext(TodoContext);
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <TodoCounter />
          <TodoSearch />

          <TodoList>
            {filteredTodos.map((todo) => (
              <TodoItem
                key={todo.text}
                onComplete={onComplete}
                onDeleteTodo={onDeleteTodo}
                {...todo}
              />
            ))}
          </TodoList>

          {openModal && (
            <Modal>
              <TodoForm />
            </Modal>
          )}

          <CreateTodoButton setOpenModal={setOpenModal} />
        </>
      )}
      {!loading && !filteredTodos.length && <p>Crea tu nueva tarea</p>}
      {error && <p>Ocurrio un Error</p>}
    </>
  );
};
