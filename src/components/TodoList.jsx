import TodoGroup from "./TodoGroup";
import TodoGenerator from "./TodoGenerator";
import TodoProgress from "./TodoProgress";
import {Link} from "react-router-dom";
import {useContext, useEffect, useState} from "react";
import {getTodoList} from "../api/todo.js"
import {INIT_TODO} from "../context/todoActions";
import {TodoContext} from "../App";

const TodoList = () => {

    const {dispatch} = useContext(TodoContext);

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // 延迟设置加载状态
        const timer = setTimeout(() => {
            getTodoList().then((todos) => {
                dispatch({ type: INIT_TODO, payload: todos });

            }).finally(()=>{
                setLoading(false);
            });
        }, 1000);
        return () => clearTimeout(timer);
    }, [dispatch]);

  return (
    <div className="home-container">
        <h1 className="page-title">Todo List</h1>

        <nav className="nav-links">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/todo-list" className="nav-link">TodoList</Link>
            <Link to="/done-list" className="nav-link">DoneList</Link>
        </nav>

        {loading ? (
            <div className="loading-container">
                <p>Loading...</p>
            </div>
        ) : (
            <>
                <TodoGenerator />
                <TodoProgress />
                <TodoGroup />
            </>
        )}
    </div>

  );
}

export default TodoList