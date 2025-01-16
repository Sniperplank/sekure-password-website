import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { StyledButton } from '../StyledComponents/StyledButton'

function Landing() {
    const navigate = useNavigate()

    // Check for existing user profile on component mount
    useEffect(() => {
        localStorage.getItem('profile', (result) => {
            if (result.profile) {
                console.log('User already logged in:', result.profile)
                navigate('/list')
            }
        })
    }, [navigate])


    return (
        <StyledButton variant='contained' color='primary' onClick={() => { navigate('/signin') }}>Signin / Signup</StyledButton>
    )
}

export default Landing