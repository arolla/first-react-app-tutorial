import {createStore, Store} from 'redux';
import {ToDoReducer} from './reducers/ToDoReducer';

export type AppState = { todos: string[] };

const store: Store<AppState> = createStore(ToDoReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;
