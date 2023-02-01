import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

export default function LoginForm() {
	const [hidden, setHidden] = useState(true)
	const [loginMessage, setLoginMessage] = useState()
	const navigate = useNavigate()

	const changeHidden = () => {
		setHidden(!hidden)
	}

	const schema = yup.object().shape({
		username: yup.string().min(4).required('Your username is required'),
		password: yup.string().min(5).max(20).required('Your password is required'),
	})

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(schema),
	})

	const onSubmit = data => {
		console.log('logging in user')

		axios
			.post(
				'http://localhost:8000/login',
				{
					username: data.username,
					password: data.password,
				},
				{
					credentials: 'include',
				}
			)
			.then(res => {
				console.log(res.data)
				setLoginMessage(res.data.status)
				if (res.data.username) {
					sessionStorage.setItem('USERNAME', res.data.username)

					navigate('/logged')
				}
			})
	}

	return (
		<Container className=' mt-2 mb-5'>
			<h3 className='text-start hover' onClick={changeHidden}>
				Log in to Bible App
			</h3>

			{!hidden ? (
				<Container>
					<Form onSubmit={handleSubmit(onSubmit)}>
						<Form.Group className='mb-3' controlId='formBasicEmail'>
							<p className='text-danger'>{errors?.username?.message}</p>
							<Form.Label>Username</Form.Label>
							<Form.Control
								type='username'
								placeholder='Username...'
								{...register('username')}
							/>
							<Form.Text className='text-muted'>
								We'll never share your information with anyone
							</Form.Text>
						</Form.Group>

						<Form.Group className='mb-3' controlId='formBasicPassword'>
							<p className='text-danger'>{errors?.password?.message}</p>
							<Form.Label>Password</Form.Label>
							<Form.Control
								type='password'
								placeholder='Password...'
								{...register('password')}
							/>
						</Form.Group>

						<Button variant='primary' type='submit'>
							Submit
						</Button>
						{loginMessage ? <p>{loginMessage}</p> : ''}
					</Form>
				</Container>
			) : (
				''
			)}
		</Container>
	)
}
