import { Menu } from "semantic-ui-react";
import { useDispatch } from "react-redux";
import { Link, useLocation } from "react-router-dom";

import { useTypeSelector } from "../hooks/UseTypeSelector";
import { useEffect } from "react";
import { loadTodosAction } from "../redux/actions/todo";

const Navigation: React.FC = () => {
  const { pathname } = useLocation();
  const todos = useTypeSelector((state) => state.todos);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadTodosAction());
  }, []);

  return (
    <Menu>
      <Menu.Item
        active={pathname === "/"}
        color="orange"
        name="home"
        as={Link}
        to="/"
        onClick={() => {}}
      >
        Home
      </Menu.Item>
      <Menu.Item
        active={pathname === "/about"}
        color="orange"
        name="about"
        as={Link}
        to="/about"
        onClick={() => {}}
      >
        About
      </Menu.Item>
      <Menu.Item
        active={pathname === "/blog"}
        color="orange"
        name="blog"
        as={Link}
        to="/blog"
      >
        Blog
      </Menu.Item>
    </Menu>
  );
};

export default Navigation;
