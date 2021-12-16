import React from "react";
import { render, screen } from "@testing-library/react";
import ListOfTodos from "./ListOfTodos.tsx";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../../redux/store.ts";

const todos = [
  {
    userId: 1,
    id: 1,
    title: "delectus aut autem",
    completed: false,
  },
  {
    userId: 1,
    id: 2,
    title: "quis ut nam facilis et officia qui",
    completed: false,
  },
  {
    userId: 1,
    id: 3,
    title: "fugiat veniam minus",
    completed: false,
  },
];

describe("ListOfTodos", () => {
  test("ListOfTodos is rendered", () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <BrowserRouter>
          <ListOfTodos todos={todos} />
        </BrowserRouter>
      </Provider>
    );;
    const wrapper = getByTestId("test");
    expect(wrapper).toBeInTheDocument();
  });

  test("ListOfTodos maps items from props", () => {
    const { queryAllByRole } = render(
      <Provider store={store}>
        <BrowserRouter>
          <ListOfTodos todos={todos} />
        </BrowserRouter>
      </Provider>
    );
    const item = queryAllByRole("heading");
    expect(item).toHaveLength(3);
  });

  test('Item should be deleted after click on delete button', () => {
    const { queryAllByRole } = render(
      <Provider store={store}>
        <BrowserRouter>
          <ListOfTodos todos={todos} />
        </BrowserRouter>
      </Provider>
    );
    
  })
});
