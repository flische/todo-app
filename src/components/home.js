import React, {Component} from 'react';
import AddItem from './add_item';
import TodoList from './todo_list';

class Home extends Component{
    componentDidMount(){
        this.props.getList();
    }
    render(){
        const {add, list, toggleComplete} = this.props;
        console.log('home props: ', this.props);
        return (
            <div>
                <h1 className="center teal-text darken-4">To Do List</h1>
                <AddItem add={add}/><br/>
                <TodoList toggleComplete={toggleComplete} list={list}/>
            </div>
        )
    }
}

export default Home;