import { useContext } from "react";
import { TodoContext } from "../App";
import {Link} from "react-router-dom";

export const DoneList = () => {
    const { state } = useContext(TodoContext);
    const doneList = state.filter(todo => todo.done);

    return (
        <div>
            <h1>Done List</h1>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/todo-list">TodoList</Link>
                <Link to="/done-list">DoneList</Link>
            </nav>
            <br/>
            {doneList.map((todo) => {
                return (
                    <div className={"todo-item"} key={todo.id}>
                        <div className={`todo-text`}>{todo.text}</div>
                    </div>
                );
            })}
        </div>
    );
}
