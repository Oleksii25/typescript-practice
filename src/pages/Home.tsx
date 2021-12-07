import ListOfTodos from "components/ListOfTodos";
import { useDispatch } from "react-redux";

import { FC, useEffect } from "react";
import { useTypeSelector, useActions } from "../hooks";

const HomePage: FC = () => {
  const todos = useTypeSelector((state) => state.todos.todos);
  const { loadTodosAction } = useActions();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadTodosAction);
  }, []);

  return <ListOfTodos todos={todos} />;
};

export default HomePage;
