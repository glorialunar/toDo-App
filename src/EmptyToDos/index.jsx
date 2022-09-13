import React from 'react';
import './EmpyToDos.css';
import { ReactComponent as EmptyToDoImg } from '../img/newTask.svg';

export function EmptyToDos(){
    return (
        <div className='EmptyToDo-container'>
            <EmptyToDoImg className='EmptyToDoImg'/>
            <p>No tienes tareas agregadas!!</p>
        </div>
    )
}