import React, { Component } from 'react'
import axios from 'axios'

import './App.css'
import MyCard from './Components/MyCard'
import GithubChart from './Components/GthubChart'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      user: '',
    }
  }
  componentDidMount() {
    axios.get('https://api.github.com/users/luispinedajr').then(res => {
      const user = res.data
      this.setState({ user })
      console.log('user', user)
    })
  }
  render() {
    return (
      <div className="App">
        <h1>Github User Card</h1>
        <MyCard user={this.state.user} />
        <GithubChart />
      </div>
    )
  }
}

export default App
