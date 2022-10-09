/**
 * In the following React template, modify the component so that the counter correctly displays and it increments by one whenever the button is pressed. 
 * You are free to add classes and styles, but make sure you leave the element ID's as they are.
 */

import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const style = {
  
      mainButton: {
          marginTop: '10px',
          padding: '10px 15px',
          border: 'none',
          backgroundColor: 'lightseagreen',
          fontSize: '14px',
          borderRadius: '5px'
      }
  
} as const;



type counterProps={
value : string
}
type counterState= {
  count: number
}

class Counter extends React.Component<counterProps, counterState> {
  
  
  
  constructor(props) {
    super(props);
    this.state = {
      count:0,
      
    };
    
    
  }
  
  
  
  IncrementCount = () => {
    this.setState((prevState)=>({ count: prevState.count + 1 }));
  }
  

  render() {
    
    return (
      <div id="mainArea">
        <p>button count: <span>{this.state.count}</span></p>
        <button id="mainButton" onClick={this.IncrementCount}>Increase</button>
      </div>
    );
  }
}

ReactDOM.render(
  <Counter value='' />,
  document.getElementById('test-02')
);