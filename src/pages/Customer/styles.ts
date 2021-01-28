import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  padding: 32px;
`;

export const CustomerContent = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  margin-bottom: 32px;
`;

export const LeftContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #fff;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
  border-radius: 4px;
  width: 544px;
  height: 281px;
  padding: 32px;

  button {
    display: flex;
    align-items: center;
    border: 0;
    background: #fff;
    color: #9e9e9e;
    font-weight: 400;
    font-size: 15px;

    svg {
      margin-left: 4px;
    }
  }

  h3 {
    font-size: 24px;
    font-weight: 400;
  }
`;

export const StatusSection = styled.div`
  align-items: flex-start;
  justify-content: flex-start;
`;

export const PersonDataSection = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Contact = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  section {
    display: flex;
    flex-direction: row;
    align-items: baseline;

    p:first-child {
      margin: 0 6px 0 0;
    }

    strong {
      font-size: 12px;
      font-weight: bold;
      cursor: pointer;
    }
  }

  p:first-child {
    margin-bottom: 6px;
  }
  small {
    font-size: 12px;
    margin-bottom: 12px;
  }
`;

export const Address = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-left: 1px solid #aeaeae;

  section {
    margin-left: 32px;
  }

  section:first-child {
    margin-bottom: 16px;
  }

  p:first-child {
    margin-bottom: 4px;
  }

  span {
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  svg {
    margin-left: 6px;
  }
`;

export const RightContent = styled.div`
  flex: 1;
  margin-left: 32px;
`;

export const ConnectionContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #fff;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
  border-radius: 4px;
  width: 544px;
  height: 186px;
  margin-bottom: 32px;
  padding: 32px;

  section:first-child {
    margin: 0;
  }

  section {
    display: flex;
    flex-direction: column;
    align-items: baseline;
    margin-top: 8px;
  }

  p {
    font-size: 14px;
  }

  strong {
    font-size: 16px;
    font-weight: 500;
    cursor: pointer;
  }

  small {
    font-size: 12px;
    color: #8b8b8b;
  }

  span {
    font-size: 12px;
    color: #8b8b8b;
  }
`;

export const BillingContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
  border-radius: 4px;
  width: 544px;
  height: 61px;
  padding: 0 32px;
  section {
    display: flex;
    flex-direction: row;
    align-items: center;

    p {
      margin-right: 6px;
    }

    strong {
      font-size: 14px;
      font-weight: 600;
    }
  }
`;

export const InvoicesContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  background-color: #fff;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
  border-radius: 4px;
  width: 1120px;
  padding: 8px 8px 32px 32px;
  margin-bottom: 32px;
`;
