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
        })
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
            <div>
                <h1 className="center">Item Details</h1>
                <div className="row">
                    <div className="col s12 right-align">
                        <Link to="/" className="btn purple darken-2">Back to List</Link>
                    </div>
                </div>
                <h4><b>Title:</b> {itemDetails.title}</h4>
                <div className="row">
                    <div className="col s6 center">
                        <button className="btn blue darken-3">Toggle Complete</button>
                    </div>
                    <div className="col s6 center">
                        <button onClick={this.handleDelete.bind(this)} className="btn red darken-2">Delete</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default ItemDetails;