import { Action } from "redux";

export type ADD_TO_DO = 'ADD_TO_DO';

export type AddTodoAction = {
    todo: string
} & Action<ADD_TO_DO>;


const addTodo = (todo: string): AddTodoAction => ({
    type: 'ADD_TO_DO',
    todo
});

export default  {addTodo};
