import React, { useEffect, useState } from 'react'
import axios from 'axios'

const GitHubUser = ({ user }) => {
  const [profileImg, setProfileImg] = useState("")

  async function getUser(){
    const res = await axios.get(`https://api.github.com/users/${user}`)
    setProfileImg(res.data.avatar_url)
    console.log('hit');
  }
	useEffect(() => {
    getUser()
	}, [user])
	return (
		<div>
			<img src={profileImg} alt={user}/>
		</div>
	)
}

export default GitHubUser
