import React, { useCallback, useState } from 'react';
import Customer from '../../modules/Customer';
import Header from '../../components/Header';
import Search from '../../components/Search';
import { Container } from './styles';
import api from '../../services/api';

import ICustomerDetails from '../../dtos/ICustomerDetails';

const Dashboard: React.FC = () => {
  const [customer, setCustomer] = useState<ICustomerDetails>();

  const handleCustomerSelect = useCallback(_customer => {
    const { login, company } = _customer;
    api
      .get(`/customer-details/${login}`, {
        params: {
          company,
        },
      })
      .then(response => setCustomer(response.data));
  }, []);

  return (
    <Container>
      <Header>
        <Search handleCustomerSelect={handleCustomerSelect} />
      </Header>
      {customer && <Customer customerDetails={customer} />}
    </Container>
  );
};

export default Dashboard;
