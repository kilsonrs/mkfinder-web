import styled from 'styled-components';

export const Container = styled.section`
  grid-area: address;

  div.card {
    height: 100%;
    max-height: 196px;
    padding: 0;
  }
  #map {
    height: 133px;
    background: #4299e1;
  }

  #address {
    margin: 12px 16px;
    display: flex;
    align-items: center;

    div {
      p {
        font-size: 16px;
      }

      small {
        font-size: 12px;
      }
    }

    button {
      display: flex;
      border: 0;
      background: transparent;
      margin-left: auto;
    }
  }
`;
