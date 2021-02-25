import styled from 'styled-components';

export const Container = styled.article`
  display: flex;
  width: fit-content;
  position: relative;

  #tooltip {
    padding: 6px 16px;

    #tooltip-text {
      font-size: 14px;
      font-weight: 400;
      color: #f6f6f6;
    }
  }

  & span {
    min-width: 100px;
    visibility: hidden;
    background: #555;
    text-align: center;
    border-radius: 4px;
    padding: 5px 0;
    position: absolute;
    bottom: 125%;
    right: calc(50% - 50px);
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
