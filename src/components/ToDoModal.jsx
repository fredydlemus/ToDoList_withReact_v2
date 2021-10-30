import React from 'react';
import reactDom from 'react-dom';
import AppContext from '../context/AppContext';
import '../styles/ToDoModal.scss';

const Modal = () =>{

    const {modifyModal} = React.useContext(AppContext);
    
    const onCancel = (event) =>{
        event.stopPropagation();
        if(event.target.className === 'Modal' || event.target.className === 'cancel-button'){
            console.log(event.target.className)
            modifyModal();
        }
        
    }

    return reactDom.createPortal(
        <div 
            className='Modal'
            onClick={onCancel} >
            
                <form className='Modal-form'>
                    <label>Write a new ToDo</label>
                    <textarea
                        placeholder='Do math homework'
                    ></textarea>
                    <div className='Modal-buttons'>
                        <button className='cancel-button'
                            type='button'
                            onClick={onCancel}
                        >Cancel</button>
                        <button
                            type='button'
                        >Add</button>
                    </div>
                </form>
            
            
        </div>,
        document.getElementById('modal')
    );
 }
export default Modal;