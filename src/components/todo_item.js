import React from 'react';
import { Link } from 'react-router-dom';

export default props => {
    // const {id, title, details, complete} = props;
    return (
        <li
            className="collection-item grey lighten-5">
            <Link to={`/item-details/${props.id}`}>
                {props.complete ?
                    <span className="light-green-text text-darken-3 grey lighten-5">
                        {props.title}
                        <i className="right small material-icons light-green-text text-darken-1 grey lighten-5">turned_in</i>
                    </span>
                    :
                    <span className="orange-text text-darken-1 grey lighten-5">
                        {props.title}
                        <i className="right small material-icons orange-text text-darken-1 grey lighten-5">turned_in_not</i>
                    </span>
                }
            </Link>
        </li>
    )
}