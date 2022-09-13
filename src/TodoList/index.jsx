import './TodoList.css';

export function TodoList(props){
    return (
        <section>
            <ul className="list">
                {props.children}
            </ul>
        </section>
    )
}