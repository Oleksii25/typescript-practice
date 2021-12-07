import { TodoTypes, TodoState, TodoActions } from "../types/todo";

const initialState: TodoState = {
  todos: [],
};

export const toDoReducer = (
  state = initialState,
  action: TodoActions
): TodoState => {
  const { ADD_TODO, CHANGE_TODO, DELETE_TODO } = TodoTypes;
  switch (action.type) {
    case ADD_TODO:
      return {
        todos: [...state.todos, action.payload],
      };
    case CHANGE_TODO:
      return {
        todos: [
          ...state.todos.filter((todo) => todo.id !== action.payload.id),
          action.payload,
        ],
      };
    case DELETE_TODO:
      return {
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };
    default:
      return state;
  }
};
