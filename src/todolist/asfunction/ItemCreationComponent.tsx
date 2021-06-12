import React from 'react';
import {connect} from 'react-redux';
import actionsCreator from '../../reducers/ToDoListActions';

interface State {
    item: string
}

interface Props {
    addItem: (item: string) => void;
}

const mapDispatchToProps = (dispatch) => {
    return {
        addItem: (todo: string) => {
            dispatch(actionsCreator.addTodo(todo))
        },
    }
}


// en tant que fonction
const ItemCreationComponent: React.FC<Props> = ({addItem}) => {

    const [state, setState] = React.useState<State>({item: ''});

    return <form id="todolist" onSubmit={onAddItem(state, addItem)}>
        <label htmlFor="item">Je dois faire : </label>
        <input type="text" name="item" onChange={setItemValue(setState)}/>
        <button type="submit"> ok</button>
    </form>;
}

const onAddItem = (state, addItem) => (event: Event) => {
    event.preventDefault();
    if(state && state.item && addItem ) {
        addItem(state.item);
    }

};

const setItemValue = (setLocalState: any) => (event: Event) => {
    if (event) {
        const fieldValue: string = event.target.value;
        setLocalState({item: fieldValue});
    }
};


export default connect(null, mapDispatchToProps)(ItemCreationComponent);
