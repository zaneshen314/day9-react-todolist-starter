import "./css/TodoItem.css";
import {TodoContext} from "../App";
import {useContext} from "react";
import {REMOVE_TODO, TOGGLE_TODO} from "../context/todoActions";


const TodoItem = ({todo}) => {
    const {dispatch} = useContext(TodoContext);

    const handleToggleTodo = () => {
        dispatch({type: TOGGLE_TODO, payload: todo.id});
    };
    const removeTodo = () => {
        dispatch({ type: REMOVE_TODO, payload: todo.id })
    };
    return (
        <div className={"todo-item"}>
            <div className={`todo-text ${todo.done ? "done" : ""}`} onClick={handleToggleTodo}>{todo.text}</div>
            <button onClick={removeTodo} className="delete-btn">X</button>
        </div>
    );
}

export default TodoItem;