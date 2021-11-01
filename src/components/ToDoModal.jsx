import React from 'react';
import reactDom from 'react-dom';
import AppContext from '../context/AppContext';
import '../styles/ToDoModal.scss';

const Modal = () =>{

    const [newTodoValue, setNewTodoValue] = React.useState('');
    const {modifyModal, addTodo} = React.useContext(AppContext);
    
    
    const onCancel = (event) =>{
        event.stopPropagation();
        if(event.target.className === 'Modal' || event.target.className === 'cancel-button'){
            console.log(event.target.className)
            modifyModal();
        }
        
    }

    const onChange = (event) =>{
        
        setNewTodoValue(event.target.value);
       
    }

    const onAdd = (event) =>{
        event.preventDefault();
        addTodo(newTodoValue);
        modifyModal();

    }
    

    return reactDom.createPortal(
        <div 
            className='Modal'
            onClick={onCancel} >
            
                <form className='Modal-form'>
                    <div className='Modal-form-header'>
                        <label>Write a new ToDo</label>
                        <div className='Modal-buttons'>
                            <button className='cancel-button'
                                type='button'
                                onClick={onCancel}
                            >Cancel</button>
                            <button
                                type='submit'
                                onClick={onAdd}
                            >Add</button>
                        </div>
                    </div>
                   
                    <textarea
                        placeholder='Do math homework'
                        onChange={onChange}
                    ></textarea>
                    
                </form>
            
            
        </div>,
        document.getElementById('modal')
    );
 }
export default Modal;