import 'materialize-css/dist/css/materialize.min.css';
import React, {Component} from 'react';
import AddItem from './add_item';
import TodoList from './todo_list';
import listData from '../data/todo';

class App extends Component{
    constructor(props){
        super(props);

        this.state = {
            items: []
        }
    }

    componentDidMount(){
        this.getListData();
    }

    addItem(item){
        // we are expecting an item / object with "title" and "details"
        // we need to use an object because we use the properties
        item._id = new Date().getTime(); // set the _id of each item to a time stamp!

        this.setState({
            items: [item, ...this.state.items]
        });
    }

    getListData(){
        // this is where you would call the server for your data //

        this.setState({
            items: listData
        });
    }

    render(){

        return (
            <div>
                <div className="container">
                    <h1 className="center">To Do List</h1>
                    <AddItem add={this.addItem.bind(this)}/>
                    <TodoList list={this.state.items}/>
                </div>
            </div>
        );
    }
}


export default App;
