import React, {Component} from 'react';
import './App.css';
import Navbar from './Components/Navbar'
import Card from './Components/Card'
import data from './data.js'


class App extends Component {
  constructor () {
    super()
    this.state = {
      people: data,
      currentPage: 0
    }
  }
  previousPage () {
    this.setState({currentPage: this.state.currentPage - 1})
  }
  nextPage () {
    this.setState({currentPage: this.state.currentPage + 1})
  }


  render () {
    const allPeople = this.state.people.map( (e, i) => {
      // console.log(e)
      if(this.state.currentPage === i) {
        return <Card person={e} />
      }
    })
    return (
      <div className="App">
        <Navbar />
        {allPeople}
      </div>
    );
  }
}

export default App;
