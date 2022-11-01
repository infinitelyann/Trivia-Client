import React, { Fragment } from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
// import { Menu } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
const linkStyle = {
    color: 'white',
    textDecoration: 'none'
}
const authenticatedOptions = (
	<>
		<Nav.Item>
			<Link to='change-password' style={linkStyle}>
				Change Password
			</Link>
		</Nav.Item>
		<Nav.Item>
			<Link to='sign-out' style={linkStyle}>
				Sign Out
			</Link>
		</Nav.Item>
<<<<<<< HEAD
		<Nav.Item>
			<Link to='create-game' style={linkStyle}>
				Create Game
			</Link>
		</Nav.Item>
		<Nav.Item>
			<Link to='games' style={linkStyle}>
				User Games
			</Link>
		</Nav.Item>
		
=======
		<Nav.Item>
			<Link to='create-game' style={linkStyle}>
				Create Game
			</Link>
		</Nav.Item>
<<<<<<< HEAD
>>>>>>> b5c6c37 (creating game with form functioning)
=======
		<Nav.Item>
			<Link to='games' style={linkStyle}>
				User Games
			</Link>
		</Nav.Item>
>>>>>>> dc6483a (started user games index)
	</>
)

const unauthenticatedOptions = (
	<>
        <Nav.Item>
		    <Link to='sign-up' style={linkStyle}>Sign Up</Link>
        </Nav.Item>
        <Nav.Item>
		    <Link to='sign-in' style={linkStyle}>Sign In</Link>
        </Nav.Item>
	</>
)

const alwaysOptions = (
	<>
		<Nav.Link>
			<Link to='/homepage' style={linkStyle}>
				Home
			</Link>
		</Nav.Link>
		<Nav.Link>
			<Link to='/game' style={linkStyle}>
				Game
			</Link>
		</Nav.Link>

	</>
)

const Header = ({ user }) => (
	<Navbar bg='primary' variant='dark' expand='md'>
		<Navbar>
            <Link to='/homepage' style={linkStyle}>
                react-auth-template
            </Link>
        </Navbar>
		<Navbar.Toggle aria-controls='basic-navbar-nav' />
		<Navbar.Collapse id='basic-navbar-nav'>
			<Nav className='ml-auto'>
				{user && (
					<span className='navbar-text mr-2'>Welcome, {user.email}</span>
				)}
				{alwaysOptions}
				{user ? authenticatedOptions : unauthenticatedOptions}
			</Nav>
		</Navbar.Collapse>
	</Navbar>
)

export default Header
