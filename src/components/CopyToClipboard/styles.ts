import styled from 'styled-components';

export const Container = styled.div`
  position: relative;

  span {
    p {
      font-size: 12px;
      color: #fff;
    }
  }

  & span {
    width: 125px;
    visibility: hidden;
    background: #555;
    text-align: center;
    border-radius: 4px;
    padding: 5px 0;
    position: absolute;
    bottom: 125%;
    z-index: 1;
    opacity: 0;
    transition: opacity 0.3s;
  }

  & span::after {
    content: '';
    position: absolute;
    top: 100%;
    left: 50%;
    margin-left: -5px;
    border-width: 5px;
    border-style: solid;
    border-color: #555 transparent transparent transparent;
  }

  &:hover span {
    visibility: visible;
    opacity: 1;
  }
`;
