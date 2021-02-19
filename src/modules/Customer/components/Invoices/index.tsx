import React from 'react';
import Card from '../../../../components/Card';
import IInvoice from '../../../../dtos/IInvoice';
import { Container, Row } from './styles';

interface InvoicesProps {
  invoices: IInvoice[];
}

const Invoices: React.FC<InvoicesProps> = ({ invoices }) => {
  return (
    <Container>
      <Card>
        <table>
          <thead>
            <tr>
              <th className="titulo">Título</th>
              <th className="vencimento">Vencimento</th>
              <th className="valor">Valor</th>
              <th className="processamento">Processamento</th>
              <th className="status">Status</th>
            </tr>
          </thead>
          <tbody>
            {invoices.map(invoice => (
              <Row key={invoice.titulo} status={invoice.status}>
                <td>{invoice.titulo}</td>
                <td>{invoice.datavenc}</td>
                <td>{invoice.valor}</td>
                <td>{invoice.processamento}</td>
                <td>{invoice.status}</td>
              </Row>
            ))}
          </tbody>
        </table>
      </Card>
    </Container>
  );
};

export default Invoices;
