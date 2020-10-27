
import React, { Component } from 'react';
import Userinput from './Userinput';
import Useroutput from './Useroutput';
import './css/Useroutcss.css';


class  App extends Component {

  state = {
    Username: "Billy Bod",
  };

  ChangeUsernameHandler = (event) => {
    this.setState({
      Username: event.target.value,
    })
  }

  render(){
      return(
        <div>
           <Userinput name={this.Username}changed={this.ChangeUsernameHandler}/>
           <Useroutput Username={this.state.Username} />
           <Useroutput Username = {this.state.Username} />
           <Useroutput Username = {this.state.Username} />
           <Useroutput Username = {this.state.Username} />
           <Useroutput Username = {this.state.Username} />
        </div>
      );
  }
}

export default App;
