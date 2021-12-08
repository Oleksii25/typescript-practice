import _ from "lodash";
import { FC, memo, useCallback, useState } from "react";
import { Button, Modal } from "semantic-ui-react";
import { EditTodoModalProps } from "../types";
import EditTodoForm from "./EditTodoForm";
import { useActions } from "hooks";
import { EditModalValuesState } from "./types/editModal";

const EditTodoModal: FC<EditTodoModalProps> = ({
  editingTodo,
  setEditingTodo,
}) => {
  const { updateTodo } = useActions();
  const [updatedTodo, setUpdatedTodo] = useState<EditModalValuesState>({});

  const handleEdit = useCallback((): void => {
    if (!_.isEmpty(updatedTodo) && editingTodo) {
      updateTodo({ ...editingTodo, ...updatedTodo });
    }
    setEditingTodo(null);
    setUpdatedTodo({});
  }, [editingTodo, updatedTodo]);

  const canSave = useCallback((): boolean => {
    return (
      ("completed" in updatedTodo &&
        updatedTodo.completed !== editingTodo?.completed) ||
      (Boolean(updatedTodo.title) && updatedTodo.title !== editingTodo?.title)
    );
  }, [updateTodo]);

  return (
    <Modal open={Boolean(editingTodo)}>
      <Modal.Header>Edit ToDo</Modal.Header>
      <Modal.Content>
        <EditTodoForm
          editingTodo={editingTodo}
          setUpdatedTodo={setUpdatedTodo}
          updatedTodo={updatedTodo}
        />
      </Modal.Content>
      <Modal.Actions>
        <Button.Group>
          <Button
            content="Save"
            color="green"
            onClick={handleEdit}
            disabled={!canSave()}
          />
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
