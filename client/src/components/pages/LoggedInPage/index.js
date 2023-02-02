import axios from 'axios'
import React, { useState } from 'react'

import Container from 'react-bootstrap/Container'

export default function Home() {
	const [username, setUsername] = useState(sessionStorage.getItem('USERNAME'))

	const getCookie = () => {
		console.log('loading logged in')
		axios
			.post(
				'http://localhost:8000/logged/user',
				{
					username: username,
				},
				{ withCredentials: true }
			)
			.then(res => {
				console.log(res.data)
			})
	}

	return (
		<Container className='flex flex-column' onClick={getCookie}>
			Welcome {username}
		</Container>
	)
}
