import {createPortal} from 'react-dom';
import './ModalStyle.css'

function MyModal( {children}) {
  return createPortal(
    <div className='BackgroungModal'>
        {children}

    </div>,
    document.getElementById('modal')
  );
}
export {MyModal}