import styled, { css } from 'styled-components';

export const preventBlueHighlight = css`
  -webkit-tap-highlight-color: transparent;
  &:focus {
    outline: none;
  }
`;

export const PlainButton = styled.button`
  ${preventBlueHighlight};
  padding: 0;
  background-color: transparent;
  border: none;
  cursor: pointer;
  &:disabled {
    cursor: not-allowed;
  }
`;
