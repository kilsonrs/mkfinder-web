import React from 'react';
import Card from '../../../../components/Card';
import IContact from '../../../../dtos/IContact';

import { Container } from './styles';

interface ContactProps {
  contact: IContact;
}

const Contact: React.FC<ContactProps> = ({ contact }) => {
  const { email, fone, celular, celular2 } = contact;
  return (
    <Container>
      <Card>
        <h1>CONTATO:</h1>

        <p id="mail-key">E-mail:</p>
        <p id="mail-value">{email}</p>

        <p id="fone-key">Fone:</p>
        <ul id="fone-value">
          <li>{fone}</li>
          <li>{celular}</li>
          <li>{celular2}</li>
        </ul>
      </Card>
    </Container>
  );
};

export default Contact;
