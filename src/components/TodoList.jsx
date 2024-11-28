import TodoGroup from "./TodoGroup";
import TodoGenerator from "./TodoGenerator";
import TodoProgress from "./TodoProgress";

const TodoList = () => {
  return (
      <div>
          <h1>Todo List</h1>
          <TodoGroup />
          <TodoGenerator />
          <TodoProgress />
      </div>
  );
}

export default TodoList