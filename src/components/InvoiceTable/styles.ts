import styled from 'styled-components';

interface InvoiceProps {
  status: string;
}

export const Container = styled.div`
  padding-right: 24px;

  table {
    width: 100%;
    table-layout: fixed;
    border-collapse: collapse;

    th {
      padding: 16px 0;
      font-size: 16px;
      text-align: center;
      font-weight: 500;
    }

    th.titulo {
      width: 8%;
    }
    th.vencimento {
      width: 20%;
    }
    th.valor {
      width: 8%;
    }
    th.processamento {
      width: 20%;
    }
    th.status {
      width: 10%;
    }

    tr {
      border-bottom: 1px solid #ddd;
      cursor: pointer;
    }

    td {
      padding: 8px 0;
      font-size: 12px;
      text-align: center;
    }
  }
`;

export const Row = styled.tr<InvoiceProps>`
  background-color: ${props => {
    if (props.status === 'vencido') {
      return '#FFEBEE';
    }
    if (props.status === 'aberto') {
      return '#fff';
    }
    if (props.status === 'pago') {
      return '#E0F2F1';
    }
    return '#FFF';
  }};

  &:hover {
    background-color: ${props => {
      if (props.status === 'vencido') {
        return '#FFCDD2';
      }
      if (props.status === 'aberto') {
        return '#eee';
      }
      if (props.status === 'pago') {
        return '#B2DFDB';
      }
      return '#f7f7f7';
    }};
  }
  td {
    color: ${props => {
      if (props.status === 'vencido') {
        return '#F44336';
      }
      if (props.status === 'aberto') {
        return '#444';
      }
      if (props.status === 'pago') {
        return '#009688';
      }
      return '#9E9E9E';
    }};
  }
`;
