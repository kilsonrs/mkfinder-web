import React from 'react';
import { MdLaunch } from 'react-icons/md';
import Card from '../../../../components/Card';
import IAddress from '../../../../dtos/IAddress';

import { Container } from './styles';

interface AddressProps {
  address: IAddress;
}

const Address: React.FC<AddressProps> = ({ address }) => {
  const { endereco, numero, bairro, cidade, estado, cep } = address;
  return (
    <Container>
      <Card>
        <h1>ENDEREÇO:</h1>
        <section id="street">
          <div>
            <p>{`${endereco}, ${numero}`}</p>
            <small>{`${bairro}`}</small>
          </div>
        </section>
        <section id="city">
          <div>
            <p>{`${cidade}, ${estado}`}</p>
            <small>{`${cep}`}</small>
          </div>
          <button type="button">
            <MdLaunch
              size={24}
              color="#e0e0e0"
              onClick={() =>
                window.open(
                  `https://www.google.com/maps/search/?api=1&query=${endereco}, ${numero} ${cidade} ${estado}`,
                )
              }
            />
          </button>
        </section>
      </Card>
    </Container>
  );
};

export default Address;
