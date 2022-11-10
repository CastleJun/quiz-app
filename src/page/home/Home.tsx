import React from 'react';

import Card from '@/component/base-component/card';
import { Loading } from '@/component/base-component/loading';
import Modal from '@/component/base-component/modal';
import QuizChartCard from '@/component/domain-component/quiz-chart-card/quiz-chart-card';
import { TOTAL_QUESTION } from '@/constant/static.config';
import { useQuizLayout } from '@/hook/use-quiz-layout';

import { ContentModalWrap, DivWrap, LoadingWrap, NextQuestionButtonWrap, StartButtonWrap, TitleWrap } from './style';

export interface UserAnswer {
  question: string;
  correctAnswer: string;
  answer: string;
  isCorrect: boolean;
}

const Home = (): React.ReactElement => {
  const {
    isCorrect,
    questions,
    questionNumber,
    handleNextQuestion,
    handleRetryQuestion,
    handleStartQuiz,
    handleClickAnswer,
    answers,
    toggleModal,
    loading,
    timeTaken,
  } = useQuizLayout();

  const haveQuestion = questionNumber < TOTAL_QUESTION;

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

      {!haveQuestion && <QuizChartCard onRetryQuizClick={handleRetryQuestion} timeTaken={timeTaken} />}

      <Modal open={toggleModal}>
        <ContentModalWrap>{isCorrect}</ContentModalWrap>
        <NextQuestionButtonWrap onClick={handleNextQuestion}>다음문제</NextQuestionButtonWrap>
      </Modal>

      {loading && (
        <LoadingWrap>
          <Loading />
        </LoadingWrap>
      )}
    </DivWrap>
  );
};

export default Home;
