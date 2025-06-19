import { Box, Stack, Typography, Button } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { CardBox } from '../StyledComponents/CardBox'
import { StyledButton } from '../StyledComponents/StyledButton'
import { StyledInput } from '../StyledComponents/StyledInput'
import { signin, signup } from '../actions/auth'
import VisibilityIcon from '@mui/icons-material/Visibility'
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff'

const initialState = { firstName: '', lastName: '', email: '', password: '', confirmPassword: '' }

function Singin() {
    const [isSignup, setIsSignup] = useState(false)
    const [formData, setFormData] = useState(initialState)
    const [isHidden, setIsHidden] = useState(true)
    const [error, setError] = useState('')
    const navigate = useNavigate()

    const changeHiddenMode = () => {
        setIsHidden(prev => !prev)
    }

    const switchMode = () => {
        setIsSignup((prev) => !prev)
    }

    const handleSubmit = (e) => {
        setError("")
        e.preventDefault()
        if (isSignup) {
            signup(formData, navigate, setError)
        } else {
            signin(formData, navigate, setError)
        }
    }

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const forgotPassword = () => {
        navigate('/forgot-password')
    }

    return (
        <CardBox sx={{ minWidth: { xs: '90%', sm: 500 }, justifySelf: 'center', padding: { xs: 2, sm: 5 } }}>
            <Typography variant='h5' paddingBottom={3}>{isSignup ? 'Sign up' : 'Sign In'}</Typography>
            <form onSubmit={handleSubmit}>
                <Stack spacing={3}>
                    {
                        isSignup && (
                            <Stack direction='row' spacing={2}>
                                <StyledInput variant='outlined' name='firstName' label='First Name' onChange={handleChange} width='50%' autoFocus />
                                <StyledInput variant='outlined' name='lastName' label='Last Name' onChange={handleChange} width='50%' />
                            </Stack>
                        )
                    }
                    <StyledInput variant='outlined' name='email' label='Email' onChange={handleChange} type='email' />
                    <Stack direction='row' spacing={1}>
                        <StyledInput variant='outlined' name='password' label='Main Password' onChange={handleChange} type={isHidden ? 'password' : 'text'} sx={{ width: '90%' }} />
                        {isHidden ? <VisibilityOffIcon onClick={changeHiddenMode} color='primary' sx={{ alignSelf: 'center', cursor: 'pointer' }} /> : <VisibilityIcon onClick={changeHiddenMode} color='primary' sx={{ alignSelf: 'center', cursor: 'pointer' }} />}
                    </Stack>
                    {isSignup && <StyledInput variant='outlined' name='confirmPassword' label='Confirm Main Password' onChange={handleChange} type={isHidden ? 'password' : 'text'} />}
                    {error !== '' && <Typography variant='h6' color='error'>{error}</Typography>}
                    <StyledButton type='submit' fullWidth variant='contained' color='primary'>
                        {isSignup ? 'Sign Up' : 'Sign In'}
                    </StyledButton>
                    <Button onClick={switchMode} sx={{ textTransform: 'none' }}>
                        {isSignup ? 'Already have an account? Sign in' : 'Dont have an account? Sign up'}
                    </Button>
                    {
                        !isSignup &&
                        <Button onClick={forgotPassword} sx={{ textTransform: 'none' }}>Forgot Password</Button>
                    }
                </Stack>
            </form>
        </CardBox>
    )
}

export default Singin