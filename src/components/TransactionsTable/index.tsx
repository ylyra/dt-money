import { format } from "date-fns";

import { formatPrice } from "utils/format";

import { Container } from "./styles";
import { useTransaction } from "hooks/useTransactions";

export function TransactionsTable() {
  const { transactions } = useTransaction();

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>

        <tbody>
          {transactions.map((transaction) => (
            <tr key={transaction.id}>
              <td>{transaction.title}</td>
              <td className={transaction.type}>
                {formatPrice(transaction.amount)}
              </td>
              <td>{transaction.category}</td>
              <td>{format(new Date(transaction.createdAt), "dd/MM/yyyy")}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Container>
  );
}
