import { useState } from "react";

export const withStorageListener = (WrapperComponent) => {
  return function WrapperComponentWithStorageListener(props) {
    const [storageChange, setStorageChange] = useState(false);

    window.addEventListener("storage", (change) => {
      if (change.key === "TODOS_V1") {
        console.log("hubo cambios eb TODOS_v1");
        setStorageChange(true);
      }
    });

    const toggleShow = () => {
      props.sincronize();
      setStorageChange(false);
    };
    return <WrapperComponent show={storageChange} toggleShow={toggleShow} />;
  };
};
