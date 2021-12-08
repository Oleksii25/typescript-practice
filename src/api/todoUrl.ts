const TODO_ENDPOINT = "https://jsonplaceholder.typicode.com/todos";

export const fetchAllTodos = () => {
  return fetch(TODO_ENDPOINT).then((response) => response.json());
};

export const fetchTodosByUser = (id:number) => {
  return fetch(`${TODO_ENDPOINT}?userId=${id}`).then((response) => response.json());
};
