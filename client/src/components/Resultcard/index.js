import React, { Component } from "react";
import "./style.css";

class Resultcard extends Component {


render() {
    
    return (
      <div className="row card-results">
        <li className="list-group-item" aria-disabled="true"><h3>{this.props.word}</h3> {this.props.meaning} </li>
      </div>)
    
    }

    
};
export default Resultcard;


