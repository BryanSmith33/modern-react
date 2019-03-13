import React from 'react'

const MemoMessageDisplay = (props) => {
	console.log('render from the memoized message')
	return <h3>{props.message}</h3>
}

export default React.memo(MemoMessageDisplay)
