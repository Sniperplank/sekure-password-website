import { Stack, Typography } from '@mui/material'
import { useAuth } from '../contexts/AuthContext'
import LogoutIcon from '@mui/icons-material/Logout'
import DeleteIcon from '@mui/icons-material/Delete'
import { StyledButton } from '../StyledComponents/StyledButton'
import ConfirmDeleteAccountModal from '../modals/ConfirmDeleteAccountModal'
import { useRef, useState } from 'react'
import axios from 'axios'


function Profile({ logout }) {
    const { user } = useAuth()
    const [isConfirmDeleteAccountModalOpen, setIsConfirmDeleteAccountModalOpen] = useState(false)
    const fileInputRef = useRef()

    const handleDownload = async () => {
        try {
            const res = await axios.get('https://sekure-password-server.vercel.app/record/download', {
                responseType: 'blob', // Important for file downloads
                withCredentials: true
            })

            const url = window.URL.createObjectURL(new Blob([res.data]))
            const link = document.createElement('a')
            link.href = url
            link.setAttribute('download', 'sekure-records-backup.json')
            document.body.appendChild(link)
            link.click()
            link.remove()
        } catch (error) {
            console.error('Download error:', error)
            alert('Failed to download your records.')
        }
    }

    const handleUpload = async (e) => {
        const file = e.target.files[0]
        if (!file) return

        const formData = new FormData()
        formData.append('file', file)

        try {
            const res = await axios.post('https://sekure-password-server.vercel.app/record/upload', formData, {
                withCredentials: true,
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
            alert(res.data.message || 'Upload successful!')
        } catch (error) {
            console.error('Upload error:', error)
            alert('Failed to upload records.')
        }
    }

    return (
        <Stack spacing={10}>
            <Stack spacing={4}>
                <Typography variant='h4' color='primary'>Account Info</Typography>
                <Typography variant='h6'>Email Address: {user?.email}</Typography>
                <Typography variant='h6'>Created at: {new Date(user?.createdAt).toLocaleString()}</Typography>
            </Stack>
            <Stack spacing={4}>
                <Typography variant='h4' color='primary'>Data Management</Typography>
                <StyledButton onClick={handleDownload} variant='outlined' sx={{ width: 300, height: 40 }}>Download Your Records</StyledButton>
                <StyledButton onClick={() => fileInputRef.current?.click()} variant='outlined' sx={{ width: 300, height: 40 }}>Upload Records</StyledButton>
                <input type='file' accept='.json' ref={fileInputRef} style={{ display: 'none' }} onChange={handleUpload} />
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