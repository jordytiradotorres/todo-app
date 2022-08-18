import { useEffect, useReducer } from "react";

const initialState = ({ initialValue }) => ({
  sincronizeItem: true,
  item: initialValue,
  loading: true,
  error: false,
});

const actionType = {
  ERROR: "ERROR",
  SUCCESS: "SUCCESS",
  SAVE: "SAVE",
  SINCRONIZE: "SINCRONIZE",
};

const reducerObject = (state, payload) => ({
  [actionType.ERROR]: {
    ...state,
    payload: true,
  },
  [actionType.SUCCESS]: {
    ...state,
    loading: false,
    error: false,
    sincronizeItem: true,
    item: payload,
  },
  [actionType.SAVE]: {
    ...state,
    item: payload,
  },
  [actionType.SINCRONIZE]: {
    ...state,
    sincronizeItem: false,
    loading: true,
  },
});

const reducer = (state, action) => {
  return reducerObject(state, action.payload)[action.type] || state;
};

export const useLocalStorage = (itemName, initialValue) => {
  const [state, dispatch] = useReducer(reducer, initialState({ initialValue }));

  const { loading, error, sincronizeItem, item } = state;

  const onError = (error) =>
    dispatch({ type: actionType.ERROR, payload: error });

  const onSuccess = (parsedItem) =>
    dispatch({ type: actionType.SUCCESS, payload: parsedItem });

  const onSave = (newItem) =>
    dispatch({ type: actionType.SAVE, payload: newItem });

  const onSincronize = () => dispatch({ type: actionType.SINCRONIZE });

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

        onSuccess(parsedItem);
      } catch (error) {
        onError(error);
      }
    }, 2000);
  }, [sincronizeItem]);

  const saveItem = (newItem) => {
    try {
      const saveLocalStorage = JSON.stringify(newItem);
      localStorage.setItem(itemName, saveLocalStorage);
      // setItem(newItem);
      onSave(newItem);
    } catch (error) {
      onError();
    }
  };

  const sincronizedItem = () => onSincronize();

  return { item, saveItem, loading, error, sincronizedItem };
};
