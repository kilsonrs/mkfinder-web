import React from 'react';
import { MdClose } from 'react-icons/md';
import IInvoice from '../../dtos/IInvoice';
import CopyToClipboard from '../CopyToClipboard';
import Modal from '../Modal';

import {
  Container,
  Description,
  InvoiceValue,
  TotalValue,
  PaidValue,
  DueDate,
  CPF,
  DigitableLine,
} from './styles';

interface IModalProps {
  isOpen: boolean;
  setIsOpen(): void;
  invoice: IInvoice;
}

const InvoiceModal: React.FC<IModalProps> = ({
  setIsOpen,
  isOpen,
  invoice,
}) => {
  const {
    cpf_cnpj,
    linhadig,
    datavencFormatted,
    descricao,
    valor,
    valorpag,
    datapag,
    status,
  } = invoice;
  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <Container status={status}>
        <Description>
          <p>{descricao}</p>
          <MdClose
            size={24}
            color="#c4c4c4"
            title="Fechar"
            onClick={setIsOpen}
          />
        </Description>
        <InvoiceValue>
          <TotalValue>
            <strong>{valor}</strong>
          </TotalValue>
          {valorpag && (
            <PaidValue>
              <small>Valor pago</small>
              <strong>{valorpag}</strong>
              <small>{datapag}</small>
            </PaidValue>
          )}
        </InvoiceValue>
        <section>
          <DueDate>
            <strong>{datavencFormatted}</strong>
            <small>Vencimento</small>
          </DueDate>
          <CPF>
            <CopyToClipboard title="CPF">
              <strong>{cpf_cnpj}</strong>
            </CopyToClipboard>
            <small>CPF</small>
          </CPF>
        </section>
        {!valorpag && (
          <DigitableLine>
            <CopyToClipboard title="Linha digitável">
              <p>{linhadig}</p>
            </CopyToClipboard>
            <small>Linha digitável</small>
          </DigitableLine>
        )}
      </Container>
    </Modal>
  );
};

export default InvoiceModal;
