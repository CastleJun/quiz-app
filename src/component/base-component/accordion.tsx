import React from 'react';
import styled from 'styled-components';

import { colors } from '../../styles/colors';
import { fontSize, fontWeight } from '../../styles/typography';
import { PlainButton } from '../../utils/css.util';

type Props = {
  title?: string | React.ReactNode;
  children?: string | React.ReactNode;
};

const Accordion: React.FC<Props> = (props): React.ReactElement => {
  const { children, title } = props;

  const parentRef = React.useRef<HTMLDivElement>(null);
  const childRef = React.useRef<HTMLDivElement>(null);
  const [isCollapse, setIsCollapse] = React.useState(false);

  const handleButtonClick = React.useCallback(
    (event: React.MouseEvent<HTMLButtonElement>) => {
      event.stopPropagation();
      if (parentRef.current === null || childRef.current === null) {
        return;
      }
      if (parentRef.current.clientHeight > 0) {
        parentRef.current.style.height = '0';
        parentRef.current.style.background = colors.white;
      } else {
        parentRef.current.style.height = `${childRef.current.clientHeight}px`;
        parentRef.current.style.background = colors.grey300;
      }
      setIsCollapse(!isCollapse);
    },
    [isCollapse]
  );

  const buttonText = isCollapse ? '-' : '+';

  return (
    <DivWrap>
      <HeaderWrap>
        {title}
        <ButtonWrap onClick={handleButtonClick} value={buttonText}>
          {buttonText}
        </ButtonWrap>
      </HeaderWrap>
      <ContentsWrapper ref={parentRef}>
        <Contents ref={childRef}>{children}</Contents>
      </ContentsWrapper>
    </DivWrap>
  );
};

const DivWrap = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: center;

  border-radius: 4px;
  border: 1px solid silver;

  margin-bottom: 16px;
  min-width: 380px;
  max-width: 380px;
`;

const HeaderWrap = styled.div`
  display: flex;
  align-items: center;
  padding: 20px 10px;
  margin: 0 12px;
  max-width: 320px;

  font-size: ${fontSize.M4};
  font-weight: ${fontWeight.bold};
  line-height: 130%;
`;

const ButtonWrap = styled(PlainButton)`
  position: absolute;
  top: 6px;
  right: 6px;
  font-size: ${fontSize.XL1};
  font-weight: ${fontWeight.bold};
`;

const ContentsWrapper = styled.div`
  height: 0;
  width: inherit;
  padding: 0 20px;
  overflow: hidden;
  transition: height 0.35s ease, background 0.35s ease;
`;

const Contents = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  height: 100px;
`;

export default React.memo(Accordion);
