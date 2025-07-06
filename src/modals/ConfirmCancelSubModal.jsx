import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import { ModalContent } from '../StyledComponents/ModalContent'
import { ModalOverlay } from '../StyledComponents/ModalOverlay'
import { Stack, Typography } from '@mui/material'
import { StyledButton } from '../StyledComponents/StyledButton'
import axios from 'axios'
import { useAuth } from '../contexts/AuthContext'
import api from '../utils/axios'
import { useNavigate } from 'react-router-dom'

function ConfirmCancelSubModal({ open, onClose }) {
    const { user, setUser } = useAuth()
    const [message, setMessage] = useState("")
    const navigate = useNavigate()

    const handleCancelSubscription = async () => {
        try {
            const res = await api.post('/stripe/cancel-subscription', {}, { withCredentials: true })
            setMessage(res.data.message)
            setTimeout(() => {
                setUser(null)
                navigate('/list')
            }, 3000)
        } catch (err) {
            console.error(err)
            setMessage(err.data.message)
        }
    }

    if (!open) return null
    return ReactDOM.createPortal(
        <>
            <ModalOverlay onClick={onClose} />
            <ModalContent width={{ xs: '50%', sm: '30%' }}>
                <Stack spacing={4}>
                    <Typography variant='h5'>Are you sure you want to cancel your premium plan?</Typography>
                    <Stack spacing={1}>
                        <Stack spacing={3} direction='row'>
                            <StyledButton variant='contained' color='error' onClick={handleCancelSubscription}>Cancel Plan</StyledButton>
                            <StyledButton variant='contained' color='primary' onClick={onClose}>Back</StyledButton>
                        </Stack>
                        <Typography variant='body1'>You will lose all the premium features. You can still use our services with the free plan</Typography>
                    </Stack>
                    {message !== "" && <Typography variant='h6'>{message}</Typography>}
                </Stack>
            </ModalContent >
        </>,
        document.getElementById('confirmCancelSub')
    )
}

export default ConfirmCancelSubModal