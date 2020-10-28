import React, { Component } from 'react';
import './App.css';
import ValidationComponent from './Components/ValidationComponent'
import CharComponent from './Components/CharComponent'

class App extends Component {
  
  state = {
    textbox: 'Enter a word...',
    count : 0,
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

  deleteCharHandler = (index) =>{
    const str= this.state.textbox.split('')
    str.splice(index,1)
    const newstr = str.join('')
    this.setState({textbox: newstr,
                  count:   newstr.length})
  }

  render(){
  
  let charlist = this.state.textbox.split('')
  charlist = (
    <div>
      {charlist.map( (ch,index)=>{
        return (
              <CharComponent
               key={index}
               click={()=> this.deleteCharHandler(index)}
               letter={ch}
               />
        );
      }) }
    </div>
  );

    return (
      <div >
          <input type="text" onChange={this.TextHandler} value={this.state.textbox} />
          <p>
            The lengh of the string is:{this.state.count} 
          </p>
          <ValidationComponent count={this.state.count} />
          { charlist }
          {}
      </div>
    );
  }
}

export default App;
