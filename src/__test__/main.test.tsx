import { screen } from '@testing-library/dom';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { Home } from '../page/home/Home';

describe('Home Component', () => {
  it('퀴즈 시작 버튼이 있어야한다.', () => {
    render(<Home />);

    const startButton = screen.getAllByTitle('start')[0];
    userEvent.click(startButton);
  });
});
