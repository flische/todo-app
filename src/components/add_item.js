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
                <div className="row grey lighten-5">
                    <div className="col s6 grey lighten-5">
                        <label className="grey lighten-5">TITLE</label>
                        <input type="text"
                               name="title"
                               placeholder="<type the todo task title here>"
                               onChange={this.handleInputChange}
                               value={title}
                        />
                    </div>
                    <div className="col s6 grey lighten-5">
                        <label className="grey lighten-5">DETAILS</label>
                        <input type="text"
                               name="details"
                               placeholder="<type the todo task details here>"
                               onChange={this.handleInputChange}
                               value={details}
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="col s12 center">
                        <button className="btn pulse purple darken-3">Add Task</button>
                    </div>
                </div>
            </form>
        );
    }
}

export default AddItem;