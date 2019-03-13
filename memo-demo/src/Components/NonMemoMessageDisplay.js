import React from 'react'

const NonMemoMessageDisplay = (props) => {
	console.log('render from the non memoized message')
	return <h3>{props.message}</h3>
}

export default NonMemoMessageDisplay
