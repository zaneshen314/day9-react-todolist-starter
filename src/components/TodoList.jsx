import TodoGroup from "./TodoGroup";
import TodoGenerator from "./TodoGenerator";
import TodoProgress from "./TodoProgress";
import {Link} from "react-router-dom";
import {useContext, useEffect} from "react";
import {getTodoList} from "../api/todo.js"
import {INIT_TODO} from "../context/todoActions";
import {TodoContext} from "../App";

const TodoList = () => {

    const {dispatch} = useContext(TodoContext);

    useEffect(() => {
        getTodoList().then((todos) => {
            dispatch({type: INIT_TODO, payload: todos});
        })
    }, []);
  return (
    <div className="home-container">
        <h1 className="page-title">Todo List</h1>
        <nav className="nav-links">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/todo-list" className="nav-link">TodoList</Link>
            <Link to="/done-list" className="nav-link">DoneList</Link>
        </nav>
        <TodoGenerator />
        <TodoProgress />
        <TodoGroup />
    </div>
  );
}

export default TodoList