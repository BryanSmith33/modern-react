import React, { Component } from 'react'

class App extends Component {
	textInput = React.createRef()
	state = {
		value: ''
	}

	handleUserNameSubmit = (e) => {
		e.preventDefault()
    this.setState({ value: this.textInput.current.value })
    this.textInput.current.value = ''
	}

	render() {
		return (
			<div>
				<h3>UserName: {this.state.value}</h3>
        <form onSubmit={this.handleUserNameSubmit}>
					<input type='text' ref={this.textInput} />
					<button>Submit</button>
				</form>
			</div>
		)
	}
}

export default App
