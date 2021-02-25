import React from 'react';
import Card from '../../../../components/Card';
import CopyToClipboard from '../../../../components/CopyToClipboard';
import IConnection from '../../../../dtos/IConnection';

import { Container } from './styles';

interface ConnectionProps {
  connection: IConnection;
}

const Connection: React.FC<ConnectionProps> = ({ connection }) => {
  const { login, mac, senha, chave } = connection;
  return (
    <Container>
      <Card>
        <h1>CONEXÃO:</h1>

        {/* keys */}

        <p id="login-key">Login:</p>
        <p id="password-key">Password:</p>
        <p id="mac-key">Mac:</p>
        <p id="wpa-key">WPA Key:</p>

        {/* values */}

        <p id="login-value">{login}</p>
        <p id="password-value">{senha}</p>
        <CopyToClipboard>
          <p id="mac-value">{mac}</p>
        </CopyToClipboard>
        <p id="wpa-value">{chave}</p>
      </Card>
    </Container>
  );
};

export default Connection;
