import 'materialize-css/dist/css/materialize.min.css';
import React, {Component} from 'react';
import axios from 'axios';
import AddItem from './add_item';
import TodoList from './todo_list';
import listData from '../data/todo';

const BASE_URL = 'http://api.reactprototypes.com';
const API_KEY = '?key=c618_demofed';

class App extends Component{
    constructor(props){
        super(props);

        this.state = {
            listData: listData
        }
    }

    componentDidMount(){
        this.getListData();
    }

    async addItem(item){
        try {
            await axios.post(`${BASE_URL}/todos${API_KEY}`, item);

            this.getListData();
        }
        catch(error){
            console.log('Something went wrong: ', error)
        }
    }

    async getListData(){
        try {
            const response = await axios.get(`${BASE_URL}/todos${API_KEY}`);

            this.setState({
                listData: response.data.todos
            })
        }
        catch(error){
            console.log('Error: ', error.message);
        }
    }

    async deleteItem(id){
        const response = await axios.delete(`${BASE_URL}/todos/${id + API_KEY}`);
        console.log("Response: ", response);
        this.getListData();
    }

    render(){
        const {listData} = this.state;
        return (
            <div>
                <div className="container">
                    <h1 className="center">To Do List</h1>
                    <AddItem add={this.addItem.bind(this)}/>
                    <TodoList list={listData} deleteItemCallback={this.deleteItem.bind(this)}/>
                </div>
            </div>
        )
    }
}

export default App;
