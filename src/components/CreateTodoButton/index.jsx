import "./CreateTodoButton.css";

export const CreateTodoButton = ({ setOpenModal }) => {
  const onOpenModal = () => {
    // podemos enviar un estado anterior como una funcion
    setOpenModal((prevState) => !prevState);
  };
  return (
    <button className="CreateTodoButton" type="button" onClick={onOpenModal}>
      +
    </button>
  );
};
