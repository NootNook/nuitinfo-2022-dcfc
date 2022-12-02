interface IAnswer {
  message: string;
  name: string;
  onChange: (event: any) => void;
}

const Answer = ({ message, name, onChange }: IAnswer) => {
  return (
    <label className=''>
      {message}
      <input className='m-5 cursor-pointer' name={name} type='checkbox' onChange={onChange} />
    </label>
  );
};

export default Answer;
