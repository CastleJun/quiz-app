import { css, FlattenSimpleInterpolation } from 'styled-components';

export const fontWeight = {
  regular: 400,
  medium: 500,
  bold: 700,
} as const;

export type FontWeightKey = keyof typeof fontWeight;

export const fontWeightCSS: { [key in FontWeightKey]: FlattenSimpleInterpolation } = {
  regular: css`
    font-weight: ${fontWeight.regular};
  `,

  medium: css`
    font-weight: ${fontWeight.medium};
  `,

  bold: css`
    font-weight: ${fontWeight.bold};
  `,
};
