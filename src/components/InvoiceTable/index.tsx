import React, { TableHTMLAttributes, useState } from 'react';
import InvoiceModal from '../InvoiceModal';
import IInvoice from '../../dtos/IInvoice';
import { Container, Row } from './styles';

interface ITableProps extends TableHTMLAttributes<HTMLTableElement> {
  customerInvoices: IInvoice[];
}

const InvoiceTable: React.FC<ITableProps> = ({ customerInvoices }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [viewingInvoice, setViewingInvoice] = useState<IInvoice>(
    {} as IInvoice,
  );

  function handleViewInvoice(invoice: IInvoice): void {
    setViewingInvoice(invoice);
    toggleModal();
  }

  function toggleModal(): void {
    setModalOpen(!modalOpen);
  }
  return (
    <Container>
      <InvoiceModal
        isOpen={modalOpen}
        setIsOpen={toggleModal}
        invoice={viewingInvoice}
      />
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
          {customerInvoices.map(invoice => (
            <Row
              key={invoice.titulo}
              status={invoice.status}
              onClick={() => handleViewInvoice(invoice)}
            >
              <td>{invoice.titulo}</td>
              <td>{invoice.datavencFormatted}</td>
              <td>{invoice.valor}</td>
              <td>{invoice.processamento}</td>
              <td>{invoice.status}</td>
            </Row>
          ))}
        </tbody>
      </table>
    </Container>
  );
};

export default InvoiceTable;
