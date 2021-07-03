import React from 'react';
import {connect} from "react-redux";
import {AppState} from "../../Store";
import {fetchTodos} from "../../reducers/ToDoReducer";


interface Props {
    items: string[];
    initList: (() => string[]);
}

const mapStateToProps = (state: AppState) => {
    return {
        items: state || []
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
       initList: () => { dispatch(fetchTodos()) }
    }
}

const ListDisplayComponent: React.FC<Props> = ({items = [], initList }) => {
    React.useEffect(() => {
        initList();
    }, []);

    return <div id="listOfItems">
        emplacement pour ma future liste
        {
            items.map((item: string) => {
                return (<p> - {item}</p>);
            })
        }
    </div>;

}

export default connect(mapStateToProps, mapDispatchToProps)(ListDisplayComponent);
