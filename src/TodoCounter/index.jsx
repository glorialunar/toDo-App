import React from 'react';
import { ToDoContext } from '../ToDoContext';
import './TodoCounter.css';

export function TodoCounter() {
    const { 
        totalToDos, 
        completedToDos 
    } = React.useContext(ToDoContext);

    return (
        <div>
            <p className='completed'>
                To-Dos completados: {completedToDos} de {totalToDos}
            </p>
        </div>
    )    
}