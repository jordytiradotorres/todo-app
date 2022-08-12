import { useState } from "react";

export const useStorageListener = (sincronize) => {
  const [storageChange, setStorageChange] = useState(false);

  window.addEventListener("storage", (change) => {
    if (change.key === "TODOS_V1") {
      console.log("hubo cambios eb TODOS_v1");
      setStorageChange(true);
    }
  });

  const toggleShow = () => {
    sincronize();
    setStorageChange(false);
  };
  return { show: storageChange, toggleShow };
};
