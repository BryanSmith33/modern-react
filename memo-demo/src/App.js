import React, { Component } from 'react';
import MemoizedMsg from './Components/MemoMessageDisplay'
import NonMemoizedMsg from './Components/NonMemoMessageDisplay'

class App extends Component {
	state = {
		count: 0
	}
  
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
				<MemoizedMsg message="I won't rerender" />
				<NonMemoizedMsg message='I am bad at this...' />
			</div>
		)
	}
}

export default App;
