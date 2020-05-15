import React, {Component} from 'react';
import './App.css';
import Navbar from './Components/Navbar'
import Card from './Components/Card'
import Buttons from './Components/Buttons'
import data from './data.js'


class App extends Component {
  constructor () {
    super()
    this.state = {
      people: data,
      currentPage: 0
    }
  }
  previousPage = () => {
    let pageChange = this.state.currentPage
    if(pageChange === 0){
      this.setState({currentPage: 24})
    } else {this.setState({currentPage: this.state.currentPage - 1})}
  }
  nextPage = () => {
    let pageChange = this.state.currentPage
    if (pageChange === 24){
      this.setState({currentPage: 0})
    } else {this.setState({currentPage: this.state.currentPage + 1})}
  }
  home = () => {
    this.setState({currentPage: 0})
  }

  render () {
    const allPeople = this.state.people.map( (e, i) => {
      if(this.state.currentPage === i)
        return <Card key={i} person={e} />
    })
    return (
      <div className="App">
        <Navbar home={this.home}/>
        {allPeople}
        <Buttons previous={this.previousPage} next={this.nextPage}/>
      </div>
    );
  }
}

export default App;
