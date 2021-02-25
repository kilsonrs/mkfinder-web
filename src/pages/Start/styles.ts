import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  height: 100vh;

  background: #4299e1;

  #animation {
    display: flex;
    flex: 1;
    flex-direction: column;
    position: relative;

    cite {
      margin: 4px;
      position: absolute;
      bottom: 0;
      font-size: 10px;

      a {
        text-decoration: none;
        margin: 0 4px;
        color: #4299e1;
      }
    }
  }

  #logon {
    flex: 1;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;
    span {
      display: flex;
      align-items: center;

      h1 {
        font-size: 56px;
        margin-left: 4px;
        font-weight: 300;
        color: #fff;
      }
    }

    button {
      border: 0;
      border-radius: 4px;
      width: 300px;
      padding: 16px;
      font-size: 24px;
      background: #fff;
      color: #4299e1;

      &:hover {
        background: #dcefff;
      }
    }
  }
`;

export const LottieAnimation = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #fff;

  p {
    font-size: 24px;
    margin-top: 16px;
    color: #a0a0a0;
  }
`;
