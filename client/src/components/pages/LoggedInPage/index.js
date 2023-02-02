import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import Container from 'react-bootstrap/Container'

export default function Home() {
	// eslint-disable-next-line
	const [username, setUsername] = useState(sessionStorage.getItem('USERNAME'))

	const navigate = useNavigate()
	const verifySession = () => {
		console.log('verifying log in')
		axios
			.post(
				'http://localhost:8000/logged/user',
				{
					username: username,
				},
				{ withCredentials: true }
			)
			.then(res => {
				res.data.status === false
					? navigate('/')
					: console.log('you are still signed in')
			})
	}

	const logout = e => {
		console.log('logging out')
		axios
			.post(
				'http://localhost:8000/logged/logout',
				{ username: username },
				{ withCredentials: true }
			)
			.then(res => {
				sessionStorage.clear()
			})
	}

	return (
		<Container className='flex flex-column'>
			<p onClick={verifySession}>Welcome {username}</p>
			<button onClick={logout}>Logout</button>
		</Container>
	)
}
