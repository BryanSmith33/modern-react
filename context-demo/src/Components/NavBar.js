import React from 'react'
import UserInfo from './UserInfo'

// no reference of username here
const NavBar = () => (
	<div style={{width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1em', borderBottom: '1px solid #111'}}>
    <ul style={{listStyle: 'none', margin: '0', padding: '0', display: 'flex'}}>
      <li>Home</li>
      <li>About</li>
      <li>Contact</li>
    </ul>
		<UserInfo />
	</div>
)

export default NavBar
