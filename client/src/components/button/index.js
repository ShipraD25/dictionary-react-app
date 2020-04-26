import React from "react";

// import "./style.css";
// import API from "../../utils/API";


export function Input(props) {
    return (
        <input className="form-control" {...props} />
    );
}

export function Btn(props) {
    return (
        <button {...props} className="btn btn-success filterbtn">
            Submit
        </button>
    );
}