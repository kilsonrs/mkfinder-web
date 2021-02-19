import styled, { css } from 'styled-components';

interface ContainerProps {
  isFocused: boolean;
  isListOpen: boolean;
}

interface ListProps {
  isListOpen: boolean;
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  flex-direction: column;
  height: 32px;
  width: 100%;
  max-width: 381px;
  margin: 12px 0;
  background: #fff;
  box-shadow: 0px 1px 1px rgba(0, 41, 255, 0.15);
  position: relative;

  border-radius: 16px;

  ${props =>
    props.isFocused &&
    css`
      border-radius: 4px;
    `}

  input {
    border: 0;
    width: 100%;
    color: #616161;
  }

  svg {
    margin-right: 8px;
  }
`;

export const Input = styled.div`
  margin: 4px 16px;
  display: flex;
`;

export const List = styled.ul<ListProps>`
  position: absolute;
  top: 28px;
  padding: 8px 0 16px;
  width: 100%;
  background: #fff;
  border-radius: 0 0 8px 8px;
  box-shadow: 0px 10px 14px -10px rgba(82, 97, 107, 0.24);

  opacity: 0;
  ${props =>
    props.isListOpen &&
    css`
      opacity: 1;
    `}
`;

export const ListItem = styled.li`
  list-style: none;
  cursor: pointer;
  border-bottom: 1px solid #ebf8ff;

  div {
    border: 0;
    background: transparent;
    padding: 8px 0;
    margin: 0 16px;

    p {
      font-size: 14px;
      margin-bottom: 4px;
    }

    span {
      width: 100%;
      display: flex;

      small:nth-child(2) {
        margin-left: auto;
        text-transform: uppercase;
      }
    }
  }

  &:hover {
    background: #ebf8ff;
  }
`;
