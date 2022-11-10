import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import Accordion from '@/component/base-component/accordion';
import { UserAnswer } from '@/page/home/Home.tsx';
import { colors } from '@/styles/colors';
import { fontSize, fontWeight } from '@/styles/typography';
import { preventBlueHighlight } from '@/utils/css.util';
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
      <HomeLinkWrap to="/">홈으로 가기</HomeLinkWrap>
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

export const HomeLinkWrap = styled(Link)`
  ${preventBlueHighlight};
  display: flex;
  align-items: center;
  justify-content: center;

  text-decoration: none;
  padding: 10px 20px;
  color: ${colors.white};
  border: 1px solid ${colors.primary500};
  background-color: ${colors.primary500};
`;
