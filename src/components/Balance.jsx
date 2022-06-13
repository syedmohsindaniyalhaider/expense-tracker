import React, { useContext } from "react";
import ContextTransactions from "../store/ContextTransactions";

const Balance = () => {
  const { transactions } = useContext(ContextTransactions);

  const amounts = transactions.map((item) => item.amount);

  const balance = amounts.reduce((prev, curr) => (prev += +curr), 0).toFixed(2);

  return (
    <>
      <h4>Your Balance</h4>
      <h1>${balance}</h1>
    </>
  );
};

export default Balance;
