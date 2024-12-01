import {ADD_TODO, EDIT_TODO, INIT_TODO, REMOVE_TODO, TOGGLE_TODO} from "./todoActions";

export const initialState = [
    {id: Date.now(), text: "和Alwyn出去吃饭", done: false},
    {id: Date.now() + 1, text: "跟Don学习React", done: true},
];

export const todoReducer = (state, action) => {
    switch (action.type) {
        case INIT_TODO:
            state = action.payload
            return state;
        case ADD_TODO:
            return [...state, action.payload];
        case TOGGLE_TODO:
            return state.map((todo) =>
                todo.id === action.payload ? {...todo, done: !todo.done} : todo
            );
        case REMOVE_TODO:
            return state.filter((todo) => todo.id !== action.payload);
        case EDIT_TODO:
            return state.map((todo) =>
                todo.id === action.payload.id ? {...todo, text: action.payload.text} : todo
            );
        default:
            return state;
    }
};