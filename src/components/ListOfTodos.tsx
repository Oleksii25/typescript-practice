import { memo, FC } from "react";
import { Segment, List } from "semantic-ui-react";
import { ListOfTodosProps } from "./types/ListOfTodos";

const ListOfTodos: FC<ListOfTodosProps> = ({ todos }) => {
  return (
    <Segment>
      <List>
        {todos.map((todo) => (
          <List.Item key={todo.id}>{todo.title}</List.Item>
        ))}
      </List>
    </Segment>
  );
};

export default memo(ListOfTodos);
