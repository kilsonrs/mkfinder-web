import styled from 'styled-components';

interface ContainerProps {
  status: string;
}

export const Container = styled.div<ContainerProps>`
  .card {
    margin-bottom: 16px;
    box-shadow: 0px 4px 7px -4px rgb(82 97 107 / 25%);
  }
  section {
    padding: 0;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
  }

  hr {
    border: 1px solid #eee;
    margin: 16px 0 8px;
  }

  p {
    font-size: 16px;
    margin: 0;
  }

  small {
    font-size: 12px;
  }

  section:nth-child(1) {
    background: transparent;
    justify-content: space-between;

    #due-date {
      p {
        margin: 0;
        color: #999;
        font-size: 14px;
      }

      small {
        margin: 0;
        color: #aaa;
      }
    }

    #processing-date {
      display: flex;
      flex-direction: column;
      align-items: center;
      p {
        margin: 0;
        color: #999;
        font-size: 14px;
      }

      small {
        margin: 0;
        color: #aaa;
      }
    }

    #pay-value {
      h1 {
        font-size: 24px;
      }
    }

    #status {
      border: 1px solid;
      border-color: ${props =>
        props.status === 'vencido' ? '#F44336' : '#9E9E9E'};
      border-radius: 4px;
      padding: 4px 16px;

      h1 {
        text-transform: capitalize;
        color: ${props => (props.status === 'vencido' ? '#F44336' : '#898989')};
      }
    }
  }

  section:nth-child(3) {
    background: transparent;
    justify-content: flex-start;

    #description {
      margin-right: auto;
      h1 {
        font-size: 16px;
        color: #999;
      }
      small {
        color: #aaa;
      }
    }

    #payment-date {
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      p {
        margin: 0;
      }
      small {
        color: #aaa;
      }
    }

    #digitable-line {
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      p {
        margin: 0;
        font-weight: 500;
        color: ${props => (props.status === 'vencido' ? '#FC8181' : '#a0aec0')};
        cursor: pointer;
      }
      small {
        color: #aaa;
      }
    }
  }
`;
