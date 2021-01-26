import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex: 1;

  table {
    width: 100%;
    table-layout: fixed;
    border-collapse: collapse;
  }
`;

export const Row = styled.tr`
  border-bottom: 1px solid #ddd;
  cursor: pointer;

  &:hover {
    background-color: #fff;
  }

  td {
    padding: 10px 0;
    font-size: 14px;
    text-align: left;
  }

  td.company {
    width: 10%;
    text-align: center;
    font-weight: 500;
  }

  td.name {
    width: 50%;
    text-align: left;
  }

  td.login {
    width: 30%;
  }

  td.mac {
    width: 10%;
    text-align: center;
  }
`;
