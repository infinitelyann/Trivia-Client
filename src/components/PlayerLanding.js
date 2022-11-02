import React from 'react'
import { Link } from 'react-router-dom'

const PlayerLanding = () => {
    return (
        <div style={{textAlign: 'center', display: 'flex', justifyContent: 'center'}}>
            <div style={{ backgroundColor: '#240046', width: '200px', height: '200px', padding: '30px', border: '4px solid #7552f2', marginLeft: '20px', marginTop: '20px' }}>
            <p style={{color: 'white'}}>Ready To Test Your Knowledge?</p>
            <Link className='btn' to='/game' style={{color: 'white', border:'2px solid #ffc300', fontSize: '15px', borderRadius: '10px'}}>Play</Link>
            </div>
        </div>
    )
}

export default PlayerLanding