import React from 'react';


interface Props {
    items: string[]
}


class ListDisplayComponentAsClass extends React.Component<Props> {

    constructor(props: Props ) {
        super(props);
    }

    render() {
        return <div id="listOfItems">
            emplacement pour ma future liste
            {

                this.props.items.map((item: string) => {
                    return (<p> - {item}</p>);
                })
            }
        </div>;
    };
}

export default ListDisplayComponentAsClass;
