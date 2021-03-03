import styled from 'styled-components';

export const Container = styled.section`
  grid-area: contact;

  div.card {
    height: 100%;
    max-height: 220px;
    display: grid;
    grid-template-columns: 1fr 3fr;
    grid-template-rows: 1fr 1fr 1fr;
    grid-template-areas:
      'title title'
      'mailKey mailValue'
      'foneKey foneValue';
  }

  h1 {
    grid-area: title;
    color: #bdbdbd;
    font-size: 12px;
    margin-bottom: 24px;
  }

  li,
  p {
    font-size: 14px;
  }

  li {
    list-style: none;
    margin-bottom: 2px;
  }

  #mail-key {
    grid-area: mailKey;
    justify-self: right;
    margin-right: 8px;
    color: #bdbdbd;
  }

  #fone-key {
    grid-area: foneKey;
    justify-self: right;
    margin-right: 8px;
    margin-bottom: 54px;
    color: #bdbdbd;
  }

  #mail-value {
    grid-area: mailValue;
    align-self: flex-start;
    font-size: 14px;
    color: #9e9e9e;
    margin-bottom: 8px;
  }

  #fone-value {
    grid-area: foneValue;
    color: #9e9e9e;
  }
`;
