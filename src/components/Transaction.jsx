import React, { useContext } from "react";
import ContextTransactions from "../store/ContextTransactions";

const Transaction = () => {
  const { removeTransaction, transactions } = useContext(ContextTransactions);

  const removeHandler = (id) => {
    removeTransaction(id);
  };

  return (
    <>
      <h3>History</h3>
      <ul className="list">
        {transactions.map((item) => (
          <li key={item.id} className={item.amount < 0 ? "minus" : "plus"}>
            {item.text} <span>${item.amount}</span>
            <button
              onClick={() => removeHandler(item.id)}
              className="delete-btn"
            >
              x
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Transaction;
