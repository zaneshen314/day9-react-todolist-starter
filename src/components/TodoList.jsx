import TodoGroup from "./TodoGroup";
import TodoGenerator from "./TodoGenerator";
import TodoProgress from "./TodoProgress";

const TodoList = () => {
  return (
      <div>
          <h1>Todo List</h1>
          <nav>
              <ul>
                  <li><a href="/">Home</a></li>
                  <li><a href="/todo-list">TodoList</a></li>
                  <li><a href="/done-list">DoneList</a></li>
              </ul>
          </nav>
          <TodoGroup />
          <TodoGenerator />
          <TodoProgress />
      </div>
  );
}

export default TodoList