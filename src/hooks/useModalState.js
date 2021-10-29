import React from 'react';

const initialState = false;

const useModalState = () => {
    const [openModal, setOpenModal] = React.useState(initialState);

    const modifyModal = () =>{
        setOpenModal(openModal => !openModal);
    }


    return {
        openModal,
        modifyModal,
    }
}

export default useModalState;