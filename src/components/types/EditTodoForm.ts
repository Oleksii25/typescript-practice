import { Todo } from "redux/types/todo";
import { EditModalValuesState } from "components/EditModal/types/editModal";

export interface EditTodoFormProps {
  editingTodo: Todo | null;
  setUpdatedTodo: (todo: EditModalValuesState) => void;
  updatedTodo: EditModalValuesState;
}
