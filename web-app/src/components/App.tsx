import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';

import Main from '@components/Main';
import Header from '@components/Header';
import Game from '@components/Game';

const App = () => {

  return (
    <Router>
    <Header />
    <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/game' element={<Game/>} />
    </Routes>
    </Router>
  );
};

export default App;
