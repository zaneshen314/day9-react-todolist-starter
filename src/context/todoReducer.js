import {ADD_TODO, REMOVE_TODO, TOGGLE_TODO} from "./todoActions";

export const initialState = [
  {id: Date.now(), text: "the first todo", done: false},
  {id: Date.now() + 1, text: "the second todo", done: false},
];

export const todoReducer = (state, action) => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, { id: Date.now(), text: action.payload, done: false }];
    case TOGGLE_TODO:
      return state.map((todo) =>
          todo.id === action.payload ? { ...todo, done: !todo.done } : todo
      );
    case REMOVE_TODO:
      return state.filter((todo) => todo.id !== action.payload);
    default:
      return state;
  }
};