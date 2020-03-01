import { combineReducers } from "redux";

import todo from "./todo/todo.reducer";

const rootReducer = combineReducers({
  todo
});

export default rootReducer;
