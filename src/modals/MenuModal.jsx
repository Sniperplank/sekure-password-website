import React from 'react'
import ReactDOM from 'react-dom'
import { ModalContent } from '../StyledComponents/ModalContent'
import { ModalOverlay } from '../StyledComponents/ModalOverlay'
import { Divider, Stack } from '@mui/material'
import { StyledButton } from '../StyledComponents/StyledButton'
import { useNavigate } from 'react-router-dom'
import AddBoxIcon from '@mui/icons-material/AddBox'
import LogoutIcon from '@mui/icons-material/Logout'
import AccountBoxIcon from '@mui/icons-material/AccountBox'
import ViewListIcon from '@mui/icons-material/ViewList'
import { useAuth } from '../contexts/AuthContext'

function MenuModal({ open, onClose, logout }) {
    const { user, setUser } = useAuth()
    const navigate = useNavigate()

    const navigateToPage = (page) => {
        navigate(page)
        onClose()
    }

    if (!open) return null
    return ReactDOM.createPortal(
        <>
            <ModalOverlay onClick={onClose} />
            <ModalContent width={{ xs: '50%', sm: '30%' }}>
                <Stack spacing={3}>
                    <StyledButton startIcon={<AccountBoxIcon />} sx={{ color: 'primary.main', justifyContent: 'flex-start' }}>{user?.result.name}</StyledButton>
                    <Divider sx={{ backgroundColor: 'primary.main' }}></Divider>
                    <StyledButton onClick={() => { navigateToPage('/list') }} startIcon={<ViewListIcon />} sx={{ color: 'primary.main', justifyContent: 'flex-start' }}>Your Records</StyledButton>
                    <Divider sx={{ backgroundColor: 'primary.main' }}></Divider>
                    <StyledButton onClick={() => { navigateToPage('/add') }} startIcon={<AddBoxIcon />} sx={{ color: 'primary.main', justifyContent: 'flex-start' }}>Add Record</StyledButton>
                    <Divider sx={{ backgroundColor: 'primary.main' }}></Divider>
                    <StyledButton onClick={logout} startIcon={<LogoutIcon color='error' />} sx={{ color: 'primary.main', justifyContent: 'flex-start' }}>Logout</StyledButton>
                </Stack>
            </ModalContent >
        </>,
        document.getElementById('mobileMenu')
    )
}

export default MenuModal    