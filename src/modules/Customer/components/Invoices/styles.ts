import styled from 'styled-components';

interface InvoiceProps {
  status: string;
}

export const Container = styled.section`
  grid-area: invoices;
  background: #f6f6f6;
`;

export const InvoiceItem = styled.article<InvoiceProps>`
  #invoice-row-content,
  section {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left: 8px;
    border-bottom: 1px solid #fff;

    p {
      margin: 8px 0;
    }
    button {
      display: flex;
      align-items: center;
      justify-content: flex-end;
      border: 0;
      background: transparent;
      width: 64px;
      padding: 8px 8px 8px 0;

      #status {
        margin-right: 16px;
      }
      #action {
        margin-right: 0;
      }
    }

    background-color: ${props => {
      if (props.status === 'vencido') {
        return '#fffcfc';
      }
      if (props.status === 'aberto') {
        return '#fff';
      }
      if (props.status === 'pago') {
        return '#f8fcfc';
      }
      return '#FFF';
    }};

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

  #invoice-row-content:hover {
    background-color: ${props => {
      if (props.status === 'vencido') {
        return '#ffebee';
      }
      if (props.status === 'aberto') {
        return '#eee';
      }
      if (props.status === 'pago') {
        return '#e0f2f1';
      }
      return '#f7f7f7';
    }};
  }
`;
