import styled from 'styled-components';

interface ContainerProps {
  color: string;
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  max-width: 92px;
  flex-direction: column;
  align-items: center;
  margin-right: 16px;
  padding: 4px 18px;
  background-color: #fff;

  div {
    p {
      width: 92px;
      padding: 4px 0;
      margin-bottom: 6px;
      text-align: center;
      border: 1px solid ${props => props.color};
      border-radius: 4px;
      font-size: 12px;
      color: ${props => props.color};
    }
  }

  small {
    font-size: 12px;
    color: ${props => props.color};
  }
`;
