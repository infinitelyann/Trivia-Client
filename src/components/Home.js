<<<<<<< HEAD

const Home = (props) => {
=======
>>>>>>> main

import React from 'react'
import { Link } from 'react-router-dom'
import '../home.css'

const Home = (props) => {
	// const { msgAlert, user } = props
	console.log('props in home', props)

	return (
<<<<<<< HEAD
		<>
			<h2>Home Page</h2>
		
		</>
=======

		
		<main>
		<div className='title1'>
			<span>T</span>
			<span>E</span>
			<span>S</span>
			<span>T</span>
			
		</div>
		<div className='buttons'>
		    <Link className='btn' to='sign-up' style={{backgroundColor: '#7552f2', color: 'white'}}>Sign-Up</Link>
			
			<Link className='btn' to='sign-in' style={{backgroundColor: '#7552f2', color: 'white'}}>Sign-In</Link>
		</div>
		</main>
		
		

>>>>>>> main
	)
}

export default Home
