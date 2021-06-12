import { Reducer } from 'redux';
import {AddTodoAction} from './ToDoListActions';

const initialState = { todos: [] };

export const ToDoReducer: Reducer<string[], AddTodoAction> = (state = initialState.todos, action ) => {
    switch (action.type) {
        case 'ADD_TO_DO':
            return [...state, action.todo];
        default:
            return state;
    }

};
