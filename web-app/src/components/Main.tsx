import Captcha from '@components/Captcha';
import Game from '@components/Game';
import { useState } from 'react';

const Main = () => {
  const [check, setCheck] = useState(false);

  const handleCheck = (event: any) => {
    const { one, two, three } = event;
    const result = !one && two && !three;

    setCheck(result);
  };

  return <div>{check ? <Game /> : <Captcha handleCheck={handleCheck} />}</div>;
};

export default Main;
