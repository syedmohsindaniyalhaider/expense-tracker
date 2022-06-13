import React, { createContext } from "react";

const initialContext = {
  transactions: [],
  addTransaction: (item) => {},
  removeTransaction: (id) => {},
};

const ContextTransactions = createContext(initialContext);

export default ContextTransactions;
