import React, { useState, useContext } from "react";
import Modal from "react-modal"; // 确保导入 Modal
import "./css/TodoItem.css";
import { TodoContext } from "../App";
import {EDIT_TODO, REMOVE_TODO, TOGGLE_TODO} from "../context/todoActions";
import { update, deleteById } from "../api/todo";

Modal.setAppElement('#root');

const TodoItem = ({ todo }) => {
    const { dispatch } = useContext(TodoContext);
    const [isEditing, setIsEditing] = useState(false);
    const [newText, setNewText] = useState(todo.text);

    const handleToggleTodo = async () => {
        await update({ id: todo.id, text: todo.text, done: !todo.done });
        dispatch({ type: TOGGLE_TODO, payload: todo.id });
    };

    const removeTodo = async () => {
        await deleteById(todo.id);
        dispatch({ type: REMOVE_TODO, payload: todo.id });
    };

    const handleEditClick = () => {
        setNewText(todo.text);
        setIsEditing(true);
    };

    const handleSaveEdit = async () => {
        if (newText.trim() && newText !== todo.text) {
            await update({ id: todo.id, text: newText, done: todo.done });

            dispatch({ type: EDIT_TODO, payload: { id: todo.id, text: newText } });
        }
        setIsEditing(false);
    };

    const handleCancelEdit = () => {
        setNewText(todo.text);
        setIsEditing(false);
    };

    return (
        <div className="todo-item">
            <div className={`todo-text ${todo.done ? "done" : ""}`} onClick={handleToggleTodo}>
                {todo.text}
            </div>
            <button onClick={removeTodo} className="delete-btn">X</button>
            <button onClick={handleEditClick} className="edit-btn">✎</button>

            <Modal
                isOpen={isEditing}
                onRequestClose={handleCancelEdit}
                contentLabel="Edit Todo"
                className="modal"
                overlayClassName="overlay"
            >
                <h2>编辑任务</h2>
                <input
                    type="text"
                    value={newText}
                    onChange={(e) => setNewText(e.target.value)}
                    autoFocus
                />
                <div className="modal-actions">
                    <button onClick={handleSaveEdit} className="save-btn">保存</button>
                    <button onClick={handleCancelEdit} className="cancel-btn">取消</button>
                </div>
            </Modal>
        </div>
    );
};

export default TodoItem;
