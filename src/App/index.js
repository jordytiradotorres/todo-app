import {
  Loader,
  TodoCounter,
  TodoHeader,
  TodoItem,
  TodoList,
  TodoSearch,
  CreateTodoButton,
  TodoForm,
  Modal,
  MessageError,
} from "../components";
import { ChangeAlertWithStorageListener } from "../components/ChangeAlert";
import { useTodos } from "../hooks/useTodos";

function App() {
  const {
    loading,
    error,
    onComplete,
    onDeleteTodo,
    filteredTodos,
    openModal,
    setOpenModal,
    completeTodos,
    totalTodos,
    onInputChange,
    searchValue,
    sincronizedTodos,
    onAddTodo,
  } = useTodos();

  return (
    <>
      <TodoHeader loading={loading}>
        <TodoCounter completeTodos={completeTodos} totalTodos={totalTodos} />
        <TodoSearch onInputChange={onInputChange} searchValue={searchValue} />
      </TodoHeader>

      <TodoList
        error={error}
        loading={loading}
        filteredTodos={filteredTodos}
        totalTodos={totalTodos}
        searchValue={searchValue}
        onError={() => <MessageError />}
        onLoading={() => <Loader />}
        onEmptyTodos={() => <p>Crea tu nueva tarea</p>}
        onEmptySearchResults={(searchValue) => (
          <p>No se encontraron resultados para {searchValue}</p>
        )}
      >
        {(todo) => (
          <TodoItem
            key={todo.text}
            onComplete={onComplete}
            onDeleteTodo={onDeleteTodo}
            {...todo}
          />
        )}
      </TodoList>

      {openModal && (
        <Modal>
          <TodoForm onAddTodo={onAddTodo} setOpenModal={setOpenModal} />
        </Modal>
      )}

      <CreateTodoButton setOpenModal={setOpenModal} />
      <ChangeAlertWithStorageListener sincronize={sincronizedTodos} />
    </>
  );
}

export default App;
