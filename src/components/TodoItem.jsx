import "./TodoItem.css";
import {TodoContext} from "../App";
import {useContext} from "react";


const TodoItem = ({todo}) => {
    const {dispatch} = useContext(TodoContext);

    const handleToggleTodo = () => {
        dispatch({type: "TOGGLE_TODO", payload: todo.id});
    };

    return (
        <div className={"todo-item"}>
            <div className={`todo-text ${todo.done ? "done" : ""}`} onClick={handleToggleTodo}>{todo.text}</div>
        </div>
    );
}

export default TodoItem;