/* eslint-disable react/jsx-first-prop-new-line */
import React from 'react';
import { MdSearch } from 'react-icons/md';
import Lottie from 'react-lottie';
import { useHistory } from 'react-router-dom';
import animationData from '../../assets/lotties/laptop-working.json';
import { Container, LottieAnimation } from './styles';

const Start: React.FC = () => {
  const history = useHistory();

  const lottieOptions = {
    loop: true,
    autoplay: true,
    animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <Container>
      <section id="animation">
        <LottieAnimation>
          <Lottie
            options={lottieOptions}
            style={{ background: 'transparent' }}
            width={500}
            height={350}
          />
          <p>Facilitando seu trabalho...</p>
        </LottieAnimation>
        <cite>
          Lottie made by
          <a
            href="https://lottiefiles.com/43885-laptop-working"
            target="_blank"
            rel="noreferrer"
          >
            Hadi Firmansyah
          </a>
        </cite>
      </section>
      <section id="logon">
        <span>
          <MdSearch size={56} color="#fff" />
          <h1>MK-Finder</h1>
        </span>

        <button type="button" onClick={() => history.push('/dashboard')}>
          Entrar
        </button>
      </section>
    </Container>
  );
};

export default Start;
