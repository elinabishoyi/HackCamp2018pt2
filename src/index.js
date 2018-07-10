import React from "react";
import ReactDOM from "react-dom";


import {Greeting} from "./greeting.js";

class Body extends React.Component{
getname(){
    var name;
    //name = prompt("Enter Your Name", "");
    return name;
}
  render(){
    return(
      <div>
      <Greeting name={this.getname()} />
      </div>
      <br />

    );
  }
}


ReactDOM.render(<Body />, document.getElementById('root'));