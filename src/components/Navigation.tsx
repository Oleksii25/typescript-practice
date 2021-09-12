import { Menu } from "semantic-ui-react";
import { useDispatch } from 'react-redux';
import { Link, useLocation } from "react-router-dom";
import { add, remove } from '../redux/actions/actions';
import { collapseTextChangeRangesAcrossMultipleVersions } from "typescript";

const Navigation = () => {
  const { pathname } = useLocation();
  const dispatch = useDispatch();
  
  const addHandler = (): void =>  {
    dispatch(add(1))
  };

  const removeHandler = () => {
    dispatch(remove(1));
  };

  return (
    <Menu>
      <Menu.Item
        active={pathname === "/"}
        color="orange"
        name="home"
        as={Link}
        to="/"
        onClick={addHandler}
      >
        Home
      </Menu.Item>
      <Menu.Item
        active={pathname === "/about"}
        color="orange"
        name="about"
        as={Link}
        to="/about"
        onClick={removeHandler}
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
