import React, {Component} from 'react';
import TodoItem from './todo_item';

class TodoList extends Component{
    render(){

        const listElements = this.props.list.map( (item) => {
            return <TodoItem key={item._id} title={item.title}/>
            // return (
            //     <li className="collection-item" key={item._id}>
            //         <div className="col s10">
            //             {item.title}
            //         </div>
            //     </li>
            // )
        });

        return(
                <ul className="collection">
                    {listElements}
                </ul>
        )
    }
}

export default TodoList;