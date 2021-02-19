import React from 'react';
import { MdLaunch } from 'react-icons/md';
import Card from '../../../../components/Card';
import IAddress from '../../../../dtos/IAddress';

import { Container } from './styles';

interface AddressProps {
  address: IAddress;
}

const Address: React.FC<AddressProps> = ({ address }) => {
  const { endereco, numero, bairro, cidade, estado } = address;
  return (
    <Container>
      <Card>
        <section id="map">
          <iframe
            title="mapa"
            width="332"
            height="136"
            frameBorder="0"
            scrolling="no"
            marginHeight={0}
            marginWidth={0}
            src="https://www.openstreetmap.org/export/embed.html?bbox=-48.32297801971436%2C-21.25709651763103%2C-48.318922519683845%2C-21.253156907039145&amp;layer=mapnik"
            style={{ border: 0 }}
          />
        </section>
        <section id="address">
          <div>
            <p>{`${endereco}, ${numero}`}</p>
            <small>{`${bairro}, ${cidade} - ${estado}`}</small>
          </div>
          <button type="button">
            <MdLaunch size={24} color="#eee" />
          </button>
        </section>
      </Card>
    </Container>
  );
};

export default Address;
