import { useContext } from "react";
import { TodoContext } from "../App";
import {Link} from "react-router-dom";

export const DoneList = () => {
    const { state } = useContext(TodoContext);
    const doneList = state.filter(todo => todo.done);

    return (
        <div>
            <div className="home-container">
                <h1 className="page-title">Done List</h1>
                <nav className="nav-links">
                    <Link to="/" className="nav-link">Home</Link>
                    <Link to="/todo-list" className="nav-link">TodoList</Link>
                    <Link to="/done-list" className="nav-link">DoneList</Link>
                </nav>
                {doneList.map((todo) => {
                    return (
                        <div className={"todo-item"} key={todo.id}>
                            <div className={`todo-text`}>{todo.text}</div>
                        </div>
                    );
                })}
            </div>
            <br/>
        </div>
    );
}
