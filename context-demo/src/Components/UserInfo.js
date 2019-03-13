import React from 'react'
import { NavConsumer } from '../NavContext';

const UserInfo = () => {
  return (
    <NavConsumer>
      {context => <h3>{context}</h3>}
    </NavConsumer>
  )
}

export default UserInfo