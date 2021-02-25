import styled from 'styled-components';

export const Container = styled.main`
  display: flex;
  justify-content: center;
  width: 100%;
`;

export const Content = styled.article`
  margin-top: 16px;
  height: 100%;
  width: 100%;
  max-width: 1024px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-areas:
    'person person person'
    'contact connection address'
    'invoices invoices invoices';

  grid-gap: 16px;
`;
