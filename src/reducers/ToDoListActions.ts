import { Action } from "redux";

export type ADD_TO_DO = 'ADD_TO_DO';

export type AddTodoAction = {
    todo: string
} & Action<ADD_TO_DO>;


const addTodo = (todo: string): AddTodoAction => ({
    type: 'ADD_TO_DO',
    todo
});

export type INIT_TO_DO_LIST = 'INIT_TO_DO_LIST' ;
export type ListTodoAction = {
    todos: string[]
} & Action<INIT_TO_DO_LIST>;


const fetchTodos = (): ListTodoAction => ({
    type: 'INIT_TO_DO_LIST',
    todos: []
});

export default  {addTodo, fetchTodos };
