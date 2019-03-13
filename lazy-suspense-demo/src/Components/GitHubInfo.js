// nothing special about this component
// just getting some data from the GitHub API and using in our JSX
import React from 'react'
import axios from 'axios'

class GitHubInfo extends React.Component {
	state = {
		userInfo: null
	}

	componentDidMount() {
		axios.get('https://api.github.com/users/BryanSmith33')
		.then((res) => this.setState({ userInfo: res.data }))
	}

	render() {
		console.log(this.state)
		return (
			<div>
				<h1>{this.state.userInfo && this.state.userInfo.login}</h1>
				<h3>{this.state.userInfo && this.state.userInfo.bio}</h3>
			</div>
		)
	}
}

export default GitHubInfo
