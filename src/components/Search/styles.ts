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
  border-radius: 4px;
  position: relative;

  ${props =>
    props.isFocused &&
    css`
      box-shadow: 0px 5px 8px rgb(0 0 0 / 15%);
    `}
`;

export const Input = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 32px;
  padding: 0 8px;

  input {
    border: 0;
    width: 100%;
    color: #616161;
    margin-left: 8px;
  }
`;

export const List = styled.ul<ListProps>`
  position: absolute;
  top: 28px;
  padding: 8px 0 16px;
  width: 100%;
  background: #fff;
  border-radius: 0 0 8px 8px;
  box-shadow: 0px 10px 14px -10px rgba(82, 97, 107, 0.24);

  display: none;

  ${props =>
    props.isListOpen &&
    css`
      display: block;
    `}
`;

export const ListItem = styled.li`
  list-style: none;
  cursor: pointer;
  border-bottom: 1px solid #ebf8ff;

  div {
    border: 0;
    background: transparent;
    padding: 10px 0;
    margin: 0 16px;

    p {
      font-size: 14px;
      margin-bottom: 6px;
      color: #444;
    }

    small {
      color: #999;
    }

    span {
      width: 100%;
      display: flex;

      small:nth-child(2) {
        margin-left: auto;
        text-transform: uppercase;
        color: #aaa;
      }
    }
  }

  &:hover {
    background: #ebf8ff;
  }
`;
