import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { signIn } from '../../api/auth'
import messages from '../shared/AutoDismissAlert/messages'

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'


const SignIn = (props) => {
	// constructor(props) {
	// 	super(props)

	// 	this.state = {
	// 		email: '',
	// 		password: '',
	// 	}
	// }
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const navigate = useNavigate()

	// handleChange = (event) =>
	// 	this.setState({
	// 		[event.target.name]: event.target.value,
	// 	})

	const onSignIn = (event) => {
		event.preventDefault()
        console.log('the props', props)
		const { msgAlert, setUser } = props

        const credentials = {email, password}

		signIn(credentials)
			.then((res) =>  setUser(res.data.user))

			.then(() =>
				msgAlert({
					heading: 'Sign In Success',
					message: messages.signInSuccess,
					variant: 'success',
				})
			)
			.then(() => navigate('/homepage'))
			.catch((error) => {
                setEmail('')
                setPassword('')
				msgAlert({
					heading: 'Sign In Failed with error: ' + error.message,
					message: messages.signInFailure,
					variant: 'danger',
				})
			})
	}

    return (
        <div style={{backgroundColor: '#240046', height: '100vh'}}>
        <div className='row' style={{textAlign: 'center', paddingTop: '50px', color: 'white'}}>
            <div className='col-sm-10 col-md-3 mx-auto mt-5' style={{ width: '300px'}}>
                <h3 style={{paddingTop: '10px'}}>Sign In</h3>
                <Form onSubmit={onSignIn} style={{padding: '20px'}}>
                    <Form.Group controlId='email'>
                        <Form.Label>Email address</Form.Label>
                        <Form.Control
                            required
                            type='email'
                            name='email'
                            value={email}
                            placeholder='Enter email'
                            onChange={e => setEmail(e.target.value)}
                            style={{ border: '5px solid lightgray'}}
                        />
                    </Form.Group>
                    <Form.Group controlId='password'>
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            required
                            name='password'
                            value={password}
                            type='password'
                            placeholder='Password'
                            onChange={e => setPassword(e.target.value)}
                            style={{ border: '5px solid lightgray'}}
                        />
                    </Form.Group>
                    <Button variant='primary' type='submit' style={{backgroundColor: '#240046', color: 'white', border:'2px solid #ffc300'}}>
                        Sign In
                    </Button>
                </Form>
            </div>
        </div>
        </div>
    )
}

export default SignIn
