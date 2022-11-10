import { AxiosRequestConfig } from 'axios';

import { shuffle } from '../utils/util';
import { axiosInstance } from './axios-instance';

export interface Question {
  category: string;
  type: string;
  difficulty: string;
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
}

type QuestionDifficulty = 'easy' | 'medium' | 'hard';
type QuestionType = 'multiple';

interface GetManyQuestionsReqQuery {
  amount?: number;
  difficulty?: QuestionDifficulty;
  category: string;
  type: QuestionType;
}

export interface GetManyQuestionsResBody extends Question {
  id: number;
  question_answers: string[];
}

interface Res {
  data: {
    response_code: number;
    results: Question[];
  };
}

export const getManyQuestions = {
  url: '/',
  async request(
    query: GetManyQuestionsReqQuery,
    config?: AxiosRequestConfig | undefined
  ): Promise<GetManyQuestionsResBody[]> {
    const { data }: Res = await axiosInstance.get(this.url, { params: query, ...config });

    return data?.results?.map((question: Question, index) => {
      return {
        id: index + 1,
        ...question,
        question_answers: shuffle([question.correct_answer, ...question.incorrect_answers]),
      };
    });
  },
};
