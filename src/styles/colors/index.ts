const GREY_SCALE = {
  grey100: '#FDFDFD',
  grey200: '#F4F4F4',
  grey300: '#EDEDED',
  grey400: '#DEDEDE',
  grey500: '#CDCDCD',
  grey600: '#B2B2B2',
  grey700: '#888888',
  grey800: '#4A4A4A',
  grey900: '#353535',
  white: '#FFFFFF',
  black: '#212121',
} as const;

const PRIMARY = {
  primary100: '#F0E6FA',
  primary200: '#D9C3F4',
  primary300: '#BD98EA',
  primary400: '#B079EE',
  primary450: '#8E47DC',
  primary500: '#6F25B9',
  primary600: '#6116B4',
  primary700: '#490C90',
} as const;

// * Validation, 상태와 결괏값에 따른 색상을 정의합니다.
const VALIDATION = {
  error100: '#FFE6E6',
  error500: '#FF6955',
} as const;

export const colors = {
  ...GREY_SCALE,
  ...PRIMARY,
  ...VALIDATION,
};

export type ColorKey = keyof typeof colors;
