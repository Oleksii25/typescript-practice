import { useHistory, useParams } from "react-router";
import { History } from "history";
import { TodoParams } from "components/types";

const updateId = (history: History, params: TodoParams): any[] => {
  const changeId = (id: number) => {
    history.push(`/todos/${id}`);
  };

  return [params, changeId];
};

export default () => {
  const history = useHistory();
  const params = useParams();

  return updateId(history, params as TodoParams);
};
