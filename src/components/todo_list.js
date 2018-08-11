import React, {Component} from 'react';

class TodoList extends Component {
    constructor(props){
        super(props);
    }
    render(){

        const listElements = this.props.listData.map( (item) => {
            return (
                <li className="collection-item" key={item._id}>
                    <div className="col s10">
                        {item.title}
                    </div>
                    <button className="btn red darken-2 right-align"
                            onClick={(event)=> this.props.deleteItem(item._id)}
                    >Delete
                    </button>
                </li>
            )
        });

        return(
                <ul className="collection">
                    {listElements}
                </ul>
        )
    }
}

export default TodoList;