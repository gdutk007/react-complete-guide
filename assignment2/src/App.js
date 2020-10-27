import React, { Component } from 'react';
import './App.css';
import ValidationComponent from './Components/ValidationComponent'
import CharComponent from './Components/CharComponent'

class App extends Component {
  
  state = {
    textbox: "Enter Your Text Here...",
    count : 10,
  }

  TextHandler = (event) => {
    const text =   event.target.value
    let currentcount = 0;
    for(var i = 0; i < text.length; ++i){
        ++currentcount;
    }
    this.setState({
                   textbox: text,
                   count: currentcount
     })
  }

  render(){
    let letter = "s";
    const s = "hello"
    
    return (
      <div >
          <input type="text" onChange={this.TextHandler} value={this.state.textbox} />
          <p>
            The lengh of the string is:{this.state.count} 
          </p>
          <ValidationComponent count={this.state.count} />
          <CharComponent letter={letter}  />
          {charlist}
      </div>
    );
  }
}

export default App;
