import React from 'react'
import Layout from './containers/Layout';
import AppContext from './context/AppContext';
import useModalState from './hooks/useModalState';
import './styles/global.scss';

const App = () =>{
    
    const modalState = useModalState();

    return(
        <AppContext.Provider value= {modalState}>
            <Layout/>
        </AppContext.Provider>
        
    );
}

export default App;