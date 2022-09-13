import './TodoItem.css';
import { AiOutlineCheck } from "react-icons/ai";
import { MdDelete } from "react-icons/md";


export function TodoItem(props){
    return (
        <li className="Item">
            <span 
                className={`Icon IconCheck ${props.completed && 'IconCheck--active'}`}
                onClick={props.onComplete}    
            >
                <AiOutlineCheck/>
            </span>

            <p className={`ItemP ${props.completed && 'ItemP--completed'}`}>
                {props.text}
            </p>

            <span 
                className="Icon IconDelete"
                onClick={props.onDelete}
            >
                <MdDelete/>
            </span>
        </li>
    );
}