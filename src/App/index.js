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
} from "../components";
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
    onAddTodo,
  } = useTodos();

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <TodoHeader>
            <TodoCounter
              completeTodos={completeTodos}
              totalTodos={totalTodos}
            />
            <TodoSearch
              onInputChange={onInputChange}
              searchValue={searchValue}
            />
          </TodoHeader>

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
              <TodoForm onAddTodo={onAddTodo} setOpenModal={setOpenModal} />
            </Modal>
          )}

          <CreateTodoButton setOpenModal={setOpenModal} />
        </>
      )}
      {!loading && !filteredTodos.length && <p>Crea tu nueva tarea</p>}
      {error && <p>Ocurrio un Error</p>}
    </>
  );
}

// function App() {
//   const [state, setState] = useState("hola");

//   return (
//     <>
//       <TodoHeader>
//         <TodoCounter />
//         <TodoSearch state={state} />
//       </TodoHeader>
//       <TodoList>
//         <TodoItem />
//       </TodoList>
//     </>
//   );
// }
// function TodoList({ children }) {
//   return <section>{children}</section>;
// }
// function TodoItem() {
//   return (
//     <>
//       <p>Todo item</p>
//     </>
//   );
// }
// function TodoHeader({ children }) {
//   return <section>{children}</section>;
// }
// function TodoCounter() {
//   return (
//     <>
//       <p>Todo counter</p>
//     </>
//   );
// }
// function TodoSearch({ state }) {
//   return (
//     <>
//       <p>Todo search: {state}</p>
//     </>
//   );
// }

export default App;
