import { ArcElement, Chart as ChartJS, Legend, Tooltip } from 'chart.js';
import React, { useState } from 'react';
import { Pie } from 'react-chartjs-2';
import styled from 'styled-components';

import Card from '@/component/base-component/card';
import { Loading } from '@/component/base-component/loading';
import Modal from '@/component/base-component/modal';
import { LETTER_BOX_MAX_VIEW_WIDTH_AS_STRING, TOTAL_QUESTION } from '@/constant/static.config';
import { colors } from '@/styles/colors';
import { fontSize, fontWeight } from '@/styles/typography';
import { Api } from '@/tools/api';
import { GetManyQuestionsResBody } from '@/tools/getManyQuestions';
import { PlainButton } from '@/utils/css.util';
import { clearStorage, setStorageItem } from '@/utils/storage';
import { msToTime } from '@/utils/time.util';
import { shuffle } from '@/utils/util';

ChartJS.register(ArcElement, Tooltip, Legend);

export interface UserAnswer {
  question: string;
  correctAnswer: string;
  answer: string;
  isCorrect: boolean;
}

const App = () => {
  const [questions, setQuestions] = useState<GetManyQuestionsResBody[]>();
  const [loading, setLoading] = useState<boolean>(false);
  const [correctCount, setCorrectCount] = useState<number>(0);
  const [questionNumber, setQuestionNumber] = useState<number>(0);
  const [answers, setAnswers] = useState<UserAnswer[]>([]);
  const [toggleModal, setToggleModal] = useState<boolean>(false);
  const [isCorrect, setIsCorrect] = useState<string>('');
  const [startTime, setStartTime] = useState<Date | null>(null);
  const [timeTaken, setTimeTaken] = useState<number>(0);

  const handleStartQuiz = async () => {
    setLoading(true);

    const data = await Api.getManyQuestions.request({
      amount: TOTAL_QUESTION,
      category: '21',
      type: 'multiple',
    });

    setQuestions(data);
    setLoading(false);
    const startTime = new Date();
    setStartTime(startTime);
  };

  const handleClickAnswer = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (!questions) {
      return;
    }

    const answer = event.currentTarget.value;
    const isCorrect = questions[questionNumber].correct_answer === answer;
    if (isCorrect) {
      setCorrectCount((prev) => prev + 1);
    }

    const userAnswer: UserAnswer = {
      question: questions[questionNumber].question,
      correctAnswer: questions[questionNumber].correct_answer,
      answer,
      isCorrect,
    };

    setIsCorrect(isCorrect ? '정답입니다' : '틀렸습니다');
    setAnswers((prev) => [...prev, userAnswer]);
    setToggleModal(true);
  };

  const handleNextQuestion = () => {
    setQuestionNumber((prev) => prev + 1);
    setToggleModal(false);

    if (!(questionNumber + 1 < TOTAL_QUESTION)) {
      const endTime = new Date();

      setTimeTaken(Number(endTime) - Number(startTime));
      setStorageItem('question', {
        correct: correctCount,
        wrong: TOTAL_QUESTION - correctCount,
      });
    }
  };

  const handleRetryQuestion = () => {
    if (!questions) {
      return;
    }

    const shuffleQuestion = shuffle<GetManyQuestionsResBody>(questions);
    const startTime = new Date();

    setQuestionNumber(0);
    setCorrectCount(0);
    setAnswers([]);
    setStartTime(startTime);
    setQuestions(shuffleQuestion);
    clearStorage('question');
  };

  const haveQuestion = questionNumber < TOTAL_QUESTION;
  const wrongCount = TOTAL_QUESTION - correctCount;

  const chartData = {
    labels: ['정답개수', '오답개수'],
    datasets: [
      {
        label: '# of Votes',
        data: [correctCount, wrongCount],
        backgroundColor: [colors.primary100, colors.error100],
        borderColor: [colors.primary500, colors.error500],
        borderWidth: 1,
      },
    ],
  };

  return (
    <DivWrap>
      <TitleWrap>CLASSTING QUIZ APP</TitleWrap>

      {!questions && <StartButtonWrap onClick={handleStartQuiz}>start</StartButtonWrap>}

      {questions && haveQuestion && (
        <Card
          question={questions[questionNumber].question}
          examples={questions[questionNumber].question_answers}
          handleClickAnswer={handleClickAnswer}
          answers={answers[questionNumber]}
          questionNum={questionNumber + 1}
          totalQuestions={TOTAL_QUESTION}
        />
      )}

      <Modal open={toggleModal}>
        <ContentModalWrap>{isCorrect}</ContentModalWrap>
        <NextQuestionButtonWrap onClick={handleNextQuestion}>다음문제</NextQuestionButtonWrap>
      </Modal>

      {loading && (
        <LoadingWrap>
          <Loading />
        </LoadingWrap>
      )}

      {!haveQuestion && (
        <ChartWrap>
          <PieChartWrap data={chartData} />
          <QuizInformationWrap>
            <QuizInformationContentWrap>총 {correctCount}개</QuizInformationContentWrap> 맞췄습니다.
          </QuizInformationWrap>
          <QuizInformationWrap>
            <QuizInformationContentWrap>총 {TOTAL_QUESTION - correctCount}개</QuizInformationContentWrap> 틀렸습니다.
          </QuizInformationWrap>
          <QuizInformationWrap>
            <QuizInformationContentWrap>총 소요시간 {msToTime(timeTaken)}</QuizInformationContentWrap>소요 되었습니다.
          </QuizInformationWrap>

          <RetryQuizButtonWrap onClick={handleRetryQuestion}>다시풀기</RetryQuizButtonWrap>
        </ChartWrap>
      )}
    </DivWrap>
  );
};

const DivWrap = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 0 auto;
  max-width: ${LETTER_BOX_MAX_VIEW_WIDTH_AS_STRING};
`;

const TitleWrap = styled.h1`
  font-size: ${fontSize.XL2};
  color: ${colors.primary500};
  margin-bottom: 25px;
`;

const LoadingWrap = styled.div`
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

const StartButtonWrap = styled(PlainButton)`
  padding: 10px 35px;
  border-radius: 12px;
  background-color: ${colors.primary500};
  border: 1px solid ${colors.primary700};
  color: ${colors.grey400};
  font-size: ${fontSize.M2};
`;

const ContentModalWrap = styled.div`
  font-size: ${fontSize.M2};
  margin: 5px 0;
`;

const NextQuestionButtonWrap = styled(PlainButton)`
  padding: 10px 20px;
  border: 1px solid ${colors.primary500};
  background-color: ${colors.primary500};
  color: ${colors.white};
`;

const ChartWrap = styled.div``;
const PieChartWrap = styled(Pie)`
  margin-bottom: 30px;
`;

const QuizInformationWrap = styled.div`
  display: flex;
  margin-bottom: 8px;
  font-size: ${fontSize.M2};
  color: ${colors.grey700};
`;

const QuizInformationContentWrap = styled.p`
  color: ${colors.primary500};
  font-weight: ${fontWeight.bold};
  margin-right: 6px;
`;

const RetryQuizButtonWrap = styled(PlainButton)`
  padding: 10px 20px;
  border: 1px solid ${colors.primary500};
  background-color: ${colors.primary500};
  color: ${colors.white};
`;

export default App;
