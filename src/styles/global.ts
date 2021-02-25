import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  body {
    background: linear-gradient(180deg, #FFFFFF 15%, #d6efff 100%);
    height:100%;
    color: #444;
    --webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font-family: 'Roboto', serif;
    font-weight: 400;
    font-size: 16px;
  }

  h1,h2,h3,h4,h5,h6,strong {
    font-weight: 400;
  }

  p {
    font-size: 12px;
  }

  button {
    cursor: pointer;
  }
`;
