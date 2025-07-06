import { Divider, Stack, Typography } from '@mui/material'
import { useAuth } from '../contexts/AuthContext'
import LogoutIcon from '@mui/icons-material/Logout'
import DeleteIcon from '@mui/icons-material/Delete'
import { StyledButton } from '../StyledComponents/StyledButton'
import ConfirmDeleteAccountModal from '../modals/ConfirmDeleteAccountModal'
import { useRef, useState } from 'react'
import axios from 'axios'
import { useRecords } from '../contexts/RecordsContext'
import api from '../utils/axios'
import UpgradeIcon from '@mui/icons-material/Upgrade'
import CancelIcon from '@mui/icons-material/Cancel'
import DownloadIcon from '@mui/icons-material/Download'
import UploadIcon from '@mui/icons-material/Upload'
import ConfirmCancelSubModal from '../modals/ConfirmCancelSubModal'
import { useNavigate } from 'react-router-dom'


function Profile({ logout }) {
    const { user, setUser } = useAuth()
    const { records, setRecords } = useRecords()
    const [isConfirmDeleteAccountModalOpen, setIsConfirmDeleteAccountModalOpen] = useState(false)
    const [isConfirmCancelSubModalOpen, setIsConfirmCancelSubModalOpen] = useState(false)
    const fileInputRef = useRef()
    const navigate = useNavigate()

    const handleDownload = async () => {
        try {
            const res = await api.get('/record/download', {
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
            const res = await api.post('/record/upload', formData, {
                withCredentials: true,
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
            setRecords(null)
            alert(res.data.message || 'Upload successful!')
        } catch (error) {
            console.error('Upload error:', error)
            alert('Failed to upload records.')
        }
    }

    const undoCancel = async () => {
        try {
            await api.post('/stripe/undo-cancel-subscription', {}, { withCredentials: true })
            alert('Subscription cancellation undone!')
            setUser(null)
            navigate('/list')
        } catch (err) {
            alert('Failed to undo. Try again later.')
        }
    }

    return (
        <Stack spacing={10}>
            <Stack spacing={4}>
                <Stack spacing={2}>
                    <Typography variant='h4' color='primary'>Account Info</Typography>
                    <Divider sx={{ backgroundColor: 'primary.main' }}></Divider>
                </Stack>
                <Typography variant='body1'>Email Address: {user?.email}</Typography>
                <Typography variant='body1'>Created at: {new Date(user?.createdAt).toLocaleString()}</Typography>
            </Stack>
            <Stack spacing={4}>
                <Stack spacing={2}>
                    <Typography variant='h4' color='primary'>Data Management</Typography>
                    <Divider sx={{ backgroundColor: 'primary.main' }}></Divider>
                </Stack>
                {user?.subscription.status === "free" ? <Typography variant='body1'>Upgrade your plan to manage your data</Typography>
                    : <Stack direction={{ xs: 'column', md: 'row' }} spacing={4}>
                        <StyledButton onClick={handleDownload} variant='contained' startIcon={<DownloadIcon />} sx={{ width: 250, height: 40, textTransform: 'none' }}>Download Your Records</StyledButton>
                        <StyledButton onClick={() => fileInputRef.current?.click()} variant='contained' startIcon={<UploadIcon />} sx={{ width: 200, height: 40, textTransform: 'none' }}>Upload Records</StyledButton>
                        <input type='file' accept='.json' ref={fileInputRef} style={{ display: 'none' }} onChange={handleUpload} />
                    </Stack>}
            </Stack>
            <Stack spacing={4}>
                <Stack spacing={2}>
                    <Typography variant='h4' color='primary'>Your Plan</Typography>
                    <Divider sx={{ backgroundColor: 'primary.main' }}></Divider>
                </Stack>
                <Typography variant='body1'>Current plan: {user?.subscription.status.toUpperCase()} {user?.subscription.cancelAtPeriodEnd && '(Cancelled)'}</Typography>
                {
                    user?.subscription.status === "premium" ?
                        <Stack spacing={4}>
                            <Typography variant='body1'>{user?.subscription.cancelAtPeriodEnd ? 'Premium untill' : 'Current period end date:'} {new Date(user?.subscription.currentPeriodEnd).toLocaleString()}</Typography>
                            {user?.subscription.cancelAtPeriodEnd
                                ? <Stack spacing={2}>
                                    <StyledButton variant='contained' color='primary' startIcon={<CancelIcon />} onClick={undoCancel} sx={{ justifyContent: 'flex-start', width: 250, height: 40 }}>Undo Cancellation</StyledButton>
                                    <Typography variant='body1'>* Your records will be deleted at the end of the current billing period *</Typography>
                                </Stack>
                                : <StyledButton variant='contained' color='error' startIcon={<CancelIcon />} onClick={() => setIsConfirmCancelSubModalOpen(true)} sx={{ justifyContent: 'flex-start', width: 200, height: 40 }}>Cancel Plan</StyledButton>}
                        </Stack>
                        : <StyledButton variant='contained' color='primary' startIcon={<UpgradeIcon />} onClick={() => { navigate('/upgrade') }} sx={{ justifyContent: 'flex-start', width: 200, height: 40 }}>Upgrade Plan</StyledButton>
                }
            </Stack>
            <Stack spacing={4}>
                <Stack spacing={2}>
                    <Typography variant='h4' color='primary'>Account Actions</Typography>
                    <Divider sx={{ backgroundColor: 'primary.main' }}></Divider>
                </Stack>
                <Stack direction={{ xs: 'column', md: 'row' }} spacing={5}>
                    <StyledButton onClick={logout} variant='contained' startIcon={<LogoutIcon color='error' />} sx={{ justifyContent: 'flex-start', width: 250, height: 40 }}>Logout of Account</StyledButton>
                    <Stack spacing={1}>
                        <StyledButton onClick={() => setIsConfirmDeleteAccountModalOpen(true)} variant='contained' color='error' startIcon={<DeleteIcon />} sx={{ justifyContent: 'flex-start', width: 250, height: 40 }}>Delete Your Account</StyledButton>
                        <Typography variant='body2'>A confirmation email will be sent to the email associated with this account</Typography>
                    </Stack>
                </Stack>
            </Stack>
            <ConfirmDeleteAccountModal open={isConfirmDeleteAccountModalOpen} onClose={() => setIsConfirmDeleteAccountModalOpen(false)} />
            <ConfirmCancelSubModal open={isConfirmCancelSubModalOpen} onClose={() => setIsConfirmCancelSubModalOpen(false)} />
        </Stack>
    )
}

export default Profile  