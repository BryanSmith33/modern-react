import React, { useState, useRef } from 'react'

const App = () => {
	const textInput = useRef()
	const [userName, setUserName] = useState('')
	const updateUserName = (e) => {
		e.preventDefault()
    setUserName(textInput.current.value)
    textInput.current.value = ''
	}
	return (
		<div className='App'>
			<h3>UserName: {userName}</h3>
			<form onSubmit={updateUserName}>
				<input type='text' ref={textInput} />
				<button>Submit</button>
			</form>
		</div>
	)
}

export default App
