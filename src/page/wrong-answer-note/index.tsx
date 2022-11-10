import React from 'react';
import styled from 'styled-components';

import Accordion from '@/component/base-component/accordion';
import { UserAnswer } from '@/page/home/Home';
import { colors } from '@/styles/colors';
import { fontSize, fontWeight } from '@/styles/typography';
import { getStorageItem } from '@/utils/storage';

const WrongAnswerNote = (): React.ReactElement => {
  const userAnswers: UserAnswer[] = JSON.parse(getStorageItem('answers') as string);

  const wrongAnswers = userAnswers.filter((item) => {
    return !item.isCorrect;
  });

  return (
    <DivWrap>
      <TitleWrap>오답 노트</TitleWrap>
      {wrongAnswers.map((answer) => {
        return (
          <Accordion title={answer.question} key={answer.correctAnswer}>
            <AnswerWrap>
              내가 선택한 정답 : <WrongAnswerWrap>{answer.answer}</WrongAnswerWrap>
            </AnswerWrap>
            <AnswerWrap>
              문제 정답 : <CorrectAnswerWrap>{answer.correctAnswer}</CorrectAnswerWrap>
            </AnswerWrap>
          </Accordion>
        );
      })}
    </DivWrap>
  );
};

export default WrongAnswerNote;

const DivWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const TitleWrap = styled.h1`
  font-size: ${fontSize.XL2};
  font-weight: ${fontWeight.bold};
  color: ${colors.primary500};
  margin: 20px 0;
`;

const AnswerWrap = styled.div`
  display: flex;
  margin-bottom: 16px;

  :last-child {
    margin: 0;
  }
`;

const WrongAnswerWrap = styled.p`
  font-size: ${fontSize.M2};
  color: ${colors.error500};
  margin-left: 4px;
`;

const CorrectAnswerWrap = styled.p`
  font-size: ${fontSize.M4};
  color: ${colors.primary500};
  margin-left: 4px;
`;
