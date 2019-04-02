import React, { useState } from 'react'
// import our provider
import { NavProvider } from './NavContext'
import NavBar from './Components/NavBar'

const App = () => {
	const [username, updateUsername] = useState('bryanSmith33')
	return (
		// Provider Component with a value prop that we pass userName from state
		<NavProvider value={username}>
			<NavBar />
		</NavProvider>
	)
}

export default App
