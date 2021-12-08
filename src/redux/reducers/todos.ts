import { TodoTypes, TodoState, TodoActionTypes } from "../types/todo";

const initialState: TodoState = {
  todos: [],
};

export const toDoReducer = (
  state = initialState,
  action: TodoActionTypes
): TodoState => {
  const { ADD_TODO, CHANGE_TODO, DELETE_TODO, LOAD_TODO } = TodoTypes;
  switch (action.type) {
    case LOAD_TODO:
      return {
        todos: action.payload,
      };
    case ADD_TODO:
      return {
        todos: [...state.todos, action.payload],
      };
    case CHANGE_TODO:
      const currentIndex = state.todos.findIndex(
        (todo) => todo.id === action.payload.id
      );
      const copyTodos = state.todos;
      copyTodos.splice(currentIndex, 1, action.payload);

      return {
        todos: copyTodos,
      };
    case DELETE_TODO:
      return {
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };
    default:
      return state;
  }
};
