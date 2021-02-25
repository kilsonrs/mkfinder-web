import React from 'react';
import { MdSearch, MdPowerSettingsNew } from 'react-icons/md';
import { useHistory } from 'react-router-dom';

import { Container } from './styles';

const Header: React.FC = ({ children }) => {
  const history = useHistory();
  return (
    <Container>
      <button id="home" type="button" onClick={() => window.location.reload()}>
        <MdSearch size={24} color="#fff" />
        <h1>MK-Finder</h1>
      </button>
      {children}
      <button id="logout" type="button" onClick={() => history.push('/')}>
        <MdPowerSettingsNew size={24} color="#fff" />
      </button>
    </Container>
  );
};

export default Header;
