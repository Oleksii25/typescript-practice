import { Menu } from "semantic-ui-react";
import { Link, useLocation } from "react-router-dom";

const Navigation: React.FC = () => {
  const { pathname } = useLocation();

  return (
    <Menu>
      <Menu.Item
        active={pathname.includes("todos")}
        color="orange"
        name="home"
        as={Link}
        to="/todos/:id"
      >
        Todos
      </Menu.Item>
      <Menu.Item
        active={pathname === "/about"}
        color="orange"
        name="about"
        as={Link}
        to="/about"
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
