import { FC, memo, useCallback } from "react";
import { Button, Modal } from "semantic-ui-react";
import { EditTodoModalProps } from "../types";
import EditTodoForm from "./EditTodoForm";
import { useActions } from "hooks";

const EditTodoModal: FC<EditTodoModalProps> = ({
  editingTodo,
  setEditingTodo,
}) => {
  const { updateTodo } = useActions();

  const handleEdit = useCallback((): void => {
    editingTodo && updateTodo(editingTodo);
    setEditingTodo(null);
  }, [editingTodo]);

  return (
    <Modal open={Boolean(editingTodo)}>
      <Modal.Header>Edit ToDo</Modal.Header>
      <Modal.Content>
        <EditTodoForm
          editingTodo={editingTodo}
          setEditingTodo={setEditingTodo}
        />
      </Modal.Content>
      <Modal.Actions>
        <Button.Group>
          <Button content="Save" color="green" onClick={handleEdit} />
          <Button.Or />
          <Button
            content="Cancel"
            color="red"
            onClick={() => setEditingTodo(null)}
          />
        </Button.Group>
      </Modal.Actions>
    </Modal>
  );
};

export default memo(EditTodoModal);
