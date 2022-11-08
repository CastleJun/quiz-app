import React, { ReactElement } from 'react';
import styled from 'styled-components';

import { colors } from '@/styles/colors';

interface Props {
  open: boolean;
  children?: React.ReactNode;
}

const Modal = (props: Props): ReactElement => {
  const { open, children } = props;

  return <ModalWrap open={open}>{open && <ContentModalWrap>{children}</ContentModalWrap>}</ModalWrap>;
};

export default Modal;

const ModalWrap = styled.div<{ open: boolean }>`
  display: ${(props) => (props.open ? 'flex' : 'none')};
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.6);
`;

const ContentModalWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 80px;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  margin: 0 auto;
  background-color: ${colors.white};
`;
