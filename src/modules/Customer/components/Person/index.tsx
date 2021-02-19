import React from 'react';
import { MdLaunch } from 'react-icons/md';
import StatusBadge from '../../../../components/StatusBadge';
import IProfile from '../../../../dtos/IProfile';

import { Container } from './styles';

interface PersonProps {
  profile: IProfile;
}

const Person: React.FC<PersonProps> = ({ profile }) => {
  const { status, nome, company, cpf_cnpj } = profile;
  return (
    <Container>
      <section id="customer">
        <h1>{nome}</h1>
        <span>
          <p>{company}</p>
          <MdLaunch size={16} color="#48BB78" />
        </span>
      </section>
      <span id="cpf">
        <p>CPF:</p>
        <strong>{cpf_cnpj}</strong>
      </span>
      <StatusBadge status={status} />
    </Container>
  );
};

export default Person;
