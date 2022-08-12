import { withStorageListener } from "./withStorageListener";
import "./ChangeAlert.css";

const ChangeAlert = ({ show, toggleShow }) => {
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

const ChangeAlertWithStorageListener = withStorageListener(ChangeAlert);
export { ChangeAlertWithStorageListener };
