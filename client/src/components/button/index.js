import React, { Children } from "react";

 import "./style.css";
// import API from "../../utils/API";


export function Input(props) {
    return (
        
        <input className="form-control" {...props} />
         /* <button {...props} className ="btn btn-success">Submit</button> */
          
);
}

export function Btn(props) {
    return (
        <button {...props} className="btn btn-success filterbtn">
            {props.children}
        </button>
    );
}