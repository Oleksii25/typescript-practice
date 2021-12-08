import ListOfTodos from "components/ListOfTodos/ListOfTodos";

import { FC, memo, useEffect } from "react";
import { useTypeSelector, useActions } from "../hooks";
import useTodoUpdateUrl from "hooks/useTodoUpdateUrl";

const TodosPage: FC = () => {
  const todos = useTypeSelector((state) => state.todos.todos);
  const { loadTodosAction } = useActions();
  const [{ todoId }, changeId] = useTodoUpdateUrl();

  useEffect(() => {
    loadTodosAction();
  }, []);

  useEffect(() => {
    if (todos.length) {
      if (isNaN(+todoId) || !todos.some(({ id }) => id === +todoId)) {
        changeId(todos[0].id);
      }
    }
  }, [todos, todoId]);

  return <ListOfTodos todos={todos} />;
};

export default memo(TodosPage);
