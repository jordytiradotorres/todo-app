import { useEffect, useState } from "react";

export const useLocalStorage = (itemName, initialValue) => {
  const [sincronizedItem, setSincronizedItem] = useState(true);
  const [item, setItem] = useState(initialValue);
  const [loading, setloading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      try {
        const localStorageItem = localStorage.getItem(itemName);
        let parsedItem;

        if (!localStorageItem) {
          localStorage.setItem(itemName, JSON.stringify(initialValue));
          parsedItem = initialValue;
        } else {
          parsedItem = JSON.parse(localStorageItem);
        }

        setItem(parsedItem);
        setloading(false);
        setSincronizedItem(true);
      } catch (error) {
        setError(error);
      }
    }, 2000);
  }, [sincronizedItem]);

  const saveItem = (newItem) => {
    try {
      const saveLocalStorage = JSON.stringify(newItem);
      localStorage.setItem(itemName, saveLocalStorage);
      setItem(newItem);
    } catch (error) {
      setError(error);
    }
  };

  const sincronizeItem = () => {
    setloading(true);
    setSincronizedItem(false);
  };

  return { item, saveItem, loading, error, sincronizeItem };
};
