interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

export enum TodoTypes {
  LOAD_TODO = "loadTodo",
  ADD_TODO = "addTodo",
  DELETE_TODO = "deleteTodo",
  CHANGE_TODO = "changeTodo",
}

interface LoadTodosAction {
  type: TodoTypes.LOAD_TODO;
  payload: Todo[];
}

interface AddTodosACtion {
  type: TodoTypes.ADD_TODO;
  payload: Todo;
}

interface DeleteTodoAction {
  type: TodoTypes.DELETE_TODO;
  payload: number;
}

interface ChangeTodoAction {
  type: TodoTypes.CHANGE_TODO;
  payload: Todo;
}

export interface TodoState {
  todos: Todo[];
}

export type TodoActionTypes =
  | ChangeTodoAction
  | AddTodosACtion
  | DeleteTodoAction
  | LoadTodosAction;
