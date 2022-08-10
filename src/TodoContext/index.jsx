import React, { useState } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

const TodoContext = React.createContext();

const TodoProvider = (props) => {
  const {
    item: todos,
    saveItem: saveTodos,
    loading,
    error,
  } = useLocalStorage("TODOS_V1", []);

  const [searchValue, setSearchValue] = useState("");
  const [openModal, setOpenModal] = useState(false);

  const completeTodos = todos.filter((todo) => !!todo.completed).length;
  const totalTodos = todos.length;

  const onInputChange = (e) => {
    setSearchValue(e.target.value);
  };

  let filteredTodos = [];

  if (!searchValue.length >= 1) {
    filteredTodos = todos;
  } else {
    filteredTodos = todos.filter((todo) => {
      let search = searchValue.toLowerCase();
      let text = todo.text.toLowerCase();
      return text.includes(search);
    });
  }

  const onDeleteTodo = (text) => {
    const newTodos = todos.filter((todo) => todo.text !== text);
    saveTodos(newTodos);
  };

  const onAddTodo = (text) => {
    // una manera
    const newTodos = [...todos, { text, completed: false }];
    // otra manera

    saveTodos(newTodos);
  };

  const onComplete = (text) => {
    let todoIndex = todos.findIndex((todo) => todo.text === text);

    const newTodos = [...todos];
    newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
    saveTodos(newTodos);
  };

  return (
    <TodoContext.Provider
      value={{
        completeTodos,
        totalTodos,
        searchValue,
        onComplete,
        onDeleteTodo,
        onAddTodo,
        onInputChange,
        filteredTodos,
        loading,
        error,
        openModal,
        setOpenModal,
      }}
    >
      {props.children}
    </TodoContext.Provider>
  );
};

export { TodoContext, TodoProvider };
