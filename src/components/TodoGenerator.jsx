import { useContext, useState } from "react";
import {TodoContext} from "../App";
import {ADD_TODO} from "../context/todoActions";
import "./css/TodoGenerator.css";
const TodoGenerator = () => {
  const [text, setText] = useState("")
  const { dispatch } = useContext(TodoContext);

  const handleChange = (event) => {
    setText(event.target.value)
  }

  const handleAdd = () => {
    if (text.trim()) {
      dispatch({ type: ADD_TODO, payload: text });
      setText('');
    }
  }

  return(
      <div className={"todo-generator-wrapper"}>
        <input value={text} onChange={handleChange}/>
        <button onClick={handleAdd}>add</button>
      </div>
  );
}

export default TodoGenerator;