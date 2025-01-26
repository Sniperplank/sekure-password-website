import { Button, Stack, Typography } from '@mui/material'
import React, { useState } from 'react'
import { StyledInput } from '../StyledComponents/StyledInput'
import axios from 'axios'
import { StyledButton } from '../StyledComponents/StyledButton'
import { useNavigate } from 'react-router-dom'

function ForgotPassword() {
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const navigate = useNavigate()

    const handlePasswordResetRequest = async () => {
        try {
            const response = await axios.post('https://sekure-password-server.vercel.app/user/forgot-password', { email })
            setMessage(response.data.message)
        } catch (error) {
            setMessage(error.response?.data?.message || 'Something went wrong.')
        }
    }

    return (
        <Stack spacing={4} sx={{ p: 10, m: 10 }}>
            <Typography variant="h5" color="primary">Forgot Password</Typography>
            <Typography variant="body1">Enter your e-mail to reset your password</Typography>
            <StyledInput variant="outlined" label="Email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <StyledButton variant="contained" color="primary" onClick={handlePasswordResetRequest}>Send Reset Link</StyledButton>
            <Button onClick={() => { navigate(-1) }} >Back</Button>
            {message && <Typography variant="body1">{message}</Typography>}
        </Stack>
    )
}

export default ForgotPassword