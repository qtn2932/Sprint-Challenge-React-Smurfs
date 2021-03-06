import React, { Component } from "react";
import axios from "axios";
import "./App.css";
import SmurfForm from "./components/SmurfForm";
import Smurfs from "./components/Smurfs";
import {Route} from 'react-router-dom';
import {NavLink} from 'react-router-dom';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: []
    };
  }
  componentDidMount() {
    axios
      .get("http://localhost:3333/smurfs")
      .then(response => this.setState({ smurfs: response.data }))
      .catch(error => console.log(error));
  }
  setNewSmurfState(smurfData) {
    this.setState({ smurfs: smurfData });
  }
  render() {
    return (
      <div className="App">
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/smurf-form'>Add smurf</NavLink>
        <Route exact path= '/' render={() => <Smurfs smurfs={this.state.smurfs} />} />
        <Route path= "/smurf-form" render={() => <SmurfForm setNewSmurfState={this.setNewSmurfState}  />} />
      </div>
    );
  }
}

export default App;
