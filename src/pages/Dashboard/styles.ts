import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 16px;
  min-height: 100vh;
`;

export const LottieAnimation = styled.div`
  background: linear-gradient(180deg, #ffffff 75%, #d6efff 100%);
  width: 100%;
  min-height: calc(100vh - 72px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;

  p {
    font-size: 24px;
    margin-top: 24px;
    color: #a0a0a0;
  }

  cite {
    position: absolute;
    bottom: 0;
    left: 16px;
    font-size: 10px;

    a {
      text-decoration: none;
      margin: 0 4px;
      color: #4299e1;
    }
  }
`;
