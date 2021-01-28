import React, { useCallback, useEffect, useState } from 'react';
import { MdSearch } from 'react-icons/md';
import { useHistory } from 'react-router-dom';

import api from '../../services/api';
import CustomerTable from '../../components/CustomerTable';

import { Container, Search, Content } from './styles';
import { isMac } from '../../utils/typeCheck';
import ICustomer from '../../dtos/ICustomer';

const Dashboard: React.FC = () => {
  const [customers, setCustomers] = useState<ICustomer[]>([]);

  const [searchInput, setSearchInput] = useState('');
  const [searchType, setSearchType] = useState('');

  const history = useHistory();

  useEffect(() => {
    if (!searchInput) {
      return;
    }
    api
      .get('/customers', {
        params: {
          [searchType]: searchInput,
        },
      })
      .then(response => {
        setCustomers(response.data);
      });
  }, [searchInput, searchType]);

  const handleInputChange = useCallback(input => {
    if (input.key === 'Enter') {
      const inputValue = input.target.value;
      if (isMac(inputValue)) {
        setSearchType('mac');
      } else {
        setSearchType('nome');
      }
      setSearchInput(inputValue);
    }
  }, []);

  const handleViewCustomer = useCallback(
    customer => {
      history.push(`/customer`, customer);
    },
    [history],
  );

  return (
    <>
      <Container>
        <Search>
          <MdSearch size={20} color="#bdbcbc" />
          <input
            type="text"
            placeholder="Pesquise por Nome ou Mac"
            onKeyPress={handleInputChange}
          />
        </Search>
        <Content>
          {customers && (
            <CustomerTable
              customers={customers}
              handleViewCustomer={handleViewCustomer}
            />
          )}
        </Content>
      </Container>
    </>
  );
};

export default Dashboard;
