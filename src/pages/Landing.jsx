import React, { useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { StyledButton } from '../StyledComponents/StyledButton'
import { Box, Divider, Stack, Typography } from '@mui/material'
import ShieldOutlinedIcon from '@mui/icons-material/ShieldOutlined'
import LockSVG from '../assets/locksvg.svg'
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

    return (
        <Stack spacing={20}>
            <Stack direction='row' justifyContent='space-between'>
                <Stack direction='row' spacing={1}>
                    <ShieldOutlinedIcon fontSize='large' color='primary' />
                    <Typography variant='h5' fontWeight='bold'>Sekure Password</Typography>
                </Stack>
                <StyledButton variant='contained' color='primary' onClick={handleGetStarted} sx={{ height: 40 }}>Get Started</StyledButton>
            </Stack>
            <Stack direction='row' justifyContent='space-between'>
                <Stack spacing={4} width='50%'>
                    <Typography variant='h3'>Keep Your Passwords Safe and Secure</Typography>
                    <Typography variant='h6' sx={{ opacity: '75%' }}>Never forget a password again. Store, generate, and manage all your passwords in one secure vault</Typography>
                    <Stack direction='row' spacing={2}>
                        <StyledButton variant='contained' color='primary' onClick={handleGetStarted}>Get Started</StyledButton>
                        <StyledButton variant='outlined' color='primary' onClick={handleLearnMore} sx={{ color: 'text.main', textTransform: 'none' }}>Learn More</StyledButton>
                    </Stack>
                </Stack>
                <img src={LockSVG} width={350} height={350} />
            </Stack>
            <Stack spacing={5} ref={ref}>
                <Typography variant='h4' fontWeight='bold' alignSelf='center'>Why Choose Sekure Password?</Typography>
                <Stack direction='row' spacing={2} justifyContent='space-between'>
                    <CardBox sx={{ maxWidth: '20%' }}>
                        <Stack spacing={2}>
                            <LockIcon fontSize='large' color='primary' />
                            <Typography variant='h6'>Bank-Level Encryption</Typography>
                            <Typography variant='body1' sx={{ opacity: '75%' }}>Your data is protected with AES-256 encryption, the same standard used by banks.</Typography>
                        </Stack>
                    </CardBox>
                    <CardBox sx={{ maxWidth: '20%' }}>
                        <Stack spacing={2}>
                            <PasswordIcon fontSize='large' color='primary' />
                            <Typography variant='h6'>Password Generator</Typography>
                            <Typography variant='body1' sx={{ opacity: '75%' }}>Create strong, unique passwords with our advanced generator.</Typography>
                        </Stack>
                    </CardBox>
                    <CardBox sx={{ maxWidth: '20%' }}>
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