import { Todo } from "redux/types/todo";

export interface EditTodoModalProps {
  editingTodo: Todo | null;
  setEditingTodo: (todo: Todo | null) => void;
}
