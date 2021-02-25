import React, { useCallback, useMemo, useState } from 'react';
import {
  MdCheckCircle,
  MdHighlightOff,
  MdKeyboardArrowDown,
  MdKeyboardArrowUp,
} from 'react-icons/md';

import Card from '../../../../components/Card';
import IInvoice from '../../../../dtos/IInvoice';
import formatValue from '../../../../utils/formatValue';
import parseDate from '../../../../utils/parseDate';
import InvoiceDetail from './InvoiceDetail';

import { Container, InvoiceItem } from './styles';

interface InvoicesProps {
  invoices: IInvoice[];
}

const Invoices: React.FC<InvoicesProps> = ({ invoices }) => {
  const [invoiceActive, setInvoiceActive] = useState<IInvoice | null>(null);

  const toggleActiveInvoice = useCallback(
    invoice => {
      if (invoice.uuid_lanc === invoiceActive?.uuid_lanc) {
        return setInvoiceActive(null);
      }
      return setInvoiceActive(invoice);
    },
    [invoiceActive],
  );

  const invoiceList = useMemo(() => {
    if (!invoices) {
      return null;
    }
    return invoices.map(invoice => ({
      ...invoice,
      valor: formatValue(invoice.valor),
      valorpag: !!invoice.valorpag && formatValue(invoice.valorpag),
      processamento:
        !!invoice.processamento && parseDate(invoice.processamento),
      datavenc: parseDate(invoice.datavenc),
      datapag: !!invoice.datapag && parseDate(invoice.datapag),
    }));
  }, [invoices]);

  return (
    <Container>
      <Card>
        {invoiceList &&
          invoiceList.map(invoice => (
            <InvoiceItem key={invoice.uuid_lanc} status={invoice.status}>
              <section id="invoice-row-content">
                <p>{invoice.titulo}</p>
                <p>{invoice.datavenc}</p>
                <p>{invoice.valor}</p>

                <button
                  type="button"
                  onClick={() => toggleActiveInvoice(invoice)}
                >
                  <div id="status">
                    {invoice.status === 'pago' && (
                      <MdCheckCircle size={18} color="#009688" />
                    )}
                    {invoice.status === 'vencido' && (
                      <MdHighlightOff size={18} color="#F44336" />
                    )}
                  </div>
                  <div id="action">
                    {invoiceActive?.uuid_lanc === invoice.uuid_lanc ? (
                      <MdKeyboardArrowUp size={18} color="#bbb" />
                    ) : (
                      <MdKeyboardArrowDown size={18} color="#bbb" />
                    )}
                  </div>
                </button>
              </section>
              {invoiceActive?.uuid_lanc === invoice.uuid_lanc && (
                <InvoiceDetail
                  key={invoiceActive.uuid_lanc}
                  invoice={invoice}
                />
              )}
            </InvoiceItem>
          ))}
      </Card>
    </Container>
  );
};

export default Invoices;
