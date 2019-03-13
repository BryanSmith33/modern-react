import React, { Component } from 'react';
// importing two components that are the exact same but one is memoized and one is not
import MemoizedMsg from './Components/MemoMessageDisplay'
import NonMemoizedMsg from './Components/NonMemoMessageDisplay'

class App extends Component {
	state = {
		count: 0
	}
	
	// custom method just to update state to cause a rerender
  handleCountIncrease = () => {
    this.setState((prevState) => {
      return {count: prevState.count + 1}
    })
  }
	render() {
		return (
			<div>
				<h1>{this.state.count}</h1>
				<button onClick={this.handleCountIncrease}>increase count</button>
				{/* This component is memoized */}
				<MemoizedMsg message="I won't rerender" />
				{/* this component is not memoized and will cause a rerender inside the component */}
				<NonMemoizedMsg message='I am bad at this...' />
			</div>
		)
	}
}

export default App;
