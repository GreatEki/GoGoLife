import { combineReducers } from 'redux';
import pagesReducer from './pages';
import postReducer from './posts';

const rootReducer = combineReducers({
    pages: pagesReducer,
    posts: postReducer
});

export default rootReducer;
