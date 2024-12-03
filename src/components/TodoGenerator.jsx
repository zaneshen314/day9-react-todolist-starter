import {useContext, useEffect, useState} from "react";
import {TodoContext} from "../App";
import {ADD_TODO, INIT_TODO} from "../context/todoActions";
import "./css/TodoGenerator.css";
import {addTodo, getTodoList} from "../api/todo";
import { message } from 'antd';

const TodoGenerator = () => {
  const [text, setText] = useState("")
  const { dispatch } = useContext(TodoContext);

  const handleChange = (event) => {
    setText(event.target.value)
  }
  const handleAdd = async () => {
    if (!text.trim()) {
      message.error('Todo不能为空');
      return;
    }

    if (text.length > 255) {
      message.error('Todo 内容不能超过 255 个字符!');
      return;
    }
    if (text.trim()) {
      try {
        const newTodo = await addTodo({id:null ,text: text, done: false });
        dispatch({ type: ADD_TODO, payload: newTodo });
        setText(""); // 清空输入框
      } catch (error) {
        console.error("添加 Todo 失败:", error);
      }
    }
  };

  return(
      <div className={"todo-generator-wrapper"}>
        <input value={text} onChange={handleChange}/>
        <button onClick={handleAdd}>add</button>
      </div>
  );
}

export default TodoGenerator;