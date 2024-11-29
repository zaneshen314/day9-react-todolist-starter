import { createContext, useReducer } from "react";
import './App.css';

import { initialState, todoReducer } from "./context/todoReducer";
import BaseRouters from "./routers/BaseRouters";
import {Link} from "react-router-dom";

export const TodoContext = createContext();

function App() {
  const [state, dispatch] = useReducer(todoReducer, initialState);

  return (
    <div className="App">
      <TodoContext.Provider value={{ state, dispatch }}>
          <BaseRouters />
      </TodoContext.Provider>
    </div>
  );
}

export default App;
