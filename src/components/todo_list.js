import React, {Component} from 'react';
import TodoItem from './todo_item';

class TodoList extends Component{
    render(){

        const listElements = this.props.list.map( (item) => {
            return <TodoItem key={item._id}
                             id={item._id}
                             title={item.title}
                             complete={item.complete}
                             details={item.details}
                             toggleComplete={this.props.toggleItemComplete}
                    />
        });

        return(
                <ul className="collection with-header">
                    <li className="collection-header center grey lighten-5 teal-text"><h5 className="grey lighten-5">To Do Tasks</h5></li>
                    {listElements}
                </ul>
        )
    }
}

export default TodoList;