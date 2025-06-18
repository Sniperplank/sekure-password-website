import { Button, Stack, Typography } from '@mui/material'
import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { StyledButton } from '../StyledComponents/StyledButton'

function DeleteAccount() {
    const [searchParams] = useSearchParams()
    const token = searchParams.get('token')
    const [message, setMessage] = useState('')
    const navigate = useNavigate()

    const handleDeleteAccount = async () => {
        try {
            // const response = await axios.post('http://localhost:5000/user/reset-password', {token})
            const response = await axios.post('https://sekure-password-server.vercel.app/user/delete-account', { token })
            setMessage(response.data.message)
            setTimeout(() => navigate('/'), 3000); // Redirect after success
        } catch (error) {
            setMessage(error.response?.data?.message || 'Something went wrong.')
        }
    }

    return (
        <Stack spacing={4} sx={{ maxWidth: '400px', margin: 'auto', paddingTop: '50px' }}>
            <Typography variant="h5" color="primary">We're sorry to see you go</Typography>
            <StyledButton variant="contained" color="error" onClick={handleDeleteAccount}> Permanently Delete Account</StyledButton>
            {message && <Typography variant="body1">{message}</Typography>}
        </Stack>
    )
}

export default DeleteAccount