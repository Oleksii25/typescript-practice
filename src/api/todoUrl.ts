const TODO_ENDPOINT = "https://jsonplaceholder.typicode.com/todos";

export const LoadTodos = () => {
  return fetch(TODO_ENDPOINT).then((response) => response.json());
};
