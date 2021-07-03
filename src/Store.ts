import {applyMiddleware, createStore, Store} from 'redux';
import {ToDoReducer} from './reducers/ToDoReducer';
import thunkMiddleware from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';

export type AppState = { todos: string[] };
const middleware = applyMiddleware(thunkMiddleware);
const enhancers = composeWithDevTools(middleware);
const store: Store<AppState> = createStore(ToDoReducer,  enhancers);

export default store;

