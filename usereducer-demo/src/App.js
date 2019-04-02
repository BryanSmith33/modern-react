import React, { useReducer, useRef } from 'react'

const App = () => {
	const todoRef = useRef()

	const [todos, dispatch] = useReducer((state, action) => {
		switch (action.type) {
			case 'ADD_TODO':
				return [
					...state,
					{
						id: state.length,
						title: action.title,
						complete: false
					}
				]
			case 'TOGGLE_TODO':
				return state.map((todo) =>
					todo.id === action.id ? { ...todo, complete: !todo.complete } : todo
				)
			case 'REMOVE_TODO':
				return state.filter((todo, index) => index !== action.id)
			default:
				return state
		}
	}, [])

	const handleAddTodo = (e) => {
		e.preventDefault()
		dispatch({
			type: 'ADD_TODO',
			title: todoRef.current.value
		})
		todoRef.current.value = ''
	}
	const handleToggleTodo = (id) => {
		dispatch({
			type: 'TOGGLE_TODO',
			id
		})
	}
	const handleRemoveTodo = (id) => {
		dispatch({
			type: 'REMOVE_TODO',
			id
		})
	}
	return (
		<div>
			<form onSubmit={handleAddTodo}>
				<input type='text' ref={todoRef} />
				<button>Add Todo</button>
			</form>
			<ul>
				{todos.map((todo, index) => (
					<li
						onClick={() => handleToggleTodo(index)}
						onDoubleClick={() => handleRemoveTodo(index)}
						key={todo.id}
						style={{ textDecoration: todo.complete && `line-through` }}>
						{todo.title}
					</li>
				))}
			</ul>
		</div>
	)
}

export default App
