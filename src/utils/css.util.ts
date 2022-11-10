import styled, { css } from 'styled-components';

import { colors } from '../styles/colors';

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

export interface ClickExampleProps {
  correct?: boolean;
  check?: boolean;
}

export const clickExample = (props: ClickExampleProps) => {
  if (props.correct === true) {
    return css`
      background-color: ${colors.primary500};
      color: ${colors.white};
    `;
  }

  if (props.check) {
    return css`
      background-color: ${colors.error500};
      color: ${colors.grey400};
    `;
  }

  return css`
    background-color: ${colors.grey700};
    color: ${colors.black};
  `;
};
