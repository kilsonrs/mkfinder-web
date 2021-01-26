import styled from 'styled-components';

interface ContainerProps {
  status: string;
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 520px;

  section {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 36px;
  }

  small {
    font-size: 12px;
    font-weight: 400;
    color: #9e9e9e;
  }

  strong {
    font-size: 18px;
    font-weight: 500;
    color: ${props => {
      if (props.status === 'vencido') {
        return '#F44336';
      }
      if (props.status === 'pago') {
        return '#009688';
      }
      return '#424242';
    }};
  }

  p {
    font-size: 18px;
    font-weight: 400;
    color: #616161;
  }
`;

export const Description = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 36px;

  svg {
    cursor: pointer;
  }
`;

export const InvoiceValue = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 54px;
`;

export const TotalValue = styled.div`
  strong {
    font-size: 32px;
  }
`;

export const PaidValue = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  strong {
    font-size: 32px;
  }
  small {
    color: #009688;
  }
`;

export const DueDate = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CPF = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  strong {
    color: #424242;
    cursor: pointer;
  }
`;

export const DigitableLine = styled.div`
  display: flex;
  flex-direction: column;

  p {
    font-size: 16px;
    cursor: pointer;
  }
`;
