import React, { useContext } from 'react';
import { TodoContext } from "../App";
import './css/TodoProgress.css';

const TodoProgress = () => {
    const { state } = useContext(TodoContext);

    const totalTodos = state.length;
    const completedTodos = state.filter(todo => todo.done).length;

    const progress = totalTodos === 0 ? 0 : (completedTodos / totalTodos) * 100;

    return (
        <div className="todo-progress-container">
            <h2 className="todo-progress-title">任务进度</h2>
            <progress value={progress} max={100} className="progress-bar" />
            <p className="todo-progress-text">
                {completedTodos} / {totalTodos} 已完成
            </p>
        </div>
    );
}

export default TodoProgress;
