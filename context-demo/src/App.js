import React, { Component } from 'react'
import './App.css'
// import our provider
import { NavProvider } from './NavContext'
import NavBar from './Components/NavBar'

class App extends Component {
  state = {
    userName: 'bryanSmith33'
  }
	render() {
		return (
      // Provider Component with a value prop that we pass userName from state
      <NavProvider value={this.state.userName}>
        <NavBar />
      </NavProvider>
    )
	}
}

export default App
