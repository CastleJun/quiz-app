import React, { useState } from 'react';

import { TOTAL_QUESTION } from '../constant/static.config';
import { UserAnswer } from '../page/home/Home';
import { Api } from '../tools/api';
import { GetManyQuestionsResBody } from '../tools/getManyQuestions';
import { clearStorage, setStorageItem } from '../utils/storage';
import { shuffle } from '../utils/util';

export const useQuizLayout = () => {
  const [questions, setQuestions] = useState<GetManyQuestionsResBody[]>();
  const [loading, setLoading] = useState<boolean>(false);
  const [correctCount, setCorrectCount] = useState<number>(0);
  const [questionNumber, setQuestionNumber] = useState<number>(0);
  const [answers, setAnswers] = useState<UserAnswer[]>([]);

  const [isCorrect, setIsCorrect] = useState<string>('');
  const [startTime, setStartTime] = useState<Date | null>(null);

  const [toggleModal, setToggleModal] = useState<boolean>(false);
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

      setStorageItem('answers', answers);
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

  return {
    handleClickAnswer,
    handleNextQuestion,
    handleStartQuiz,
    handleRetryQuestion,
    questions,
    questionNumber,
    answers,
    timeTaken,
    loading,
    isCorrect,
    toggleModal,
  };
};
