import { useState } from 'react';
import Question from '@components/Question';
import Answer from '@components/Answer';

const Captcha = ({ handleCheck }: any) => {
  const [state, setState] = useState({
    one: false,
    two: false,
    three: false,
    four: false,
    five: false,
    six: false,
  });

  const handleChange = (event: any) => {
    const name = event.target.name;
    const checked = event.target.checked;
    setState({
      ...state,
      [name]: checked,
    });
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    handleCheck(state);
  };

  return (
    <div className='flex h-screen justify-center items-center'>
      <form className='flex flex-col justify-center align-center' onSubmit={handleSubmit}>
        <Question
          message={
            'Si un.e personne dit “oui” après 30 min de demande, le consentement est-il respecté ?'
          }
        >
          <Answer message={'Oui'} name={'one'} onChange={handleChange} />
          <Answer message={'Non'} name={'two'} onChange={handleChange} />
          <Answer message={'Ça dépend'} name={'three'} onChange={handleChange} />
        </Question>
        <Question message={'Un.e personne endormie peut-elle.il être consentante ?'}>
          <Answer message={'Oui'} name={'four'} onChange={handleChange} />
          <Answer message={'Non'} name={'five'} onChange={handleChange} />
          <Answer message={'Ça dépend'} name={'six'} onChange={handleChange} />
        </Question>
        <input
          className='border-2 border-gray-300 cursor-pointer hover:bg-violet-600'
          type='submit'
          value='Valider'
        />
      </form>
    </div>
  );
};

export default Captcha;
