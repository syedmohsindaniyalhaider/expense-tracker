import React, { useReducer } from "react";
import ContextTransactions from "./ContextTransactions";
import Reducer from "./Reducer";

const initialState = {
  transactions: [],
};

const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, initialState);

  const addTransaction = (item) => {
    console.log("From ADD ::", item);
    dispatch({ type: "ADD_TRANSACTION", payload: item });
  };
  const removeTransaction = (id) => {
    dispatch({ type: "REMOVE_TRANSACTION", payload: id });
  };

  const transactionContext = {
    transactions: state.transactions,
    addTransaction,
    removeTransaction,
  };

  return (
    <ContextTransactions.Provider value={transactionContext}>
      {children}
    </ContextTransactions.Provider>
  );
};

export default ContextProvider;
