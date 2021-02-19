import styled from 'styled-components';

export const Container = styled.section`
  grid-area: contact;

  div.card {
    height: 100%;
    max-height: 196px;
    display: grid;
    grid-template-columns: 1fr 3fr;
    grid-template-rows: 1fr 2fr 1fr;
    grid-template-areas:
      'title title'
      'mailKey mailValue'
      'foneKey foneValue';
  }

  h1 {
    grid-area: title;
    color: #bbb;
    font-size: 12px;
  }

  li,
  p {
    font-size: 14px;
  }

  li {
    list-style: none;
    margin-bottom: 8px;
  }

  #mail-key {
    grid-area: mailKey;
    justify-self: right;
    align-self: center;
    margin-right: 8px;
  }

  #fone-key {
    grid-area: foneKey;
    justify-self: right;
    margin-right: 8px;
  }

  #mail-value {
    grid-area: mailValue;
    align-self: center;
    font-size: 16px;
  }

  #fone-value {
    grid-area: foneValue;
  }
`;
