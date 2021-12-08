import { EditTodoFormProps } from "components/types";
import { FC, memo, useCallback, useEffect, useState } from "react";
import { Form } from "semantic-ui-react";


const EditTodoForm: FC<EditTodoFormProps> = ({
  editingTodo,
  setUpdatedTodo,
  updatedTodo
}) => {

  const handleUpdate = useCallback(
    (e, { name, value, checked }) => {
      if (editingTodo) {
        name === "title"
          ? setUpdatedTodo({ ...updatedTodo, [name]: value })
          : setUpdatedTodo({
              ...updatedTodo,
              [name]: checked,
            });
      }
    },
    [updatedTodo]
  );

  useEffect(() => {
    if(editingTodo) {
      setUpdatedTodo({
        title: editingTodo.title,
        completed: editingTodo.completed,
      });
    }
  }, [editingTodo]);
  

  return (
    <Form>
      <Form.Group>
        <Form.Field width={10}>
          <Form.Input
            label="Title"
            value={updatedTodo?.title || ""}
            name="title"
            onChange={handleUpdate}
          />
        </Form.Field>
        <Form.Field width={2}>
          <label>Completed</label>
          <Form.Checkbox
            toggle
            name="completed"
            checked={updatedTodo?.completed || false}
            onChange={handleUpdate}
          />
        </Form.Field>
      </Form.Group>
    </Form>
  );
};

export default memo(EditTodoForm);
