import React, { useState, useRef } from 'react'
import GitHubUser from './Components/GitHubUser'

const App = () => {
	// creating a ref for our input in the form below
	const inputRef = useRef()
	// using the useState hook, we can set a value called user with an initial value of an emptry string. We also custom create a function called setGitHubUser that will update the user on state very similar to setState
	const [user, setGitHubUser] = useState('')
	//custom method that will use the input ref to set the value of user on state using the setGitHubUser method we also created
	const handleFormSubmt = (e) => {
		e.preventDefault()
		setGitHubUser(inputRef.current.value)
	}
	return (
		<>
			<form onSubmit={handleFormSubmt}>
				<input ref={inputRef} type='text' />
				<button>Find Profile</button>
			</form>
			{/* passing the user prop down witht he user value from state */}
			<GitHubUser user={user} />
		</>
	)
}

export default App
