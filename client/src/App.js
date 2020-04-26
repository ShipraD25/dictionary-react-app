import React, { Component } from "react";
import { Btn, Input } from './components/button';

import './App.css';
import API from "./utils/API";


class App extends Component {

  handleClick = event => {
    API.getAllWords(event).then(res => {
      console.log(res.data)
    }).catch(error => {
      console.log(error);
    });
  };

  render() {
    return (
      <div>
        <Btn onClick={this.handleClick} />
        <br />
        <br />
        <Input />
      </div>
    )
  }
}

export default App;
