import React from "react";

function useLocalStorage(itemName, initialValue) {
  const initialState = {
    error: false,
    loading: true,
    item: initialValue,
  };

  const onError = (err) => dispatch({ type: actionTypes.error, payload: err });
  const onSuccess = (item) =>
    dispatch({ type: actionTypes.success, payload: item });
  const onSave = (item) => dispatch({ type: actionTypes.save, payload: item });

  const [state, dispatch] = React.useReducer(reducer, initialState);
  const { loading, item, error } = state;

  React.useEffect(() => {
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
      } catch (err) {
        onError(err);
      }
    }, 3000);
  }, []);

  // console.log('the item contains:', item);

  const saveItems = (newItems) => {
    try {
      const stringifiedTodos = JSON.stringify(newItems);
      localStorage.setItem(itemName, stringifiedTodos);

      onSave(newItems);
    } catch (err) {
      onError(err);
    }
  };
  return {
    item,
    saveItems,
    loading,
    error,
  };
}

const actionTypes = {
  error: "error",
  success: "success",
  save: "save",
};

const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.error:
      return {
        ...state,
        error: true,
      };
    case actionTypes.success:
      return {
        ...state,
        error: false,
        loading: false,
        item: action.payload,
      };
    case actionTypes.save:
      return {
        ...state,
        item: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
};

export default useLocalStorage;
