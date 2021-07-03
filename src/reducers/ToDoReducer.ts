import { Reducer } from 'redux';
import {AddTodoAction, ListTodoAction} from './ToDoListActions';

const initialState = { todos: [] };

type todoActions = AddTodoAction | ListTodoAction;

export const ToDoReducer: Reducer<string[], todoActions> = (state = initialState.todos, action ) => {
    switch (action.type) {
        case 'ADD_TO_DO':
            return [...state, action.todo];
        case 'INIT_TO_DO_LIST':
            return action.todos;
        default:
            return state;
    }

};

export const fetchTodos = () => async (dispatch, getState) => {
    const response = await fetch('resources/myTodoList.json');
    const todos = await response.json();
    dispatch({ type: 'INIT_TO_DO_LIST', todos: todos });
}
