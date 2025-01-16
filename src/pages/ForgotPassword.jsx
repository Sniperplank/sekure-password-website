import { Button, Stack, Typography } from '@mui/material'
import React, { useState } from 'react'
import { StyledInput } from '../StyledComponents/StyledInput'
import axios from 'axios'

function ForgotPassword() {
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    const handlePasswordResetRequest = async () => {
        try {
            const response = await axios.post('http://localhost:5000/user/forgot-password', { email })
            setMessage(response.data.message)
        } catch (error) {
            setMessage(error.response?.data?.message || 'Something went wrong.')
        }
    }

    return (
        <Stack spacing={4}>
            <Typography variant="h5" color="primary">Forgot Password</Typography>
            <StyledInput variant="outlined" label="Email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <Button variant="contained" color="primary" onClick={handlePasswordResetRequest}>Send Reset Link</Button>
            {message && <Typography variant="body2">{message}</Typography>}
        </Stack>
    )
}

export default ForgotPassword