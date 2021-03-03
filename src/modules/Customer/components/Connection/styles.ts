import styled from 'styled-components';

export const Container = styled.section`
  grid-area: connection;

  div.card {
    height: 100%;
    max-height: 222px;
    display: grid;
    grid-template-columns: 1fr 3fr;
    grid-template-rows: 1fr 1fr 1fr 1fr 0fr 0fr;
    grid-template-areas:
      'title title'
      'nasKey nasValue'
      'loginKey loginValue'
      'passwordKey passwordValue'
      'macKey macValue'
      'wpaKey wpaValue';
  }

  h1 {
    grid-area: title;
    color: #bdbdbd;
    font-size: 12px;
    margin-bottom: 30px;
  }

  p {
    font-size: 14px;
    align-self: center;
  }

  #login-key {
    grid-area: loginKey;
    justify-self: right;
    margin-right: 8px;
    color: #bdbdbd;
  }

  #password-key {
    grid-area: passwordKey;
    justify-self: right;
    align-self: flex-start;
    margin-right: 8px;
    color: #bdbdbd;
  }

  #nas-key {
    grid-area: nasKey;
    justify-self: right;
    align-self: center;
    margin-right: 8px;
    color: #bdbdbd;
  }

  #mac-key {
    grid-area: macKey;
    justify-self: right;
    align-self: center;
    margin-right: 8px;
    color: #bdbdbd;
  }

  #wpa-key {
    grid-area: wpaKey;
    justify-self: right;
    align-self: flex-start;
    margin-top: 6px;
    margin-right: 8px;
    color: #bdbdbd;
  }

  #login-value {
    grid-area: loginValue;
    justify-self: left;
    font-size: 16px;
    color: #757575;
    cursor: pointer;
  }

  #password-value {
    grid-area: passwordValue;
    justify-self: left;
    align-self: flex-start;
    color: #bdbdbd;
  }

  #nas-value {
    grid-area: nasValue;
    justify-self: left;
    align-self: center;
    color: #bdbdbd;
  }

  #mac-value {
    grid-area: macValue;
    justify-self: left;
    align-self: center;
    font-size: 16px;
    color: #757575;
    cursor: pointer;
  }

  #wpa-value {
    grid-area: wpaValue;
    justify-self: left;
    align-self: flex-start;
    margin-top: 6px;
    color: #bdbdbd;
  }
`;
