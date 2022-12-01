import { useState } from 'react';

const Captcha = ({ handleCheck }: any) => {
  const [state, setState] = useState({
    one: false,
    two: false,
    three: false,
    four: false,
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
      <form className='flex flex-col' onSubmit={handleSubmit}>
        <label className='flex'>
          QUESTION A
          <input
            className='m-5 cursor-pointer'
            name='one'
            type='checkbox'
            onChange={handleChange}
          />
          <input
            className='m-5 cursor-pointer'
            name='two'
            type='checkbox'
            onChange={handleChange}
          />
          <input
            className='m-5 cursor-pointer'
            name='three'
            type='checkbox'
            onChange={handleChange}
          />
          <input
            className='m-5 cursor-pointer'
            name='four'
            type='checkbox'
            onChange={handleChange}
          />
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
