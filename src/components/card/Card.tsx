import {Component, FunctionComponent} from 'react';
import './Card.css';

const Card: FunctionComponent = (props) => {
    return (
        <div className={'card'}>
            {props.children}
        </div>
    )
}

export default Card
