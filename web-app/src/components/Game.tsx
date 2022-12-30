import { Unity, useUnityContext } from 'react-unity-webgl';

const Game = () => {
  const { unityProvider } = useUnityContext({
    loaderUrl: '/public/build/Documents.loader.js',
    dataUrl: '/public/build/webgl.data',
    frameworkUrl: '/public/build/build.framework.js',
    codeUrl: '/public/build/build.wasm',
  });

  return (
    <div className='flex h-screen justify-center items-center'>
      <Unity unityProvider={unityProvider} style={{ width: 1600, height: 900 }}/>
    </div>
  );
};

export default Game;
