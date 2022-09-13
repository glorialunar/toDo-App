import React from 'react';
import { useLocalStorage } from './UseLocalStorage'

//Creamos el contexto para que nos regrese dos componentes:provider(proveedor) y consumer(consumidor)
const ToDoContext = React.createContext();

function ToDoProvider(props) {
    //Traemos todo el estado y funciones de nuestra app que queremos que sean globales
    const {
        item: toDos, 
        saveItem: saveToDos,
        loading,
        error
    } = useLocalStorage();
    const [ openModal, setOpenModal ] = React.useState(false);

    const completedToDos = toDos.filter(toDo => !!toDo.completed).length;
    const totalToDos = toDos.length;

    console.log(toDos);

    //Agrega nuevos ToDos en el nuevo Modal con ayuda del ToDoForm
    const addToDo = (text) => {
        const newToDos = [...toDos];
        newToDos.push({
            completed: false,
            text,
        });
        saveToDos(newToDos);
    };


    // Verifica el index del item y cuando lo encuentra, marca como completada latarea. Este método se llama cuando se le hace clic al "boton" de check
    const completeToDo = (text) => {
        const toDoIndex = toDos.findIndex(toDo => toDo.text === text);
        const newToDos = [...toDos];
        newToDos[toDoIndex].completed = true;
        saveToDos(newToDos);
    };

    //  Verifica el index del item y cuando lo encuentra, elimina la tarea. Estemétodo se llama cuando se le hace clic al "boton" de eliminar en ToDoItem
    const deleteToDo = (text) => {
        const toDoIndex = toDos.findIndex(toDo => toDo.text === text);
        const newToDos = [...toDos];
        newToDos.splice(toDoIndex, 1);
        saveToDos(newToDos);
    };

    // Retorna el PROVEEDOR con nuestro contexto en la etiqueta value, que recibirá a toda la app. Por eso necesitamos la prop children
    return (
        <ToDoContext.Provider value = {{
            toDos,
            loading,
            error, 
            totalToDos,
            completedToDos, 
            addToDo,
            completeToDo,
            deleteToDo,
            openModal,
            setOpenModal
        }}>
            {props.children}
        </ToDoContext.Provider>
    );
}

export {ToDoContext, ToDoProvider}