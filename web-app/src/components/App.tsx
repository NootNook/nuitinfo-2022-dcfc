import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import Main from '@components/Main';
import Header from '@components/Header';
import Game from '@components/Game';
import Modal from '@components/Modal';
import { useCallback, useState } from 'react';

const App = () => {
  const [isVisibleModal, setVisibleModal] = useState(false);
  const onClickInfo = useCallback(() => setVisibleModal(true), []);

  return (
    <Router>
      <Header onClickInfo={onClickInfo} />
      {isVisibleModal && <Modal onClose={setVisibleModal} />}
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/game' element={<Game />} />
      </Routes>
    </Router>
  );
};

export default App;
