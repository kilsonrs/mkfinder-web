import React, { useCallback, useState } from 'react';
import Lottie from 'react-lottie';
import Loading from 'react-loading';

import api from '../../services/api';

import Customer from '../../modules/Customer';
import Header from '../../components/Header';
import Search from '../../components/Search';

import animationData from '../../assets/lotties/search_lottie.json';

import ICustomerDetails from '../../dtos/ICustomerDetails';

import { Container, LottieAnimation } from './styles';

const Dashboard: React.FC = () => {
  const [customer, setCustomer] = useState<ICustomerDetails>();
  const [isLoading, setIsLoading] = useState(false);

  const lottieOptions = {
    loop: true,
    animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  const handleCustomerSelect = useCallback(async _customer => {
    const { login, company } = _customer;
    setIsLoading(true);
    await api
      .get(`/customer-details/${login}`, {
        params: {
          company,
        },
      })
      .then(response => setCustomer(response.data));
    setIsLoading(false);
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
          {isLoading ? (
            <>
              <Loading
                type="bubbles"
                color="#a9ceec"
                width={200}
                height={300}
              />

              <p>Buscando dados...</p>
            </>
          ) : (
            <>
              <Lottie
                options={lottieOptions}
                style={{ background: 'transparent' }}
                width={300}
                height={300}
              />
              <p>Começe fazendo uma pesquisa</p>
            </>
          )}

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
