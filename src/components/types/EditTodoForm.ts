import { Todo } from "redux/types/todo";

export interface EditTodoFormProps {
  editingTodo: Todo | null;
  setEditingTodo: (todo: Todo) => void;
}
