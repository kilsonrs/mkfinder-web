import styled from 'styled-components';

export const Container = styled.section`
  grid-area: connection;

  div.card {
    height: 100%;
    max-height: 196px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    h1 {
      font-size: 12px;
      color: #bbb;
    }

    hr {
      border: 1px solid #eee;
    }

    span {
      display: flex;
      align-items: center;

      p {
        font-size: 16px;
        text-transform: uppercase;
      }
      button {
        margin: 0 0 0 auto;
        border: 0;
        padding: 8px;
        display: flex;
        background: #fff;
      }
    }
    #login {
      display: flex;
      flex-direction: column;

      strong {
        font-size: 20px;
        font-weight: 500;
      }
    }
  }
`;
