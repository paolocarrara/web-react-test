import React, {FunctionComponent} from 'react';
import './ListItem.css';

const ListItem: FunctionComponent = (props) => {

    return (
        <div className={'list-item'}>
            {props.children}
        </div>
    )
}

export default ListItem
