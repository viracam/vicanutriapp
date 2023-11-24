import {createPortal} from 'react-dom';
import './ModalStyle.css'



function MyModal( {children}) {
  return (
    <div className='BackgroungModal'>
        {children}
    </div>
  );
}
export {MyModal, createPortal}