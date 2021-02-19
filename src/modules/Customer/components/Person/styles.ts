import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  padding: 20px;
  background: #fff;
  height: 196px;

  grid-area: person;

  h1 {
    font-size: 24px;
    font-weight: 500;
  }

  #customer {
    display: flex;
    align-items: baseline;
    margin-top: 4px;

    span {
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
    p,
    strong {
      font-size: 16px;
    }

    strong {
      margin-left: 4px;
      font-weight: 600;
    }
  }

  .statusBadge {
    margin-top: 56px;
  }
`;
