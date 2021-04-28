import React from 'react';
import ItemCreationComponent from './todolist/asfunction/ItemCreationComponent';
import ListDisplayComponent from "./todolist/asfunction/ListDisplayComponent";

interface State {
    items: string[]
};

const App: React.FC = () => {

    const [state, setState] = React.useState<State>({items: [] });

    return <div>
        <ItemCreationComponent onAddItem={ onAddItem(state, setState) } />
        <ListDisplayComponent items={  state.items }/>
    </div>
};

const onAddItem = (state: State, setState) => (userEntry) => {

    if (userEntry) {
        setState( {items: [...state.items, userEntry.item]} );
    }
}

export default App;
