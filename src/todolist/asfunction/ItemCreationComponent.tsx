import React from 'react';

interface State {
    item: string
}

interface Props {
    onAddItem: (item: string) => void;
}

// en tant que fonction
const ItemCreationComponent: React.FC<Props>  = ({ onAddItem }) => {

    const [state, setState] = React.useState<State>({ item: '' });


    return <form id="todolist" onSubmit={ addItem(state, onAddItem) }>
        <label htmlFor="item">Je dois faire : </label>
        <input type="text" name="item" onChange={ setItemValue(setState) }/>
        <button type="submit"> ok</button>
    </form>;
}

const setItemValue = (setState: any) => (event: Event) => {
    if (event) {
        const fieldValue: string = event.target.value;
        setState({item : fieldValue});
    }
};

const addItem = (state: State, onAddItem ) => (event: Event) => {
    event.preventDefault();
    if (onAddItem) {
        onAddItem({ item: state.item });
    }
};

export default ItemCreationComponent;
