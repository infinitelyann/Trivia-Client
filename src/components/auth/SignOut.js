import { useNavigate } from 'react-router-dom'

import {Button, ButtonGroup} from 'react-bootstrap'
// import { Button } from 'semantic-ui-react'

import { signOut } from '../../api/auth'
import messages from '../shared/AutoDismissAlert/messages'

const SignOut = (props) => {
	const { msgAlert, clearUser, user } = props
    console.log(props)

    const navigate = useNavigate()

    const onSignOut = () => {
		signOut(user)
			.finally(() =>
				msgAlert({
					heading: 'Signed Out Successfully',
					message: messages.signOutSuccess,
					variant: 'success',
				})
			)
			.finally(() => navigate('/'))
			.finally(() => clearUser())
    }

    const onCancel = () => {
        navigate('/homepage')
    }

	return (
		<div style={{backgroundColor: '#240046', height: '100vh'}}>
            <div className='row' style={{textAlign: 'center'}}>
                <div className='col-sm-10 col-md-8 mx-auto mt-5'>
                    <h2 style={{color: 'white'}}>Are you sure you want to sign out?</h2>
                        <Button variant='white' onClick={onSignOut} className='signoutButton' style={{ color: 'white', border:'2px solid #ffc300'}}>
                            True
                        </Button>
                        <Button variant='white' onClick={onCancel} className='cancelButton'  style={{ color: 'white', border:'2px solid #ffc300'}}>
                            False
                        </Button>
                    
                </div>
            </div>
		</div>
	)
}

export default SignOut
