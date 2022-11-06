import { css } from 'styled-components';

export const getLineClampCSS = (lineClamp: number) => {
  return css`
    display: -webkit-box;
    -webkit-line-clamp: ${lineClamp};
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
    overflow: hidden;
  `;
};
