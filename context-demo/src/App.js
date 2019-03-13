import React, { Component } from 'react'
import './App.css'
import { NavProvider } from './NavContext'
import NavBar from './Components/NavBar'

class App extends Component {
  state = {
    userName: 'bryanSmith33'
  }
	render() {
		return (
      <NavProvider value={this.state.userName}>
        <NavBar />
      </NavProvider>
    )
	}
}

export default App
