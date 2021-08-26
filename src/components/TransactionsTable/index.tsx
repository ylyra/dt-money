import { Container } from "./styles";

export function TransactionsTable() {
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
          <tr>
            <td>Desenvolvimento de website</td>
            <td className="deposit">R$ 12000,00</td>
            <td>Entrada</td>
            <td>15/01/2021</td>
          </tr>
          <tr>
            <td>Desenvolvimento de website</td>
            <td>R$ 12000,00</td>
            <td>Entrada</td>
            <td>15/01/2021</td>
          </tr>
          <tr>
            <td>Desenvolvimento de website</td>
            <td className="withdraw">- R$ 12000,00</td>
            <td>Entrada</td>
            <td>15/01/2021</td>
          </tr>
          <tr>
            <td>Desenvolvimento de website</td>
            <td>R$ 12000,00</td>
            <td>Entrada</td>
            <td>15/01/2021</td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
}
