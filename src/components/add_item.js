import React, {Component} from 'react';

class AddItem extends Component{
    constructor(props){
        super(props);

        this.state = {
            title: '',
            details: ''
        };
    }

    handleInputChange = (e) =>{
        const {name, value} = e.target;

        console.log('Name: ', name, 'Value: ', value);

        this.setState({
            [name]: value
        });
    };

    handleAddItem = (event) => {
        event.preventDefault();

        this.props.add(this.state);

        this.setState({
            title: '',
            details:''
        })
    };

    render(){
        const {title, details} = this.state;

        return(
            <form onSubmit={this.handleAddItem}>
                <div className="row">
                    <div className="col s6">
                        <label>Title</label>
                        <input type="text"
                               name="title"
                               onChange={this.handleInputChange}
                               value={title}
                        />
                    </div>
                    <div className="col s6">
                        <label>Details</label>
                        <input type="text"
                               name="details"
                               onChange={this.handleInputChange}
                               value={details}
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="col s12 right-align">
                        <button className="btn purple darken-3">Add Item</button>
                    </div>
                </div>
            </form>
        );
    }
}

export default AddItem;