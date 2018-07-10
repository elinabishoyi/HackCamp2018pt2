import React from 'react';
import "./styles.css";

export class Greeting extends React.Component{
  render(){
    return(
      <div>
        <h1 className="greeting"> Hello there, <i>{this.props.name}</i></h1>
      </div>
    );
  }
}