import React, { useState, useContext } from 'react';
import { TodoContext } from '../App';
import TodoItem from './TodoItem';
import Pagination from '../utils/Pagination';

const TodoGroup = () => {
    const { state } = useContext(TodoContext);

    // 默认每页显示的 todo 数量
    const [todosPerPage, setTodosPerPage] = useState(3);

    // 计算当前页的 todos
    const [currentPage, setCurrentPage] = useState(1);
    const indexOfLastTodo = currentPage * todosPerPage;
    const indexOfFirstTodo = indexOfLastTodo - todosPerPage;
    const currentTodos = state.slice(indexOfFirstTodo, indexOfLastTodo);

    // 处理分页变化
    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    return (
        <div className="todo-group">
            {/* 渲染当前页的 todos */}
            {currentTodos.map((todo) => (
                <TodoItem key={todo.id} todo={todo} />
            ))}

            {/* 分页组件 */}
            <Pagination
                totalItems={state.length}
                itemsPerPage={todosPerPage}
                onPageChange={handlePageChange}
            />
        </div>
    );
};

export default TodoGroup;
