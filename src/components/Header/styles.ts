import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  justify-content: center;
  height: 56px;
  width: 100%;
  box-shadow: 0px 5px 4px -5px #4299e1;
  background: #4299e1;
  position: relative;
  z-index: 1;

  #home {
    border: 0;
    background: transparent;

    display: flex;
    position: absolute;
    left: 14px;
    top: 16px;
    h1 {
      margin-left: 4px;
      font-size: 18px;
      font-weight: 400;
      color: #fff;
    }
  }

  #logout {
    border: 0;
    background: transparent;

    display: flex;
    flex-direction: column;
    align-items: center;
    position: absolute;
    right: 14px;
    top: 16px;
  }
`;
