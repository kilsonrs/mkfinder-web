import React from 'react';
import Person from './components/Person';
import Contact from './components/Contact';
import Connection from './components/Connection';
import Address from './components/Address';
import Invoices from './components/Invoices';
import { Container, Content } from './styles';

import ICustomerDetails from '../../dtos/ICustomerDetails';

export interface CustomerProps {
  customerDetails: ICustomerDetails;
}

const Customer: React.FC<CustomerProps> = ({ customerDetails }) => {
  const { invoices, address, contact, profile, connection } = customerDetails;
  return (
    <Container>
      <Content>
        <Person profile={profile} />
        <Contact contact={contact} />
        <Connection connection={connection} />
        <Address address={address} />
        <Invoices invoices={invoices} />
      </Content>
    </Container>
  );
};

export default Customer;
