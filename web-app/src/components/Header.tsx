interface IHeader {
  onClickInfo: () => void;
}

const Header = ({ onClickInfo }: IHeader) => {
  return (
    <header className='flex flex-row justify-between items-center border-b-2 border-gray-300 p-2 mx-2'>
      <h1>Nuit de l'info 2022</h1>
      <div>
        <a href='https://github.com/NootNook/nuitinfo-2022-dcfc'>
          <i className='fa-brands fa-github text-2xl mx-4 cursor-pointer'></i>
        </a>
        <button onClick={onClickInfo}>
          <i className='fa-sharp fa-solid fa-question text-2xl mx-4 cursor-pointer'></i>
        </button>
      </div>
    </header>
  );
};

export default Header;
