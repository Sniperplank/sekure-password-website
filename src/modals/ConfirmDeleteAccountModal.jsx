import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import { ModalContent } from '../StyledComponents/ModalContent'
import { ModalOverlay } from '../StyledComponents/ModalOverlay'
import { Stack, Typography } from '@mui/material'
import { StyledButton } from '../StyledComponents/StyledButton'
import axios from 'axios'
import { useAuth } from '../contexts/AuthContext'
import api from '../utils/axios'

function ConfirmDeleteAccountModal({ open, onClose }) {
    const [message, setMessage] = useState("")

    const handleConfirmDeleteRequest = async () => {
        try {
            // const response = await axios.post('http://localhost:5000/user/confirm-account-delete', {}, { headers: { Authorization: `Bearer ${user.token}` } })
            const response = await api.post('/user/confirm-account-delete', { withCredentials: true })
            setMessage(response.data.message)
        } catch (error) {
            setMessage(error.response?.data?.message || 'Something went wrong.')
        }
    }

    if (!open) return null
    return ReactDOM.createPortal(
        <>
            <ModalOverlay onClick={onClose} />
            <ModalContent width={{ xs: '50%', sm: '30%' }}>
                <Stack spacing={4}>
                    <Typography variant='h5'>Are you sure you want to delete your account?</Typography>
                    <Stack spacing={1}>
                        <Stack spacing={3} direction='row'>
                            <StyledButton variant='contained' color='error' onClick={handleConfirmDeleteRequest}>Delete</StyledButton>
                            <StyledButton variant='contained' color='primary' onClick={onClose}>Cancel</StyledButton>
                        </Stack>
                        <Typography variant='body1'>A confirmation email will be sent to the email associated with this account. Make sure to download a backup of your records!</Typography>
                    </Stack>
                    {message !== "" && <Typography variant='h6'>{message}</Typography>}
                </Stack>
            </ModalContent >
        </>,
        document.getElementById('confirmDeleteAccount')
    )
}

export default ConfirmDeleteAccountModal