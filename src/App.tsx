import React from 'react';
import ItemCreationComponent from './todolist/asfunction/ItemCreationComponent';
import ListDisplayComponent from "./todolist/asfunction/ListDisplayComponent";


const App: React.FC = () => {

    return <div>
        <ItemCreationComponent/>
        <ListDisplayComponent items={[]} />
    </div>
};
export default App;
