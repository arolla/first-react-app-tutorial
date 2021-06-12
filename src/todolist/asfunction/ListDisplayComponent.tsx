import React from 'react';
import {connect} from "react-redux";
import {AppState} from "../../Store";


interface Props {
    items: string[]
}

const mapStateToProps = (state: AppState) => {
    return {
        items: state || []
    }
}

const ListDisplayComponent: React.FC<Props> = ({items = []}) => {

    return <div id="listOfItems">
        emplacement pour ma future liste
        {
            items.map((item: string) => {
                return (<p> - {item}</p>);
            })
        }
    </div>;

}

export default connect(mapStateToProps, null)(ListDisplayComponent);
