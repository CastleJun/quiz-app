import React from 'react';
import styled from 'styled-components';

import { UserAnswer } from '@/App';
import { colors } from '@/styles/colors';
import { fontSize } from '@/styles/typography';
import { clickExample, ClickExampleProps, PlainButton } from '@/utils/css.util';

interface Props {
  question: string;
  examples: string[];
  handleClickAnswer: (event: React.MouseEvent<HTMLButtonElement>) => void;
  answers: UserAnswer;
  questionNum: number;
  totalQuestions: number;
}

const Card: React.FC<Props> = (props) => {
  const { question, examples, handleClickAnswer, answers, questionNum, totalQuestions } = props;

  return (
    <DivWrap>
      <QuestionCountWrap>
        Question: {questionNum} / {totalQuestions}
      </QuestionCountWrap>
      <QuestionWrap
        dangerouslySetInnerHTML={{
          //! api에서 받아오는 html문자열들을 파싱하기 위해 어쩔수 없이 사용
          __html: question,
        }}
      />

      {examples.map((exampleItem) => {
        return (
          <ExampleWrap key={exampleItem}>
            <ExampleButtonWrap
              onClick={handleClickAnswer}
              value={exampleItem}
              correct={answers?.correctAnswer === exampleItem}
              check={answers?.answer === exampleItem}
            >
              {exampleItem}
            </ExampleButtonWrap>
          </ExampleWrap>
        );
      })}
    </DivWrap>
  );
};

export default Card;

const DivWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
`;

const QuestionCountWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: ${colors.grey700};
  font-size: ${fontSize.M4};
  margin-bottom: 20px;
`;

const QuestionWrap = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: ${fontSize.L2};
  text-align: center;
  margin-bottom: 40px;
  padding: 0 20px;
`;

const ExampleWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
  width: 100%;
`;

const ExampleButtonWrap = styled(PlainButton)<ClickExampleProps>`
  width: 100%;
  font-size: ${fontSize.M4};
  padding: 10px 20px;
  margin: 0 20px;

  ${(props) => clickExample(props)}
`;
