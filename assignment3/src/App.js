import React, {Component} from 'react'
import List from './Components/Lists/List'
import './css/List.css'
import './App.css';

class App extends Component {

  state = {
    Names: [ {id: '0', Firstname:'Bob'},
            {id: '1', Firstname:'Bill'},
            {id: '2', Firstname:'Jane'},
          ],
    showList: false,
  }

  HandleChange = (event,personIndex) => {
    const people = [...this.state.Names]
    people[personIndex].Firstname = event.target.value //person
    this.setState({Names: people})
  }

  HandleButtonClick = () => {
      const show = this.state.showList
      this.setState({ showList: !show })
  }

  HandleOneInput = (event) => {
      this.setState({SingleName: event.target.value})
  }

  DeleteHandler = (id) => {
    console.log("inside delete handler")
    const persons = [...this.state.Names]
    const index = persons.findIndex(p => {
      return p.id === id 
    })
    persons.splice(index,1)
    console.log(persons)
    this.setState({ Names: persons })
  }

  render(){
    let formList = null;
    if(this.state.showList){
      formList = this.state.Names.map((person,index) => {
            return(
              <div>
                  <List 
                    key={person.id}
                    name={person.Firstname}
                    change={(event)=>{this.HandleChange(event,person.id)}}
                    deletebox={() => this.DeleteHandler(person.id) }
                  />
              </div>
           );  
        })
    }
    return (
      <div className="App">
        <button onClick={this.HandleButtonClick}> Click me!!! </button>
        <ul>
          {formList}
        </ul>
      </div>
    );
  }
}

export default App;
