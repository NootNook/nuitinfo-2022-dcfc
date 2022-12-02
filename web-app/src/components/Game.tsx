import Unity, { UnityContent } from 'react-unity-webgl';

const Game = () => {
  const unityContent = new UnityContent('/public/build/build.json', '/public/build/UnityLoader.js');

  return (
    <div className='flex h-screen justify-center items-center'>
      <Unity unityContent={unityContent} />
    </div>
  );
};

export default Game;
