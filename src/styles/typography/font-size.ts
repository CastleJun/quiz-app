import { css, FlattenSimpleInterpolation } from 'styled-components';

export const fontSize = {
  XL3: '32px',
  XL2: '28px',
  XL1: '24px',

  L2: '22px',
  L1: '20px',

  M4: '18px',
  M3: '17px',
  M2: '16px',
  M1: '15px',

  S4: '14px',
  S3: '13px',
  S2: '12px',
  S1: '10px',
} as const;

export type FontSizeKey = keyof typeof fontSize;

export const fontSizeCSS: { [key in FontSizeKey]: FlattenSimpleInterpolation } = {
  XL3: css`
    font-size: ${fontSize.XL3};
    line-height: 150%;
    letter-spacing: -0.01rem;
  `,
  XL2: css`
    font-size: ${fontSize.XL2};
    line-height: 155%;
    letter-spacing: -0.01rem;
  `,
  XL1: css`
    font-size: ${fontSize.XL1};
    line-height: 155%;
    letter-spacing: -0.01rem;
  `,

  L2: css`
    font-size: ${fontSize.L2};
    line-height: 155%;
    letter-spacing: -0.01rem;
  `,
  L1: css`
    font-size: ${fontSize.L1};
    line-height: 155%;
    letter-spacing: -0.01rem;
  `,

  M4: css`
    font-size: ${fontSize.M4};
    line-height: 145%;
    letter-spacing: -0.01rem;
  `,
  M3: css`
    font-size: ${fontSize.M3};
    line-height: 145%;
    letter-spacing: -0.01rem;
  `,
  M2: css`
    font-size: ${fontSize.M2};
    line-height: 170%;
    letter-spacing: -0.01rem;
  `,
  M1: css`
    font-size: ${fontSize.M1};
    line-height: 170%;
    letter-spacing: -0.01rem;
  `,

  S4: css`
    font-size: ${fontSize.S4};
    line-height: 165%;
    letter-spacing: -0.01rem;
  `,
  S3: css`
    font-size: ${fontSize.S3};
    line-height: 170%;
    letter-spacing: -0.01rem;
  `,
  S2: css`
    font-size: ${fontSize.S2};
    line-height: 170%;
    letter-spacing: -0.01rem;
  `,
  S1: css`
    font-size: ${fontSize.S1};
    line-height: 170%;
    letter-spacing: -0.01rem;
  `,
};
