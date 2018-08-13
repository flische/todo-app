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

    addItem = async(item) =>{
        // const {api: { BASE_URL, API_KEY} } = config;
        const { BASE_URL, API_KEY} = config.api;

        try {
            await axios.post(`${BASE_URL}/todos${API_KEY}`, item);

            this.getListData();
        }
        catch(error){
            console.log('Something went wrong: ', error)
        }
    };

    async getListData(){
        const { BASE_URL, API_KEY} = config.api;

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
        return (
            <div className="container">
                    <Switch>
                        <Route
                            exact path="/"
                            render={props => <Home getList={this.getListData.bind(this)} add={this.addItem.bind(this)} list={this.state.items} {...props}/>}
                        />
                        <Route path="/item-details/:item_id" component={ItemDetails}/>
                        <Route component={NotFound}/>
                    </Switch>
            </div>
        )
    }
}

export default App;
