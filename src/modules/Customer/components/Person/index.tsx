import React from 'react';
import { MdLaunch } from 'react-icons/md';
import CopyToClipboard from '../../../../components/CopyToClipboard';
import StatusBadge from '../../../../components/StatusBadge';
import IPerson from '../../../../dtos/IPerson';

import { Container } from './styles';

interface PersonProps {
  person: IPerson;
}

const Person: React.FC<PersonProps> = ({ person }) => {
  const { status, nome, company, cpf_cnpj, url, uuid_cliente } = person;
  return (
    <Container>
      <section id="customer">
        <h1>{nome}</h1>
        <button
          type="button"
          onClick={() =>
            window.open(`${url}/admin/cliente_alt.php?uuid=${uuid_cliente}`)
          }
        >
          <p>{`sistema - ${company}`}</p>
          <MdLaunch size={16} color="#48BB78" />
        </button>
      </section>
      <span id="cpf">
        <p>CPF:</p>
        <CopyToClipboard>
          <strong>{cpf_cnpj}</strong>
        </CopyToClipboard>
      </span>
      <StatusBadge status={status} />
    </Container>
  );
};

export default Person;
