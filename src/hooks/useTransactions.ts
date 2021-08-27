import { useContext } from "react";

import { TransactionsContext } from "contexts/TransactionsContext";

export function useTransaction() {
  const transactions = useContext(TransactionsContext);
  return transactions;
}
