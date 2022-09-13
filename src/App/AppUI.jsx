import React from "react";
import { ToDoContext } from '../ToDoContext';
import { CreateTodoButton } from "../CreateTodoButton";
import { TodoCounter } from "../TodoCounter";
import { TodoItem } from "../TodoItem";
import { TodoList } from "../TodoList";
import { Modal } from "../Modal";
import { ToDosLoading } from "../ToDosLoading";
import { EmptyToDos } from "../EmptyToDos";
import { ToDosError } from "../ToDosError";
import './AppUI.css'
import { ToDoForm } from "../ToDoForm";
import { Logo } from "../Logo";

export function AppUI() {
    //LLamados a React Context
    const {
        error, loading, toDos, completeToDo, deleteToDo, openModal, setOpenModal
    } = React.useContext(ToDoContext);

    return (
        <React.Fragment>

            <Logo />

            {
                (!loading && !toDos.length) 
                ? 
                    <EmptyToDos/> 
                :

                    (<section> <TodoCounter/> </section>)
            }
            
            {error && <ToDosError error={error}/>}

            {loading && <ToDosLoading/>}
            
            <TodoList>
                {toDos.map(toDo => (
                    <TodoItem 
                        key={toDo.text} 
                        text={toDo.text}
                        completed={toDo.completed}
                        onComplete={() => completeToDo(toDo.text)}
                        onDelete={() => deleteToDo(toDo.text)}
                    />
                ))}
            </TodoList>

            {!!openModal && (
                <Modal>
                    <ToDoForm />
                </Modal>
            )}

            <CreateTodoButton setOpenModal={setOpenModal}/>
        </React.Fragment>
    );
}