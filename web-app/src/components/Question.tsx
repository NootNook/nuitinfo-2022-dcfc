interface IQuestion {
  message: String;
  children: JSX.Element[];
}

const Question = ({ message, children }: IQuestion) => {
  return (
    <div className='flex flex-col justify-center m-5'>
      {message}
      <div className='flex flex-row justify-around'>{children}</div>
    </div>
  );
};

export default Question;
