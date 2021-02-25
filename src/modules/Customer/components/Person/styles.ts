import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  padding: 20px;
  background: #fff;
  box-shadow: 0px 5px 4px -4px rgb(187 187 187 / 50%);

  grid-area: person;

  h1 {
    font-size: 24px;
    font-weight: 500;
    color: #718096;
  }

  #customer {
    display: flex;
    align-items: baseline;
    margin-top: 4px;

    button {
      border: 0;
      background: transparent;
      display: flex;
      align-items: center;
      margin-left: auto;
      cursor: pointer;

      p {
        font-size: 14px;
        color: #48bb78;
        text-transform: uppercase;
      }

      svg {
        margin-left: 4px;
      }
    }
  }

  #cpf {
    margin-top: 4px;
    display: flex;

    p {
      font-size: 16px;
      font-weight: 400;
      color: #bdbdbd;
    }

    strong {
      margin-left: 4px;
      font-size: 16px;
      font-weight: 500;
      color: #9e9e9e;
      cursor: pointer;
    }
  }

  .statusBadge {
    margin-top: 72px;
  }
`;
