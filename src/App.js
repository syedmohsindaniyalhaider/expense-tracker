import "./App.css";
import AddTransaction from "./components/AddTransaction";
import Balance from "./components/Balance";
import IncomeExpenses from "./components/IncomeExpenses";
import Transaction from "./components/Transaction";
import ContextProvider from "./store/ContextProvider";

function App() {
  return (
    <ContextProvider>
      <p>Helping Tracker</p>
      <h2>Expense Tracker</h2>
      <div className="container">
        <Balance />
        <IncomeExpenses />
        <Transaction />
        <AddTransaction />
      </div>
    </ContextProvider>
  );
}

export default App;
