import { useCallback, MouseEvent, useRef } from 'react';
import { createPortal } from 'react-dom';

interface IModal {
  onClose: React.Dispatch<React.SetStateAction<boolean>>;
}

const Modal = ({ onClose }: IModal) => {
  const ref = useRef(null);

  const handleClose = useCallback(
    (e: MouseEvent<HTMLElement>) => {
      onClose(ref.current !== e.target);
    },
    [onClose]
  );

  return createPortal(
    <div
      className='fixed flex items-center justify-center top-0 left-0 w-full h-full z-50 bg-neutral-700 bg-opacity-30'
      ref={ref}
      onClick={handleClose}
    >
      <div className='flex flex-col p-4 w-2/12 lg:w-8/12 h-2/4 bg-white rounded-lg shadow '>
        Ce projet de la nuit de l'info 2022 comporte un Captcha avant d'accéder au jeu. Vous devez simplement répondre correctement aux questions posées.
        <br /><br />Les auteurs de ce projet :<br /><br />
        - Alex Couderay<br />
        - Laêtitia Cabrol<br />
        - Florian Bernadet<br />
        - Romain Réau<br />
        - Youssef Blaiha<br />
      </div>
    </div>,
    document.body
  );
};

export default Modal;
