import ListOfTodos from "components/ListOfTodos";

import { FC, useEffect } from "react";
import { useTypeSelector, useActions } from "../hooks";

const HomePage: FC = () => {
  const todos = useTypeSelector((state) => state.todos.todos);
  const { loadTodosAction } = useActions();

  useEffect(() => {
    loadTodosAction();
  }, []);

  return <ListOfTodos todos={todos} />;
};

export default HomePage;
