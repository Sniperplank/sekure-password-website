import React, { useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { StyledButton } from '../StyledComponents/StyledButton'
import { Box, Divider, Stack, Typography } from '@mui/material'
import ShieldOutlinedIcon from '@mui/icons-material/ShieldOutlined'
import LockSVG from '../assets/locksvg.svg'
import MusclesLock from '../assets/musclesLock.svg'
import ExtensionLock from '../assets/extensionLock.svg'
import { CardBox } from '../StyledComponents/CardBox'
import LockIcon from '@mui/icons-material/Lock'
import PasswordIcon from '@mui/icons-material/Password'
import VpnKeyIcon from '@mui/icons-material/VpnKey'

function Landing() {
    const navigate = useNavigate()
    const ref = useRef(null)

    const handleLearnMore = () => {
        ref.current?.scrollIntoView({ behavior: 'smooth' })
    }

    const handleGetStarted = () => {
        const profile = localStorage.getItem('profile')
        if (profile) {
            console.log('User already logged in:', profile)
            navigate('/list')
            return
        }
        navigate('/signin')
    }

    const openInNewTab = (url) => {
        const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
        if (newWindow) newWindow.opener = null
    }

    return (
        <Stack spacing={20} >
            <Stack direction='row' justifyContent='space-between' alignItems='center'>
                <Stack direction='row' spacing={1} alignItems='center'>
                    <ShieldOutlinedIcon fontSize='large' color='primary' />
                    <Typography variant='h5' fontWeight='bold'>Sekure Password</Typography>
                </Stack>
                <StyledButton variant='contained' color='primary' onClick={handleGetStarted} sx={{ height: 40 }}>Get Started</StyledButton>
            </Stack>
            <Stack direction={{ xs: 'column', sm: 'row' }} justifyContent='space-between' sx={{ pt: { xs: 0, sm: 10 }, pb: { xs: 5, sm: 10 }, borderBottom: 'solid' }}>
                <Stack spacing={4} width={{ xs: '100%', sm: '50%' }}>
                    <Typography variant='h3'>Keep Your Passwords Safe and Secure</Typography>
                    <Typography variant='h6' sx={{ opacity: '75%' }}>Never forget a password again. Store, generate, and manage all your passwords in one secure vault</Typography>
                    <Stack direction='row' spacing={2}>
                        <StyledButton variant='contained' color='primary' onClick={handleGetStarted}>Get Started</StyledButton>
                        <StyledButton variant='outlined' color='primary' onClick={handleLearnMore} sx={{ color: 'text.main', textTransform: 'none' }}>Learn More</StyledButton>
                    </Stack>
                </Stack>
                <img src={MusclesLock} width={{ xs: 400, sm: 550 }} height={300} />
            </Stack>
            <Stack direction={{ xs: 'column', sm: 'row' }} justifyContent='space-between' sx={{ pt: { xs: 0, sm: 10 }, pb: { xs: 5, sm: 10 }, borderBottom: 'solid' }}>
                <img src={ExtensionLock} width={350} height={350} />
                <Stack spacing={4} width={{ xs: '100%', sm: '50%' }}>
                    <Typography variant='h4'>Get the extension to start signing into websites faster</Typography>
                    <Typography variant='body1' sx={{ opacity: '75%' }}>Click the button below to install the extension</Typography>
                    <StyledButton variant='contained' color='primary' sx={{ width: '50%' }} onClick={() => { openInNewTab('https://chromewebstore.google.com/detail/sekure-password/kknoipdljcfhbbbiiehdogelfbkodoep') }}>Get Extension</StyledButton>
                </Stack>
            </Stack>
            <Stack spacing={5} ref={ref} sx={{ paddingBottom: 10 }}>
                <Typography variant='h4' fontWeight='bold' alignSelf='center'>Why Choose Sekure Password?</Typography>
                <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} justifyContent='space-between'>
                    <CardBox sx={{ maxWidth: { xs: '100%', sm: '20%' } }}>
                        <Stack spacing={2}>
                            <LockIcon fontSize='large' color='primary' />
                            <Typography variant='h6'>Bank-Level Encryption</Typography>
                            <Typography variant='body1' sx={{ opacity: '75%' }}>Your data is protected with AES-256 encryption, the same standard used by banks.</Typography>
                        </Stack>
                    </CardBox>
                    <CardBox sx={{ maxWidth: { xs: '100%', sm: '20%' } }}>
                        <Stack spacing={2}>
                            <PasswordIcon fontSize='large' color='primary' />
                            <Typography variant='h6'>Password Generator</Typography>
                            <Typography variant='body1' sx={{ opacity: '75%' }}>Create strong, unique passwords with our advanced generator.</Typography>
                        </Stack>
                    </CardBox>
                    <CardBox sx={{ maxWidth: { xs: '100%', sm: '20%' } }}>
                        <Stack spacing={2}>
                            <VpnKeyIcon fontSize='large' color='primary' />
                            <Typography variant='h6'>Zero-Knowledge Architecture</Typography>
                            <Typography variant='body1' sx={{ opacity: '75%' }}> Your passwords are encrypted with a key derived from your main password, accessible only to you.</Typography>
                        </Stack>
                    </CardBox>
                </Stack>
            </Stack>
        </Stack>
    )
}

export default Landing