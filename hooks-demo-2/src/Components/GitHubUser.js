// importing useEffect and useState, two different hooks
import React, { useEffect, useState } from 'react'
import axios from 'axios'

// destructuring user from props
const GitHubUser = ({ user }) => {
  // defining profileImg on state and a function to update it
  // initial value for profileImg will be an empty string
  const [profileImg, setProfileImg] = useState("")

  // async function to get user data from the GitHub api
  async function getUser(){
    const res = await axios.get(`https://api.github.com/users/${user}`)
    // using the custom setProfileImg function passing in the data from our axios request
    setProfileImg(res.data.avatar_url)
    console.log('hit');
  }

  // useEffect is like componentDidMount in that this function will run once the component mounts. We pass in a array of [user]. This tells useEffect to chedk and see if user on state has changed. If it has, it will run the getUser() function again. If it hasn't changed, the function takes the previous result
	useEffect(() => {
    getUser()
	}, [user])
	return (
		<div>
      {/* using profileImg from state */}
			<img src={profileImg} alt={user}/>
		</div>
	)
}

export default GitHubUser
