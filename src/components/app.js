import 'materialize-css/dist/css/materialize.min.css';
import React, {Component} from 'react';
import {Route} from 'react-router-dom';
import axios from 'axios';
import Home from './home';
import AddItem from './add_item';
import TodoList from './todo_list';

const BASE_URL = 'http://api.reactprototypes.com';
const API_KEY = '?key=c618_demofed';

class App extends Component{
    constructor(props){
        super(props);

        this.state = {
            items: []
        }
    }

    addItem = async(item) =>{
        try {
            await axios.post(`${BASE_URL}/todos${API_KEY}`, item);

            this.getListData();
        }
        catch(error){
            console.log('Something went wrong: ', error)
        }
    };

    async getListData(){
        try {
            const response = await axios.get(`${BASE_URL}/todos${API_KEY}`);

            this.setState({
                items: response.data.todos
            })
        }
        catch(error){
            console.log('Error: ', error.message);
        }
    }

    // async deleteItem(id){
    //     const response = await axios.delete(`${BASE_URL}/todos/${id + API_KEY}`);
    //     console.log("Response: ", response);
    //     this.getListData();
    // }

    render(){
        console.log('To Do List: ', this.state.items);

        return (
            <div>
                <div className="container">
                    <Route
                        exact path="/"
                        render={props => <Home getList={this.getListData.bind(this)} add={this.addItem.bind(this)} list={this.state.items} {...props}/>
                    }/>
                </div>
            </div>
        )
    }
}

export default App;
