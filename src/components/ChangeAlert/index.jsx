import { useStorageListener } from "./useStorageListener";
import "./ChangeAlert.css";

const ChangeAlert = ({ sincronize }) => {
  const { show, toggleShow } = useStorageListener(sincronize);

  if (show) {
    return (
      <div className="ChangeAlert-bg">
        <div className="ChangeAlert-container">
          <p>Parece que cambiaste tus TODOS en otra pestaña del navegador</p>
          <p>Quieres sincronizar tus TODOS</p>
          <button
            className="TodoForm-button TodoForm-button--add"
            onClick={(state) => toggleShow(!state)}
          >
            Yes!
          </button>
        </div>
      </div>
    );
  } else {
    return null;
  }
};

export { ChangeAlert };
