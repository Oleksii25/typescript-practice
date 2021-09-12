import { combineReducers } from 'redux';
import {reducer as commentReducer} from './reducers/comments';

const rootReducer = combineReducers({
  comments: commentReducer,
})

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
