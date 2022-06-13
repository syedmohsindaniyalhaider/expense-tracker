const TransactionReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TRANSACTION":
      return {
        ...state,
        transactions: [...state.transactions, action.payload],
      };
    case "REMOVE_TRANSACTION":
      const updatedItems = state.transactions.filter(
        (item) => item.id !== action.payload
      );
      return {
        ...state,
        transactions: updatedItems,
      };
    default:
      return state;
  }
};

export default TransactionReducer;
