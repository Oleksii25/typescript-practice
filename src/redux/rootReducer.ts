import { combineReducers } from "redux";
import { toDoReducer } from "./reducers/todos";

const rootReducer = combineReducers({
  todos: toDoReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
