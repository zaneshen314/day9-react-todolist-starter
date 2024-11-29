import { createContext, useReducer } from "react";
import './App.css';

import { initialState, todoReducer } from "./context/todoReducer";
import Routers from "./routers/BaseRouters";
import BaseRouters from "./routers/BaseRouters";

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
