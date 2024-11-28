import TodoGroup from "./TodoGroup";
import TodoGenerator from "./TodoGenerator";

const TodoList = () => {
  return (
      <div>

          <h3>Todo List</h3>
          <TodoGroup/>
          <TodoGenerator/>
      </div>
  );
}

export default TodoList