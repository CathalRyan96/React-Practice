import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.css'

class Counter extends Component {
  state = {
    count: 5,
    tags: ["Cathal", "Ryan", "2018"]
  };


  

  render() {
    const classes = "badge m-4 badge-";
    
    return (
      <div>
        <h1>Fitness Web App</h1>
        <button className="btn btn-warning btn-sm m-4">Hurling Exercises</button>
        <button className="btn btn-warning btn-sm m-4">Football Exercises</button>
        <button className="btn btn-warning btn-sm m-4">Rugby Exercises</button>
        <button className="btn btn-warning btn-sm m-4">Soccer Exercises</button>

       
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-4 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
