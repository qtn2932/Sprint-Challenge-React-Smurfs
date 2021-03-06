import React, { Component } from "react";
import axios from 'axios';

class SmurfForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurf: {
        name: "",
        age: "",
        height: ""
      }
    };
  }
  routeToHome() {
    this.props.history.push('/')
  }
  addSmurf = event => {
    this.routeToHome();
    // add code to create the smurf using the api
    axios
      .post("http://localhost:3333/smurfs", this.state.smurf)
      .then(response => this.props.setNewSmurfState(response.data));

    this.setState({
      smurf: {
        name: "",
        age: "",
        height: ""
      }
    });
    
  };
  handleInputChange = e => {
    this.setState({smurf: {
      ...this.state.smurf,
      [e.target.name]: e.target.value
    } });
  };

  render() {
    return (
      <div className="SmurfForm">
        <form onSubmit={this.addSmurf}>
          <input
            onChange={this.handleInputChange}
            placeholder="name"
            value={this.state.smurf.name}
            name="name"
          />
          <input
            onChange={this.handleInputChange}
            placeholder="age"
            value={this.state.smurf.age}
            name="age"
          />
          <input
            onChange={this.handleInputChange}
            placeholder="height"
            value={this.state.smurf.height}
            name="height"
          />
          <button type="submit" onClick={this.addSmurf}>Add to the village</button>
        </form>
      </div>
    );
  }
}

export default SmurfForm;
