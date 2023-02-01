import axios from 'axios'
import React, { useEffect, useState } from 'react'

import Container from 'react-bootstrap/Container'

export default function Home() {
	const [username, setUsername] = useState(sessionStorage.getItem('USERNAME'))
	useEffect(() => {
		console.log('loading logged in')
		axios
			.post(
				'http://localhost:8000/logged/user',
				{
					username: username,
				},
				{
					credentials: 'include',
				}
			)
			.then(res => {
				console.log(res.data)
			})
	}, [username])

	return <Container className='flex flex-column'>Welcome {username}</Container>
}
