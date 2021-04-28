import React from 'react';

interface State {
    item: string
}

interface Props {
    onAddItem: (item: string) => void;
}

// en tant que classe

class ItemCreationComponentAsClass extends React.Component<{}, State> {
    constructor(props: any) {
        super(props);
        this.state = { item: '' };
        this.setItemValue = this.setItemValue.bind(this);
        this.addItem = this.addItem.bind(this);
    }

     addItem(event: Event) { event.preventDefault(); };
     setItemValue(event: Event)  {
         if (event) {
             const fieldValue: string = event.target.value;
             this.setState({item : fieldValue});
             console.log({item : fieldValue});
         }
     };

    render() {
        return <form id="todolist" onSubmit={ this.addItem }>
            <label htmlFor="item">Je dois faire : </label>
            <input type="text" name="item" onChange={this.setItemValue }/>
            <button type="submit"> ok</button>
        </form>;
        };
}

export default ItemCreationComponentAsClass;
