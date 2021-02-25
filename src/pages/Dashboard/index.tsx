import React, { useCallback, useState } from 'react';
import Lottie from 'react-lottie';

import api from '../../services/api';

import Customer from '../../modules/Customer';
import Header from '../../components/Header';
import Search from '../../components/Search';

import animationData from '../../assets/lotties/search_lottie.json';

import ICustomerDetails from '../../dtos/ICustomerDetails';

import { Container, LottieAnimation } from './styles';

const Dashboard: React.FC = () => {
  const [customer, setCustomer] = useState<ICustomerDetails>();

  const lottieOptions = {
    loop: true,
    autoplay: true,
    animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

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
      {customer ? (
        <Customer customerDetails={customer} />
      ) : (
        <LottieAnimation>
          <Lottie
            options={lottieOptions}
            style={{ background: 'transparent' }}
            width={300}
            height={300}
          />
          <p>Começe fazendo uma pesquisa</p>
          <cite>
            Lottie made by
            <a
              href="https://lottiefiles.com/49993-search"
              target="_blank"
              rel="noreferrer"
            >
              Ramesh Chintu
            </a>
          </cite>
        </LottieAnimation>
      )}
    </Container>
  );
};

export default Dashboard;
