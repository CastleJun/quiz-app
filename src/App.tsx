import React from 'react';
import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

import { Text } from '@/component/base-component/text';
import { colors } from '@/styles/colors';

const GlobalStyle = createGlobalStyle`
  ${reset}
`;

const App = () => (
  <>
    <GlobalStyle />
    <Text color={colors.error500}>test</Text>
  </>
);

export default App;
