import { createStore } from 'redux';
import { ToDoReducer } from './reducers/ToDoReducer';

const store = createStore(ToDoReducer);

export default store;
