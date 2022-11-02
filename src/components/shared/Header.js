import React, { Fragment } from 'react'
import { NavDropdown } from 'react-bootstrap'
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
		<Nav.Item >
			<Link to='change-password' style={linkStyle}>
				
			</Link>
		</Nav.Item>
		<Nav.Item className='m-2'>
			<Link to='create-game' style={linkStyle}>
				Create Game
			</Link>
		</Nav.Item>
		<Nav.Item className='m-2'>
			<Link to='games' style={linkStyle}>
				User Games
			</Link>
		</Nav.Item>
		<Nav.Item>
			<Link to='sign-out' style={linkStyle}>
			</Link>
		</Nav.Item>
		
	</>
)

const unauthenticatedOptions = (
	<>
        <Nav.Item className='m-2'>
		    <Link to='sign-up' style={linkStyle} >Sign Up</Link>
        </Nav.Item>
        <Nav.Item className='m-2'>
		    <Link to='sign-in' style={linkStyle} >Sign In</Link>
        </Nav.Item>
	</>
)

// const alwaysOptions = (
// 	<>
// 		<Nav.Link>
// 			<Link to='/homepage' style={linkStyle}>
// 				Home
// 			</Link>
// 		</Nav.Link>
// 		<Nav.Link>
// 			<Link to='/game' style={linkStyle}>
// 				Game
// 			</Link>
// 		</Nav.Link>

// 	</>
// )

const Header = ({ user }) => (
	<Navbar bg='dark' variant='dark' expand='md'>
		<Navbar>
            <Navbar.Brand className='m-1'>
                Quizard
            </Navbar.Brand>
        </Navbar>
		<Navbar.Toggle aria-controls='basic-navbar-nav' />
		<Navbar.Collapse id='basic-navbar-nav'>
			<Nav className='ml-auto'>
				<NavDropdown
					id='nav-dropdown-dark'
					title='Profile'
					menuVariant='dark'
				>
					<NavDropdown.Item>
						<Nav.Item>
						{user && (
					<span className='navbar-text mr-2' style={{color: 'white'}}>Welcome, {user.email}</span>
				)}
				</Nav.Item>
				</NavDropdown.Item>
				<NavDropdown.Item>
				<Nav.Item className='m-2'>
							<Link to='change-password' style={linkStyle}>
								Change Password
							</Link>
						</Nav.Item>
					</NavDropdown.Item>
					<NavDropdown.Divider/>
					<NavDropdown.Item>
						<Nav.Item className='m-2'>
							<Link to='sign-out' style={linkStyle}>
								Sign Out
							</Link>
						</Nav.Item>
					</NavDropdown.Item>
				</NavDropdown>
				{/* {user && (
					<span className='navbar-text mr-2' style={{color: 'white'}}>Welcome, {user.email}</span>
				)} */}
				{/* {alwaysOptions} */}
				{user ? authenticatedOptions : unauthenticatedOptions}
				
			</Nav>
			
		</Navbar.Collapse>
	</Navbar>
)

export default Header
