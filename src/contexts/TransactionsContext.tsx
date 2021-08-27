import { createContext, ReactNode, useEffect, useState } from "react";

import api from "services/api";

type Transaction = {
  id: number | string;
  title: string;
  amount: number;
  type: string;
  category: string;
  createdAt: number;
};

type TransactionsContextProps = {
  transactions: Transaction[];
  createTransaction: (transaction: Omit<Transaction, "id">) => Promise<void>;
};

type TransactionsProviderProps = {
  children: ReactNode;
};

export const TransactionsContext = createContext(
  {} as TransactionsContextProps
);

export function TransactionsProvider({ children }: TransactionsProviderProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  async function createTransaction(transaction: Omit<Transaction, "id">) {
    try {
      const response = await api.post("transactions", transaction);
      setTransactions((oldVersion) => [
        ...oldVersion,
        response.data.transaction,
      ]);
    } catch (error) {}
  }

  useEffect(() => {
    async function loadData() {
      try {
        const response = await api.get("transactions");
        setTransactions(response.data.transactions);
      } catch (error) {}
    }
    loadData();
  }, []);

  const transactionsValues = {
    transactions,

    createTransaction,
  };

  return (
    <TransactionsContext.Provider value={transactionsValues}>
      {children}
    </TransactionsContext.Provider>
  );
}
