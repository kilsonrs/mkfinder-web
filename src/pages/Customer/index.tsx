import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { MdLaunch } from 'react-icons/md';

import { format, parseISO, isAfter, subMonths } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import parsePhoneNumber from 'libphonenumber-js';

import formatValue from '../../utils/formatValue';
import api from '../../services/api';

import StatusBadge from '../../components/StatusBadge';
import InvoiceTable from '../../components/InvoiceTable';

import IInvoice from '../../dtos/IInvoice';
import ICustomer from '../../dtos/ICustomer';
import ICustomerDetails from '../../dtos/ICustomerDetails';

import {
  Container,
  CustomerContent,
  LeftContent,
  StatusSection,
  PersonDataSection,
  Contact,
  Address,
  RightContent,
  ConnectionContent,
  BillingContent,
  InvoicesContent,
} from './styles';
import CopyToClipboard from '../../components/CopyToClipboard';

const Customer: React.FC = () => {
  const { state } = useLocation<ICustomer>();

  const [customer, setCustomer] = useState<ICustomerDetails[]>();
  const [invoices, setInvoices] = useState<IInvoice[]>();

  useEffect(() => {
    if (state) {
      const { login, company } = state;
      api
        .get(`/customer-details/${login}`, {
          params: {
            company,
          },
        })
        .then(response => {
          setCustomer(response.data.customer);
          setInvoices(response.data.invoices);
        });
    }
  }, [state]);

  const parseDate = (payload: string): string => {
    return format(parseISO(payload), 'dd/MM/yyyy', {
      locale: ptBR,
    });
  };

  const customerInvoices = useMemo(() => {
    if (invoices) {
      const lastFiveMonths = (data: string): boolean =>
        isAfter(parseISO(data), subMonths(Date.now(), 5));

      const parsedInvoices = invoices
        .filter(invoice => lastFiveMonths(invoice.datavenc))
        .map(invoice => ({
          ...invoice,
          datavencFormatted: parseDate(invoice.datavenc),
          processamento: parseDate(invoice.processamento),
          datapag: invoice.datapag && parseDate(invoice.datapag),
          valor: formatValue(invoice.valor),
          valorpag: invoice.valorpag && formatValue(invoice.valorpag),
          status: invoice.deltitulo === '1' ? 'removido' : invoice.status,
        }));

      return parsedInvoices.sort((invoiceA, invoiceB) => {
        const compareDates = isAfter(
          parseISO(invoiceA.datavenc),
          parseISO(invoiceB.datavenc),
        );
        if (compareDates) {
          return 1;
        }
        if (!compareDates) {
          return -1;
        }
        return 0;
      });
    }
    return null;
  }, [invoices]);

  const customerDetails = useMemo<ICustomerDetails[] | null>(() => {
    const parsePhone = (phone: string): string | undefined => {
      return parsePhoneNumber(phone, 'BR')?.formatNational();
    };
    if (customer) {
      return customer.map(data => ({
        ...data,
        data_bloq: data.data_bloq && parseDate(data.data_bloq),
        data_desativacao:
          data.data_desativacao && parseDate(data.data_desativacao),
        rem_obs: data.rem_obs && parseDate(data.rem_obs),
        fone: data.fone && parsePhone(data.fone),
        celular: data.celular && parsePhone(data.celular),
        celular2: data.celular2 && parsePhone(data.celular2),
        status: {
          isFree: data.isento === 'sim',
          isActive: data.cli_ativado === 's',
          deactivationDate: data.data_desativacao,
          isBlocked: data.bloqueado === 'sim',
          blockDate: data.data_bloq,
          inException: data.observacao === 'sim',
          exceptionUntil: data.rem_obs,
        },
      }));
    }
    return null;
  }, [customer]);

  const copyToClipboard = useCallback(el => {
    const text = el.target.innerText;
    return navigator.clipboard.writeText(text);
  }, []);

  return (
    <Container>
      {customerDetails &&
        customerDetails.map(item => (
          <CustomerContent key={item.uuid_cliente} onClick={copyToClipboard}>
            <LeftContent>
              <section>
                <h3>{item.nome}</h3>
                <button
                  type="button"
                  title={`Abrir no ${state.company.toLocaleUpperCase()}`}
                  onClick={
                    () =>
                      window.open(
                        `${state.url}/admin/cliente_alt.php?uuid=${state.uuid_cliente}`,
                      )
                    // eslint-disable-next-line react/jsx-curly-newline
                  }
                >
                  {state.company.toLocaleUpperCase()}
                  <MdLaunch cursor="pointer" size={16} color="#c0c0c0" />
                </button>
              </section>
              <StatusSection>
                <StatusBadge status={item.status} />
              </StatusSection>
              <PersonDataSection>
                <Contact>
                  <section>
                    <p>CPF:</p>
                    <CopyToClipboard title="CPF">
                      <strong>{item.cpf_cnpj}</strong>
                    </CopyToClipboard>
                  </section>
                  <small>{item.email}</small>
                  <p>{item.fone}</p>
                  <section>
                    <p>{item.celular}</p>
                    <p>{item.celular2}</p>
                  </section>
                </Contact>
                <Address>
                  <section>
                    <p>{`${item.endereco}, ${item.numero}`}</p>
                    <p>{item.bairro}</p>
                  </section>
                  <section>
                    <p>{`${item.cidade} - ${item.estado}`}</p>
                    <p>{item.cep}</p>
                  </section>
                </Address>
              </PersonDataSection>
            </LeftContent>

            <RightContent>
              <ConnectionContent>
                <section id="nas">
                  <p>{item.ramal}</p>
                  <small>Concentrador</small>
                </section>
                <section>
                  <CopyToClipboard title="Login">
                    <strong>{item.login}</strong>
                  </CopyToClipboard>
                  <span>{item.senha}</span>
                </section>
                <section>
                  <CopyToClipboard title="MAC">
                    <strong>{item.mac}</strong>
                  </CopyToClipboard>
                  <span>{item.chave}</span>
                </section>
              </ConnectionContent>
              <BillingContent>
                <section>
                  <p>Plano:</p>
                  <strong>{item.plano}</strong>
                </section>
                <section>
                  <p>Vencimento:</p>
                  <strong>{item.venc}</strong>
                </section>
              </BillingContent>
            </RightContent>
          </CustomerContent>
        ))}

      {customerInvoices && (
        <InvoicesContent>
          <a
            href={`${state.url}/admin/cliente_det.php?uuid=${state.uuid_cliente}`}
            target="_blank"
            rel="noreferrer"
            title={`Abrir no ${state.company.toLocaleUpperCase()}`}
          >
            <MdLaunch cursor="pointer" size={20} color="#c0c0c0" />
          </a>
          <InvoiceTable customerInvoices={customerInvoices} />
        </InvoicesContent>
      )}
    </Container>
  );
};

export default Customer;
