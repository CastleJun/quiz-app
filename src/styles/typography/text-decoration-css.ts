import { css, FlattenSimpleInterpolation } from 'styled-components';

export const textDecoration = {
  none: 'none',
  underline: 'underline',
  lineThrough: 'line-through',
} as const;

export type TextDecorationKey = keyof typeof textDecoration;

export const textDecorationCSS: { [key in TextDecorationKey]: FlattenSimpleInterpolation } = {
  none: css`
    text-decoration: ${textDecoration.none};
  `,

  underline: css`
    text-decoration: ${textDecoration.underline};
    text-underline-offset: 1.5px;
  `,

  lineThrough: css`
    text-decoration: ${textDecoration.lineThrough};
  `,
};
