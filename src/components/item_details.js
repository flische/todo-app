import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import config from '../config';


class ItemDetails extends Component{

    state = {
        itemDetails: {}
    };

    async componentDidMount(){
        // console.log('item details props: ', this.props.match.params);

        const { item_id } = this.props.match.params;
        const { BASE_URL, API_KEY } = config.api;

        // http://api.reactprototypes.com/todos/a5899sdfgh8232?key=apiKey;
        const response = await axios.get(`${BASE_URL}/todos/${item_id + API_KEY}`);

        this.setState({
            itemDetails: response.data.todo
        });
    }

    async handleToggleComplete(){

        const todoItem = await this.props.toggleComplete(this.state.itemDetails._id);

        console.log("item details Toggle Complete todo item: ", todoItem);

        this.setState({
            itemDetails: todoItem
        });

    }

    async handleDelete(){
        console.log('Delete item: ', this.state.itemDetails._id);

        await this.props.delete(this.state.itemDetails._id);

        this.props.history.push('/');
    }

    render(){
        const {itemDetails} = this.state;

        console.log("Item Details", itemDetails);

        if(!itemDetails){
            return <h1 className="grey-text">Loading...</h1>;
        }

        return (
            <div className="">
                <h1 className="center indigo-text darken-3">Item Details</h1><br/>
                <div className="row card-panel indigo lighten-5">
                    <h4 className="center indigo lighten-5"><b className="indigo lighten-5 indigo-text">Title:</b> {itemDetails.title}</h4><br/>
                    <h5 className="indigo lighten-5"><b className="indigo lighten-5 indigo-text">Details:</b> {itemDetails.details}</h5><br/>
                </div>
                <div className="row">
                    <div className="col s4 center">
                        {itemDetails.complete ?
                            <button
                                className="btn orange darken-2"
                                onClick={this.handleToggleComplete.bind(this)}
                                >Mark as Incomplete
                            </button>
                            :
                            <button
                                className="btn blue darken-3"
                                onClick={this.handleToggleComplete.bind(this)}
                                >Complete Task
                            </button>
                        }
                    </div>
                    <div className="col s4 center">
                        <button
                            onClick={this.handleDelete.bind(this)}
                            className="btn red darken-2">Delete Task
                        </button>
                    </div>
                    <div className="col s4 center">
                        <Link to="/" className="btn purple darken-2">Back to List</Link>
                    </div>
                </div>
                {itemDetails.complete ?
                    <h5 className="row card-panel green lighten-4"><b className="green lighten-4 indigo-text">Status: </b>
                        <span className="green lighten-4 indigo-text">Item Complete!</span>
                    </h5>
                    :
                    <h5 className="row card-panel amber lighten-4"><b className="amber lighten-4 red-text">Status: </b>
                        <span className="amber lighten-4 red-text">Item is not yet complete</span>
                    </h5>
                }
            </div>
            );
    }
}

export default ItemDetails;