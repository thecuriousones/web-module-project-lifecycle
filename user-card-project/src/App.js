import './App.css';
import React from 'react';
import axios from 'axios';



class App extends React.Component{
  constructor() {
    super();
    this.state = {
      user: {} // Application level state!
    }
  }


  render() {
    return (
      <div className="App">
      <div>INCOMING PROJECT</div>
    </div>
    )
  }
}

export default App;
