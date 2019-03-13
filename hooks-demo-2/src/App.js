import React, { useState, createRef } from 'react'
import GitHubUser from './Components/GitHubUser'

const App = () => {
  const inputRef = createRef()
  const [user, setGitHubUser] = useState("")
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
			<GitHubUser user={user} />
		</>
	)
}

export default App
