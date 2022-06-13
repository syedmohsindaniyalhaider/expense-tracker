import React, { useContext } from "react";
import ContextTransactions from "../store/ContextTransactions";

const IncomeExpenses = () => {
  const { transactions } = useContext(ContextTransactions);

  const amounts = transactions.map((item) => item.amount);

  const income = amounts
    .filter((item) => item > 0)
    .reduce((prev, curr) => (prev += +curr), 0)
    .toFixed(2);

  const expense = amounts
    .filter((item) => item < 0)
    .reduce((prev, curr) => (prev += +curr), 0)
    .toFixed(2);
  return (
    <>
      <div className="inc-exp-container">
        <div>
          <h4>Income</h4>
          <p className="money plus">${income}</p>
        </div>
        <div>
          <h4>Expense</h4>
          <p className="money minus">${expense}</p>
        </div>
      </div>
    </>
  );
};

export default IncomeExpenses;
