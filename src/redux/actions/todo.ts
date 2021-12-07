import { LoadTodos } from "../../api/todoUrl";
import { TodoTypes, TodoActionTypes } from "../types/todo";
import { Dispatch } from "redux";

export const loadTodosAction = () => {
  return async (dispatch: Dispatch<TodoActionTypes>) => {
    const todos = await LoadTodos();
    dispatch({ type: TodoTypes.LOAD_TODO, payload: todos });
  };
};
