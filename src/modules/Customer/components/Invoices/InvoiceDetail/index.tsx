import React from 'react';
import Card from '../../../../../components/Card';
import CopyToClipboard from '../../../../../components/CopyToClipboard';

import { Container } from './styles';

interface InvoiceDetailProps {
  invoice: any;
}

const InvoiceDetail: React.FC<InvoiceDetailProps> = ({ invoice }) => {
  return (
    <Container status={invoice.status}>
      <Card>
        <section>
          <div id="due-date">
            <small>Vencimento</small>
            <p>{invoice.datavenc}</p>
          </div>
          <div id="processing-date">
            <small>Processamento</small>
            <p>{invoice.processamento}</p>
          </div>

          {invoice.valorpag ? (
            <div id="pay-value">
              <h1>{invoice.valorpag}</h1>
            </div>
          ) : (
            <div id="status">
              <h1>{invoice.status}</h1>
            </div>
          )}
        </section>
        <hr />
        <section>
          <div id="description">
            <small>Descrição</small>
            <h1>{invoice.descricao}</h1>
          </div>

          {invoice.status === 'pago' ? (
            <div id="payment-date">
              <small>Pagamento</small>
              <p>{invoice.datapag}</p>
            </div>
          ) : (
            <div id="digitable-line">
              <small>Linha digitável</small>
              <CopyToClipboard>
                <p>{invoice.linhadig}</p>
              </CopyToClipboard>
            </div>
          )}
        </section>
      </Card>
    </Container>
  );
};

export default InvoiceDetail;
