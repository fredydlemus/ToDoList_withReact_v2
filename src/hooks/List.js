const getTodos = () =>{
    const todo = [
        {
            text: 'ayudar a mi mama',
            completed: false
        },
        {
            text: 'Hacer la cama',
            completed: false
        },
        {
            text: 'Buscar trabajo',
            completed: false
        },
        {
            text: 'hacer dieta',
            completed: true
        }
    ];

    return todo;
}

export {
    getTodos,
};