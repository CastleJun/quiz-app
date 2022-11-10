import { ArcElement, Chart as ChartJS, Legend, Tooltip } from 'chart.js';
import React from 'react';

import { colors } from '../../../styles/colors';
import { getStorageItem } from '../../../utils/storage';
import { msToTime } from '../../../utils/time.util';
import {
  DivWrap,
  InCorrectViewLinkWrap,
  PieChartWrap,
  QuizInformationContentWrap,
  QuizInformationWrap,
  RetryQuizButtonWrap,
} from './style';

ChartJS.register(ArcElement, Tooltip, Legend);

interface Props {
  timeTaken: number;
  onRetryQuizClick: () => void;
}

const QuizChartCard: React.FC<Props> = (props) => {
  const { onRetryQuizClick, timeTaken } = props;

  const quizCount: { correct: string; wrong: string } = JSON.parse(getStorageItem('question') as string);

  const correctCount = quizCount.correct;
  const inCorrectCount = quizCount.wrong;

  const chartData = {
    labels: ['정답개수', '오답개수'],
    datasets: [
      {
        label: '# of Votes',
        data: [correctCount || 0, inCorrectCount || 0],
        backgroundColor: [colors.primary100, colors.error100],
        borderColor: [colors.primary500, colors.error500],
        borderWidth: 1,
      },
    ],
  };

  return (
    <DivWrap>
      <PieChartWrap data={chartData} />
      <QuizInformationWrap>
        <QuizInformationContentWrap>총 {correctCount}개</QuizInformationContentWrap> 맞췄습니다.
      </QuizInformationWrap>
      <QuizInformationWrap>
        <QuizInformationContentWrap>총 {inCorrectCount}개</QuizInformationContentWrap> 틀렸습니다.
      </QuizInformationWrap>
      <QuizInformationWrap>
        <QuizInformationContentWrap>총 {msToTime(timeTaken)}</QuizInformationContentWrap>소요 되었습니다.
      </QuizInformationWrap>

      <RetryQuizButtonWrap onClick={onRetryQuizClick}>다시풀기</RetryQuizButtonWrap>
      <InCorrectViewLinkWrap to="/note">틀린문제 보기</InCorrectViewLinkWrap>
    </DivWrap>
  );
};

export default QuizChartCard;
