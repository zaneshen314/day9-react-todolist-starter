import { useContext } from "react";
import { TodoContext } from "../App";

export const DoneList = () => {
    const { state } = useContext(TodoContext);
    const doneList = state.filter(todo => todo.done);

    return (
        <div>
            <h1>Done List</h1>
            <br/>
            <nav>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/todo-list">TodoList</a></li>
                    <li><a href="/done-list">DoneList</a></li>
                </ul>
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
