import { useDispatch } from "react-redux";

import { bindActionCreators } from "redux";
import * as TodoActionCreators from '../redux/actions/todo';

export const useActions = () => {
  const dispatch = useDispatch();
  return bindActionCreators(TodoActionCreators, dispatch);
}