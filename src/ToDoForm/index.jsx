import React from 'react';
import { ToDoContext } from '../ToDoContext';
import './ToDoForm.css';

export function ToDoForm(){
    const [newToDoValue, setNewToDoValue] = React.useState('');
    const {
        addToDo,
        setOpenModal,
    } = React.useContext(ToDoContext);

    const onCancel = () => {
        setOpenModal(false);
    };
    const onChange = (e) => {
        setNewToDoValue(e.target.value);
    };
    const onSubmit = (e) => {
        e.preventDefault();
        if(newToDoValue !== ""){
            addToDo(newToDoValue);
        }
        setOpenModal(false);
    };

    return (
        <form onSubmit={onSubmit}>
            <label>
                New To-Do
            </label>
            <textarea
                onChange={onChange}
                placeholder='Write your task'
                value={newToDoValue}
            />
            <div className="TodoForm-buttonContainer">
                <button
                    className="TodoForm-button TodoForm-button--cancel"
                    type='button'
                    onClick={onCancel}  
                >
                    Cancelar
                </button>
                <button
                    className="TodoForm-button TodoForm-button--add"
                    type='submit'
                    onClick={onSubmit}
                >
                    Añadir
                </button>
            </div>
        </form>
    )
}