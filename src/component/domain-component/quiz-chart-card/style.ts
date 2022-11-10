import { Pie } from 'react-chartjs-2';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { colors } from '../../../styles/colors';
import { fontSize, fontWeight } from '../../../styles/typography';
import { PlainButton, preventBlueHighlight } from '../../../utils/css.util';

export const DivWrap = styled.div``;
export const PieChartWrap = styled(Pie)`
  margin-bottom: 30px;
`;

export const QuizInformationWrap = styled.div`
  display: flex;
  margin-bottom: 8px;
  font-size: ${fontSize.M2};
  color: ${colors.grey700};
`;

export const QuizInformationContentWrap = styled.p`
  color: ${colors.primary500};
  font-weight: ${fontWeight.bold};
  margin-right: 6px;
`;

export const RetryQuizButtonWrap = styled(PlainButton)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 10px 20px;
  margin-bottom: 20px;

  border: 1px solid ${colors.primary500};
  background-color: ${colors.primary500};
  color: ${colors.white};
`;

export const InCorrectViewLinkWrap = styled(Link)`
  ${preventBlueHighlight};
  display: flex;
  align-items: center;
  justify-content: center;

  text-decoration: none;
  padding: 10px 20px;
  color: ${colors.grey700};
  border: 1px solid ${colors.error500};
  background-color: ${colors.error100};
`;
