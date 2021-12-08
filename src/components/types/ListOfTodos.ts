import { Todo } from "../../redux/types/todo";
export interface ListOfTodosProps {
  todos: Todo[];
}
export interface TodoParams {
  todoId: string;
}
