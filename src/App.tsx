import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Home } from './page/home/Home';
import { WrongAnswerNote } from './page/wrong-answer-note';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/note" element={<WrongAnswerNote />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
