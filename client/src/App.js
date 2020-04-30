import React, { Component } from "react";
import { Btn, Input } from './components/button';
import Resultcard from './components/Resultcard';
import './App.css';
import API from "./utils/API";


class App extends Component {
  state = {
    wordsArray: [],
    wordSearch:""
}

handleInputChange = event => {
      
  const { name, value } = event.target;
  this.setState({
    [name] : value
  });
};

handleSearch = event => {
  event.preventDefault();

  API.getWord(this.state.wordSearch)
  .then(res =>
    //console.log(res.data.items)
    this.setState({wordsArray: [res.data]})
  ).catch(err => console.log(err));
  
}; 
 

  handleClick = event => {
    API.getAllWords(event).then(res => {
      this.setState({ wordsArray: res.data })
      console.log(res.data)
    }).catch(error => {
      console.log(error);
    });
  };

  render() {
    return (
      <div className="container">
        <Btn onClick={this.handleClick}>
          View All Words</Btn>
        
        <div className="row">
          {this.state.wordsArray.map(word => {
            return (
              <Resultcard
                key= {word.id}
                word={word.word}
                meaning={word.meaning}
              />)
          })}
        </div>
        <br />
        <Input 
        name="wordSearch"
        value={this.state.wordSearch}
        onChange={this.handleInputChange}
        placeholder="Search For a Word"/>
        <Btn onClick={this.handleSearch}>Search</Btn>
      </div>
    )
  }
}

export default App;
