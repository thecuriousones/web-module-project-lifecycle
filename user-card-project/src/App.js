import './App.css';
import React from 'react';
import axios from 'axios';
import User from './components/User';



class App extends React.Component{
  constructor() {
    super();
    this.state = {
      user: {} 
    }
  }

  componentDidMount() {
    console.log("App CDM")
    axios.get('https://api.github.com/users/thecuriousones')
      .then(res => {
        console.log(res.data);
        this.setState({
          ...this.state,
          user: res.data
        });
      })
      .catch(err => console.log(err));
  }

  // fetchFollowers = () => {
  //   console.log('is this working?')
  //   axios.get('https://api.github.com/users/thecuriousones/followers')
  //     .then(res => {
  //       console.log(res);
  //       this.setState({
  //         ...this.state,
  //         user: res.data
  //       });
  //     })
  //     .catch(err => console.log(err));
  // }


  render() {
    return (
      <div className="flex w-full flex-row flex-wrap justify-start bg-blue-50">
      <User userObject={this.state.user} />
    </div>
    )
  }
}

export default App;
