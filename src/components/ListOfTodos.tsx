import { memo, FC, useState, useCallback } from "react";
import { Segment, List, Button } from "semantic-ui-react";
import { ListOfTodosProps } from "./types";
import { useActions } from "hooks";
import { Todo } from "redux/types/todo";
import EditTodoModal from "./EditModal/EditTodoModal";

const ListOfTodos: FC<ListOfTodosProps> = ({ todos }) => {
  const [editingTodo, setEditingTodo] = useState<Todo | null>(null);
  const { deleteTodo } = useActions();

  console.log(todos);

  const handleDelete = useCallback((id: number): void => {
    deleteTodo(id);
  }, []);

  return (
    <Segment>
      <List>
        {todos.map((todo) => (
          <List.Item key={todo.id}>
            <Segment>
              <h2>{todo.title}</h2>
              <Button.Group>
                <Button
                  content="Delete"
                  color="red"
                  onClick={() => handleDelete(todo.id)}
                />
                <Button.Or />
                <Button
                  content="Edit"
                  primary
                  onClick={() => setEditingTodo(todo)}
                />
              </Button.Group>
            </Segment>
          </List.Item>
        ))}
      </List>
      <EditTodoModal
        editingTodo={editingTodo}
        setEditingTodo={setEditingTodo}
      />
    </Segment>
  );
};

export default memo(ListOfTodos);
