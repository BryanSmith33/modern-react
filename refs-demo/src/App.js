import React, { Component, createRef } from 'react'

class App extends Component {
	// creating a reference, or ref. We can call it whatever we want
	// we can attach this ref to any element inside of the render
	// we use this to target/manipulate the element
	// in this case we are using it to get the value from the input
	textInput = createRef()
	state = {
		value: ''
	}

	// custom method we run when the form submits
	handleUserNameSubmit = (e) => {
		e.preventDefault()
		// using the value from the textInput ref
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
