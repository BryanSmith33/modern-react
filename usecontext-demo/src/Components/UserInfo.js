import React, {useContext} from 'react'
import { NavConsumer } from '../NavContext'

// we are able to completely pass over the NavBar component using context
// here we use the NavConsumer prop and any JSX with the context data we are passed
const UserInfo = () => {
  const value = useContext(NavConsumer)
	return <h3>{value}</h3>
}

export default UserInfo
