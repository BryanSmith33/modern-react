// import React and destructuring memo just like we would Component
import React, { memo } from 'react'

const MemoMessageDisplay = (props) => {
	console.log('render from the memoized message')
	return <h3>{props.message}</h3>
}

// export the function but wrap it in the memo function
export default memo(MemoMessageDisplay)
