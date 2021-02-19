import React from 'react';
import { MdKeyboardArrowDown } from 'react-icons/md';
import Card from '../../../../components/Card';
import IConnection from '../../../../dtos/IConnection';

import { Container } from './styles';

interface ConnectionProps {
  connection: IConnection;
}

const Connection: React.FC<ConnectionProps> = ({ connection }) => {
  const { login, mac } = connection;
  return (
    <Container>
      <Card>
        <h1>CONEXÃO:</h1>
        <div id="login">
          <strong>{login}</strong>
          <small>LOGIN</small>
        </div>
        <div>
          <hr />
          <span>
            <p>{mac}</p>
            <button type="button">
              <MdKeyboardArrowDown size={24} color="#bbb" />
            </button>
          </span>
        </div>
      </Card>
    </Container>
  );
};

export default Connection;
