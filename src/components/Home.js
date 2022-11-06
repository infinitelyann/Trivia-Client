
import React from 'react'
import { Link } from 'react-router-dom'
import '../home.css'


const Home = (props) => {
	
	// const { msgAlert, user } = props
	console.log('props in home', props)

	return (

		
		<div className='background'>
			<div style={{fontSize: '150px', textAlign: 'center', marginBottom: '0'}}>🌕</div>
		<div className='title1'>
		
			<span>Q</span>
			<span>U</span>
			<span>I</span>
			<span>Z</span>
			<span>A</span>
			<span>R</span>
			<span>D</span>
			
		</div>
		<div className='buttons'>
		    <Link className='btn' to='sign-up' style={{backgroundColor: '#240046', color: 'white', border:'2px solid #ffc300', fontSize: '20px'}}>Sign-Up</Link>
			
			<Link className='btn' to='sign-in' style={{backgroundColor: '#240046', color: 'white', border:'2px solid #ffc300', fontSize: '20px'}}>Sign-In</Link>
			
		</div>
		</div>
		
		

	)
}

export default Home
