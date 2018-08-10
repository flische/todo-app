import 'materialize-css/dist/css/materialize.min.css';
import React, {Component} from 'react';
import AddItem from './add_item';
import TodoList from './todo_list';
import listData from '../data/todo';
import axios from 'axios';

const BASE_URL = 'http://api.reactprototypes.com';
const API_KEY = '?key=c618_demofed';

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

    async addItem(item){
        // we are expecting an item / object with "title" and "details"
        // we need to use an object because we use the properties
        try {
            await axios.post(`${BASE_URL}/todos${API_KEY}`, item);

            this.getListData();
        }
        catch(error){
            console.log('Something went wrong: ', error)
        }

        // item._id = new Date().getTime(); // set the _id of each item to a time stamp!
        //
        // this.setState({
        //     items: [item, ...this.state.items]
        // });
    }

    async getListData(){
        // this is where you would call the server for your data //
        const response = await axios.get(`${BASE_URL}/todos${API_KEY}`);

        this.setState({
            items: response.data.todos
        });
    }

    // Above function using axios with async and await is the same as below//

    // getListData(){
    //     axios.get(`${BASE_URL}/todos${API_KEY}`).then( (response) => {
    //             this.setState({
    //                 items: response.data.todos
    //             });
    //     }).catch((error) => {
    //         console.log('There was an error!:', error.message);
    //     });
    // }

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
