import React from 'react';

const ItemCreationComponent: React.FC = () => {

    return (<form id="todolist">
        <label htmlFor="item">Je dois faire : </label>
        <input type="text" name="item"/>
        <button type="submit"> ok</button>
    </form>);
}

export default ItemCreationComponent;
