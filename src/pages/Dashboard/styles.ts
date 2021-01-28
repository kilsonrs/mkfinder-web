import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Search = styled.div`
  display: flex;
  justify-content: center;
  margin: 160px 0;
  padding: 10px 16px;
  background: #fff;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
  border-radius: 32px;

  input {
    margin-left: 16px;
    width: 450px;
    border: 0;
    font-size: 16px;
    color: #444;

    &::placeholder {
      color: #9b9a9a;
    }
    &:-ms-input-placeholder {
      color: #9b9a9a;
    }
  }
`;

export const Content = styled.div`
  height: 100%;
  width: 80%;
`;
