import { combineReducers } from "redux";
import textReducer from "./textReducer";
import todosReducer from "./todosReducer";




export default combineReducers({ todos: todosReducer, text: textReducer })

