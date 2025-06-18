import React from 'react'
import ReactDOM from 'react-dom'
import { ModalContent } from '../StyledComponents/ModalContent'
import { ModalOverlay } from '../StyledComponents/ModalOverlay'
import { Stack, Typography } from '@mui/material'
import { StyledButton } from '../StyledComponents/StyledButton'

function ConfirmDeleteAccountModal({ open, onClose, confirmDelete }) {
    if (!open) return null
    return ReactDOM.createPortal(
        <>
            <ModalOverlay onClick={onClose} />
            <ModalContent width={{ xs: '50%', sm: '30%' }}>
                <Stack spacing={4}>
                    <Typography variant='h5'>Are you sure you want to delete your account?</Typography>
                    <Stack spacing={1}>
                        <Stack spacing={3} direction='row'>
                            <StyledButton variant='contained' color='error' onClick={confirmDelete}>Delete</StyledButton>
                            <StyledButton variant='contained' color='primary' onClick={onClose}>Cancel</StyledButton>
                        </Stack>
                        <Typography variant='body1'>A confirmation email will be sent to the email associated with this account</Typography>
                    </Stack>
                </Stack>
            </ModalContent >
        </>,
        document.getElementById('confirmDeleteAccount')
    )
}

export default ConfirmDeleteAccountModal