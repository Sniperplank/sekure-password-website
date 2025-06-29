import { Button, Stack, Typography } from '@mui/material'
import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { StyledButton } from '../StyledComponents/StyledButton'
import api from '../utils/axios'

function DeleteAccount({ logout }) {
    const [searchParams] = useSearchParams()
    const token = searchParams.get('token')
    const [message, setMessage] = useState('')

    const handleDeleteAccount = async () => {
        try {
            // const response = await axios.delete('http://localhost:5000/user/delete-account', { data: { token: token } })
            const response = await api.delete('/user/delete-account', { data: { token: token } })
            setMessage(response.data.message)
            setTimeout(() => {
                logout()
            }, 2000); // Redirect after success
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