import styled from 'styled-components';

import { LETTER_BOX_MAX_VIEW_WIDTH_AS_STRING } from '@/constant/static.config';
import { colors } from '@/styles/colors';
import { fontSize } from '@/styles/typography';
import { PlainButton } from '@/utils/css.util';

export const DivWrap = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 0 auto;
  max-width: ${LETTER_BOX_MAX_VIEW_WIDTH_AS_STRING};
`;

export const TitleWrap = styled.h1`
  font-size: ${fontSize.XL2};
  color: ${colors.primary500};
  margin-bottom: 25px;
`;

export const LoadingWrap = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${colors.grey400};
`;

export const StartButtonWrap = styled(PlainButton)`
  padding: 10px 35px;
  border-radius: 12px;
  background-color: ${colors.primary500};
  border: 1px solid ${colors.primary700};
  color: ${colors.grey400};
  font-size: ${fontSize.M2};
`;

export const ContentModalWrap = styled.div`
  font-size: ${fontSize.M2};
  margin: 5px 0;
`;

export const NextQuestionButtonWrap = styled(PlainButton)`
  padding: 10px 20px;
  border: 1px solid ${colors.primary500};
  background-color: ${colors.primary500};
  color: ${colors.white};
`;
