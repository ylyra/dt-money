import { Container } from "./styles";

import { useTransaction } from "hooks/useTransactions";
import { formatPrice } from "utils/format";

import incomeImg from "assets/income.svg";
import outcomeImg from "assets/outcome.svg";
import totalImg from "assets/total.svg";

export function Summary() {
  const { transactions } = useTransaction();

  const summary = transactions.reduce(
    (acc, transaction) => {
      if (transaction.type === "deposit") {
        acc.deposits += transaction.amount;
        acc.total += transaction.amount;
      } else {
        acc.withdraws += transaction.amount;
        acc.total -= transaction.amount;
      }

      return acc;
    },
    {
      deposits: 0,
      withdraws: 0,
      total: 0,
    }
  );

  return (
    <Container>
      <section>
        <header>
          <p>Entradas</p>
          <img src={incomeImg} alt="Income money" />
        </header>
        <strong>{formatPrice(summary.deposits)}</strong>
      </section>

      <section>
        <header>
          <p>Saídas</p>
          <img src={outcomeImg} alt="Outcome money" />
        </header>
        <strong>- {formatPrice(summary.withdraws)}</strong>
      </section>

      <section className="highlight-background">
        <header>
          <p>Entradas</p>
          <img src={totalImg} alt="Total remaining money" />
        </header>
        <strong>{formatPrice(summary.total)}</strong>
      </section>
    </Container>
  );
}
