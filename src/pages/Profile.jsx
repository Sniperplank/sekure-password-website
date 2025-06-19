import { Stack, Typography } from '@mui/material'
import { useAuth } from '../contexts/AuthContext'
import LogoutIcon from '@mui/icons-material/Logout'
import DeleteIcon from '@mui/icons-material/Delete'
import { StyledButton } from '../StyledComponents/StyledButton'
import ConfirmDeleteAccountModal from '../modals/ConfirmDeleteAccountModal'
import { useState } from 'react'


function Profile({ logout }) {
    const { user } = useAuth()
    const [isConfirmDeleteAccountModalOpen, setIsConfirmDeleteAccountModalOpen] = useState(false)

    return (
        <Stack spacing={10}>
            <Stack spacing={4}>
                <Typography variant='h4' color='primary'>Account Info</Typography>
                <Typography variant='h6'>Email Address: {user?.result.email}</Typography>
                <Typography variant='h6'>Created at: {new Date(user?.result.createdAt).toLocaleString()}</Typography>
            </Stack>
            <Stack spacing={4}>
                <Typography variant='h4' color='primary'>Account Actions</Typography>
                <StyledButton onClick={logout} variant='contained' startIcon={<LogoutIcon color='error' />} sx={{ justifyContent: 'flex-start', width: 300, height: 40 }}>Logout of Account</StyledButton>
                <Stack spacing={1}>
                    <StyledButton onClick={() => setIsConfirmDeleteAccountModalOpen(true)} variant='contained' color='error' startIcon={<DeleteIcon />} sx={{ justifyContent: 'flex-start', width: 300, height: 40 }}>Delete Your Account</StyledButton>
                    <Typography variant='body1'>A confirmation email will be sent to the email associated with this account</Typography>
                </Stack>
            </Stack>
            <ConfirmDeleteAccountModal open={isConfirmDeleteAccountModalOpen} onClose={() => setIsConfirmDeleteAccountModalOpen(false)} />
        </Stack>
    )
}

export default Profile  