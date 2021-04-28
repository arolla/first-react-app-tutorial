import React from 'react';


interface Props {
    items: string[]
}


const ListDisplayComponent : React.FC<Props> = ({items = []}) => {


        return <div id="listOfItems">
            emplacement pour ma future liste
            {
                items.map((item: string) => {
                    return (<p> - {item}</p>);
                })
            }
        </div>;

}

export default ListDisplayComponent;
