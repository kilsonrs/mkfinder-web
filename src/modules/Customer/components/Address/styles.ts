import styled from 'styled-components';

export const Container = styled.section`
  grid-area: address;

  div.card {
    height: 100%;
    max-height: 220px;
    padding: 16px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  h1 {
    font-size: 12px;
    color: #bdbdbd;
  }

  section {
    display: flex;
    align-items: center;
  }

  #street {
    p {
      font-size: 16px;
      color: #757575;
    }

    small {
      font-size: 12px;
      color: #bdbdbd;
    }
  }

  #city {
    p {
      font-size: 14px;
      color: #9e9e9e;
    }

    small {
      font-size: 12px;
      color: #bdbdbd;
    }

    button {
      display: flex;
      border: 0;
      background: transparent;
      margin-left: auto;
    }
  }
`;
