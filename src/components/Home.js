import React from 'react'
import { Link } from 'react-router-dom'
import '../home.css'

const Home = (props) => {
	// const { msgAlert, user } = props
	console.log('props in home', props)

	return (
		<body>
		<div className='title'>
			<span>T</span>
			<span>E</span>
			<span>S</span>
			<span>T</span>
			
		</div>
		<div className='buttons'>
		    <Link className='btn btn-success' to='sign-up'>Sign-Up</Link>
			
			<Link className='btn btn-success' to='sign-in'>Sign-In</Link>
		</div>
		</body>
	)
}

export default Home
