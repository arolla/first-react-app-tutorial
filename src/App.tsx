import React from 'react';
import ItemCreationComponent from './todolist/ItemCreationComponent';
import ListDisplayComponent from "./todolist/ListDisplayComponent";


const App: React.FC = () => (
    <div>
        <ItemCreationComponent/>
        <ListDisplayComponent/>
    </div>
);

export default App;
