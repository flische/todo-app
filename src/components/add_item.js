import React, {Component} from 'react';

class AddItem extends Component{
    state= {
      title: '',
      details: ''
    };

    handleInputChange = (e) =>{
        const {name, value} = e.target;

        console.log('Name: ', name, 'Value: ', value);

        this.setState({
            [name]: value
        });
    };

    handleAddItem = (e) => {
        e.preventDefault();

        this.props.add(this.state);
    // Above: this.state is our item (state is the object holding the information we need)

        this.setState({
            title: '',
            details:''
        })
    // Above: this.setState is called to empty title and details input fields
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