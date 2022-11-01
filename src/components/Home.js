
import React from 'react'
import { Link } from 'react-router-dom'
import '../home.css'
import GameInputs from './GameInputs'

const Home = (props) => {
	
	// const { msgAlert, user } = props
	console.log('props in home', props)

	return (

		
		<div className='background'>
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
		
		<GameInputs/>
		</div>
		
		

	)
}

export default Home
