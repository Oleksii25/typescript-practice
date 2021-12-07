import { EditTodoFormProps } from "components/types";
import { FC, memo, useCallback } from "react";
import { Form } from "semantic-ui-react";

const EditTodoForm: FC<EditTodoFormProps> = ({
  editingTodo,
  setEditingTodo,
}) => {
  const handleUpdate = useCallback(
    (e, { name, value, checked }) => {
      if (editingTodo) {
        name === "title"
          ? setEditingTodo({ ...editingTodo, [name]: value })
          : setEditingTodo({ ...editingTodo, [name]: checked });
      }
    },
    [editingTodo]
  );

  return (
    <Form>
      <Form.Group>
        <Form.Field width={10}>
          <Form.Input
            label="Title"
            value={editingTodo!.title}
            name="title"
            onChange={handleUpdate}
          />
        </Form.Field>
        <Form.Field width={2}>
          <label>Completed</label>
          <Form.Checkbox
            toggle
            name="completed"
            checked={editingTodo!.completed}
            onChange={handleUpdate}
          />
        </Form.Field>
      </Form.Group>
    </Form>
  );
};

export default memo(EditTodoForm);
