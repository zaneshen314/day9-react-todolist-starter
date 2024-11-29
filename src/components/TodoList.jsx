import TodoGroup from "./TodoGroup";
import TodoGenerator from "./TodoGenerator";
import TodoProgress from "./TodoProgress";
import {Link} from "react-router-dom";

const TodoList = () => {
  return (
      <div>
          <h1>Todo List</h1>
          <nav>
              <Link to="/">Home</Link>
              <Link to="/todo-list">TodoList</Link>
              <Link to="/done-list">DoneList</Link>
          </nav>
          <TodoGroup />
          <TodoGenerator />
          <TodoProgress />
      </div>
  );
}

export default TodoList