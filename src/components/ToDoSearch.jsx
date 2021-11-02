import React from 'react';
import AppContext from '../context/AppContext';
import '../styles/ToDoSearch.scss';

const ToDoSearch = () =>{

    const {setSearchValue} = React.useContext(AppContext);

    const onSearchValueChange = (event) =>{
        
        setSearchValue(event.target.value);
    }



    return(
        <section className='ToDoSearch'>
             <input
            className = 'ToDoSearch'
            placeholder = 'make the bed'
            onChange={onSearchValueChange}
        />
        </section>
       
    );
}

export default ToDoSearch;