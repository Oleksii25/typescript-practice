import { fetchAllTodos, fetchTodosByUser } from "../../api/todoUrl";
import { TodoTypes, TodoActionTypes, Todo } from "../types/todo";
import { Dispatch } from "redux";

export const loadTodosAction = () => {
  return async (dispatch: Dispatch<TodoActionTypes>) => {
    const todos = await fetchAllTodos();
    dispatch({ type: TodoTypes.LOAD_TODO, payload: todos });
  };
};

export const loadFilteredTodos = (id: number) => {
  return async (dispatch: Dispatch<TodoActionTypes>) => {
    const todos = await fetchTodosByUser(id);
    dispatch({ type: TodoTypes.LOAD_TODO, payload: todos });
  };
};

export const deleteTodo = (id: number) => {
  return (dispatch: Dispatch<TodoActionTypes>) => {
    dispatch({ type: TodoTypes.DELETE_TODO, payload: id });
  };
};

export const updateTodo = (todo: Todo) => {
  return (dispatch: Dispatch<TodoActionTypes>) => {
    dispatch({ type: TodoTypes.CHANGE_TODO, payload: todo });
  };
};
