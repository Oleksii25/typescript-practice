import { memo, FC, useState, useCallback, useEffect } from "react";
import { Segment, List, Button } from "semantic-ui-react";
import { ListOfTodosProps } from "../types";
import CN from "classnames";
import { useActions, UseTodoUpdateUrl } from "hooks";
import { Todo } from "redux/types/todo";
import EditTodoModal from "../EditModal/EditTodoModal";
import "./styles.less";
import { useHistory, useParams } from "react-router";
import { TodoParams } from "components/types/ListOfTodos";
import useTodoUpdateUrl from "hooks/useTodoUpdateUrl";

const ListOfTodos: FC<ListOfTodosProps> = ({ todos }) => {
  const [editingTodo, setEditingTodo] = useState<Todo | null>(null);
  const { deleteTodo } = useActions();
  const [{todoId}, changeId] = useTodoUpdateUrl();

  const handleDelete = useCallback((id: number): void => {
    deleteTodo(id);
  }, []);

  const handleChangeActiveTodo = useCallback((id: number): void => {
    changeId(id);
  }, []);

  return (
    <Segment>
      <List className="todo-list">
        {todos.map((todo) => (
          <List.Item
            key={todo.id}
            className="todo-list__item"
            onClick={() => handleChangeActiveTodo(todo.id)}
          >
            <Segment
              className={CN("todo-list__segment", {
                active: todo.id === Number(todoId),
                completed: todo.completed,
              })}
            >
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
