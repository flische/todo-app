import '../../src/assets/css/app.css';
import 'materialize-css/dist/css/materialize.min.css';
import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';
import Home from './home';
import ItemDetails from './item_details';
import NotFound from './404';
import config from '../config';
import axios from 'axios';


class App extends Component{
    constructor(props){
        super(props);

        this.state = {
            items: []
        }
    }

    async addItem(item){
        // const {api: { BASE_URL, API_KEY} } = config;
        const { BASE_URL, API_KEY} = config.api;

        try {
            await axios.post(`${BASE_URL}/todos/${API_KEY}`, item);

            this.getListData();
        }
        catch(error){
            console.log('Something went wrong: ', error)
        }
    }

    async toggleItemComplete(id){
        const { BASE_URL, API_KEY } = config.api;

        try {
            const response = await axios.put(`${BASE_URL}/todos/${id + API_KEY}`);

            return response.data.todo;
        }
        catch(error){
            console.log('Toggle Complete Error: ', error.message);
        }

        this.getListData();
    }

    async deleteItem(id){
        const { BASE_URL, API_KEY} = config.api;

        try {
            const response = await axios.delete(`${BASE_URL}/todos/${id + API_KEY}`);
            console.log("Delete Response: ", response);
        }
        catch(error){
            console.log('Error: ', error.message);
        }

        this.getListData();
    }

    async getListData(){
        const { BASE_URL, API_KEY} = config.api;

        try {
            const response = await axios.get(`${BASE_URL}/todos/${API_KEY}`);

            this.setState({
                items: response.data.todos
            });

            console.log("todos from App component", response.data);
        }
        catch(error){
            console.log('Error: ', error.message);
        }
    }

    render(){
        return (
            <div className="container">
                <Switch>
                    <Route
                        exact path="/"
                        render={props => {
                            return <Home
                                getList={this.getListData.bind(this)}
                                add={this.addItem.bind(this)}
                                toggleComplete={this.toggleItemComplete.bind(this)}
                                list={this.state.items} {...props}/>
                        }}
                    />
                    <Route
                        path="/item-details/:item_id"
                        render={ routeProps => {
                            return <ItemDetails
                                toggleComplete={this.toggleItemComplete.bind(this)}
                                delete={this.deleteItem.bind(this)} {...routeProps}/>
                        }}
                    />
                    <Route component={NotFound}/>
                </Switch>
            </div>
        )
    }
}

export default App;
