import ListOfTodos from "components/ListOfTodos/ListOfTodos";

import { FC, memo, useEffect } from "react";
import { useTypeSelector, useActions } from "../hooks";
import { useParams, useHistory } from "react-router";
import { TodoParams } from "components/types";

const TodosPage: FC = () => {
  const todos = useTypeSelector((state) => state.todos.todos);
  const { loadTodosAction } = useActions();
  const { todoId } = useParams<TodoParams>();
  const { push } = useHistory();

  useEffect(() => {
    loadTodosAction();
  }, []);

  useEffect(() => {
    if(todos.length) {
      if (isNaN(+todoId) || !todos.some(({id}) => id === +todoId)) {
        const path = `/todos/${todos[0].id}`;
        push(path);
      }
    }
  }, [todos, todoId]);

  return <ListOfTodos todos={todos} />;
};

export default memo(TodosPage);
