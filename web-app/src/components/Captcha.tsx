import { useState } from 'react';

const Captcha = ({ handleCheck }: any) => {
  const [state, setState] = useState({
    one: false,
    two: false,
    three: false,
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
        <label className='flex flex-col justify-center align-center'>
          Si un.e personne dit “oui” après 30 min de demande, le consentement est-il respecté ?
          <div>
            Oui
            <input
              className='m-5 cursor-pointer'
              name='one'
              type='checkbox'
              onChange={handleChange}
            />
            Non
            <input
              className='m-5 cursor-pointer'
              name='two'
              type='checkbox'
              onChange={handleChange}
            />
            Ça dépend
            <input
              className='m-5 cursor-pointer'
              name='three'
              type='checkbox'
              onChange={handleChange}
            />
          </div>
        </label>
        <input
          className='border-2 border-gray-300 cursor-pointer hover:bg-violet-600'
          type='submit'
          value='Submit'
        />
      </form>
    </div>
  );
};

export default Captcha;
