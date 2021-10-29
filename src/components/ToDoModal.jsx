import React from 'react';
import reactDom from 'react-dom';

const Modal = ({children}) =>{

    

    return reactDom.createPortal(
        <div className='Modal' >
            {children}
            <h1>Soy el modal :D</h1>
        </div>,
        document.getElementById('modal')
    );
 }
export default Modal;