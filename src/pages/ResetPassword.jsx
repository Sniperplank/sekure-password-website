import { Button, Stack, Typography } from '@mui/material'
import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { StyledInput } from '../StyledComponents/StyledInput'
import VisibilityIcon from '@mui/icons-material/Visibility'
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff'
import { StyledButton } from '../StyledComponents/StyledButton'

function ResetPassword() {
    const [searchParams] = useSearchParams()
    const token = searchParams.get('token')
    const [newPassword, setNewPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [error, setError] = useState('');
    const [message, setMessage] = useState('')
    const navigate = useNavigate()
    const [isHidden, setIsHidden] = useState(true)

    const changeHiddenMode = () => {
        setIsHidden(prev => !prev)
    }

    const handleResetPassword = async () => {
        if (newPassword !== confirmPassword) {
            setError('Passwords do not match!')
            return
        }
        try {
            // const response = await axios.post('http://localhost:5000/user/reset-password', {
            //     token,
            //     newPassword,
            // })
            const response = await axios.post('https://sekure-password-server.vercel.app/user/reset-password', {
                token,
                newPassword,
            })
            setMessage(response.data.message)
            setTimeout(() => navigate('/signin'), 3000); // Redirect after success
        } catch (error) {
            setMessage(error.response?.data?.message || 'Something went wrong.')
        }
    }

    return (
        <Stack spacing={4} sx={{ maxWidth: '400px', margin: 'auto', paddingTop: '50px' }}>
            <Typography variant="h5" color="primary">Reset Password</Typography>
            <Stack direction='row' spacing={1}>
                <StyledInput variant="outlined" label="New Password" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} type={isHidden ? 'password' : 'text'} sx={{ width: '90%' }} />
                {isHidden ? <VisibilityOffIcon onClick={changeHiddenMode} color='primary' sx={{ alignSelf: 'center', cursor: 'pointer' }} /> : <VisibilityIcon onClick={changeHiddenMode} color='primary' sx={{ alignSelf: 'center', cursor: 'pointer' }} />}
            </Stack>
            <StyledInput variant='outlined' name='confirmPassword' label='Confirm Main Password' value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} type={isHidden ? 'password' : 'text'} />
            {error && <Typography color="error">{error}</Typography>}
            <StyledButton variant="contained" color="primary" onClick={handleResetPassword}> Reset Password </StyledButton>
            {message && <Typography variant="body1">{message}</Typography>}
        </Stack>
    )
}

export default ResetPassword