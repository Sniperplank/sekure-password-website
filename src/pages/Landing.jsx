import '../StyledComponents/Landing.css'
import React, { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { StyledButton } from '../StyledComponents/StyledButton'
import { Accordion, AccordionDetails, AccordionSummary, Box, Divider, Stack, Typography } from '@mui/material'
import ShieldOutlinedIcon from '@mui/icons-material/ShieldOutlined'
import LockSVG from '../assets/locksvg.svg'
import MusclesLock from '../assets/musclesLock.svg'
import MuscleLockGradient from '../assets/muscleLockGradient.svg'
import ExtensionLock from '../assets/extensionLock.svg'
import ExtensionIconSVG from '../assets/extensionIconSVG.svg'
import { CardBox } from '../StyledComponents/CardBox'
import LockIcon from '@mui/icons-material/Lock'
import PasswordIcon from '@mui/icons-material/Password'
import VpnKeyIcon from '@mui/icons-material/VpnKey'
import { useAuth } from '../contexts/AuthContext'
import ExtensionIcon from '@mui/icons-material/Extension'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import CancelIcon from '@mui/icons-material/Cancel'
import ClearIcon from '@mui/icons-material/Clear'

function Landing() {
    const navigate = useNavigate()
    const { user } = useAuth()
    const ref = useRef(null)
    const [expanded, setExpanded] = useState('')

    const handleAccordionChange = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false)
    }

    const handleLearnMore = () => {
        ref.current?.scrollIntoView({ behavior: 'smooth' })
    }

    const handleGetStarted = (plan) => {
        if (user) {
            if (plan === 'premium' && user.subscription?.status !== 'premium') {
                navigate('/upgrade') // Or trigger Stripe Checkout immediately
            } else {
                navigate('/list')
            }
            return
        }

        navigate(`/signin?plan=${plan}`)
    }

    const openInNewTab = (url) => {
        const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
        if (newWindow) newWindow.opener = null
    }

    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('featureBoxAnimation')
                }
            })
        })

        const elements = document.querySelectorAll('.featureBox')
        elements.forEach(el => observer.observe(el))

        return () => elements.forEach(el => observer.unobserve(el))
    }, [])

    return (
        <Stack className="landing" spacing={20}>
            <Stack direction='row' justifyContent='space-between' alignItems='center'>
                <Stack direction='row' spacing={1} alignItems='center'>
                    <ShieldOutlinedIcon fontSize='large' color='primary' />
                    <Typography variant='h4' sx={{ fontFamily: 'Brush Script MT, Brush Script Std, cursive' }}>Sekure Password</Typography>
                </Stack>
                <StyledButton className='getStartedButton' variant='contained' color='primary' onClick={handleGetStarted} sx={{ height: 40 }}>Sign In</StyledButton>
            </Stack>
            <Stack direction={{ xs: 'column', md: 'row' }} justifyContent='space-between' sx={{ p: { xs: 5, sm: 10 }, pb: { xs: 5, sm: 10 }, borderBottom: 'solid', background: 'linear-gradient(to left bottom, #a5c5d7, #7da1bf, #5c7da6, #435a8c, #32376f)', borderRadius: 5, boxShadow: '0px 0px 60px #a5c5d7' }}>
                <Stack spacing={4} width={{ xs: '100%', md: '50%' }}>
                    <Typography variant='h3'>Keep Your Passwords Safe and Secure</Typography>
                    <Typography variant='h6' sx={{ opacity: '75%' }}>Never forget a password again. Store, generate, and manage all your passwords in one secure vault</Typography>
                    <Stack direction='row' spacing={2}>
                        <StyledButton variant='contained' color='primary' sx={{ boxShadow: '0px 0px 10px #32376f' }} onClick={handleGetStarted}>Get Started</StyledButton>
                        <StyledButton variant='contained' color='primary' sx={{ boxShadow: '0px 0px 10px #32376f' }} onClick={() => { openInNewTab('https://chromewebstore.google.com/detail/sekure-password/kknoipdljcfhbbbiiehdogelfbkodoep') }}>Add to Chrome</StyledButton>
                        <StyledButton variant='outlined' color='primary' onClick={handleLearnMore} sx={{ color: 'text.main', textTransform: 'none' }}>Learn More</StyledButton>
                    </Stack>
                </Stack>
                <img className='musclesLock' loading='lazy' src={MuscleLockGradient} width={{ xs: 400, sm: 550 }} height={300} />
            </Stack>

            <Stack spacing={5} ref={ref}>
                <Typography variant='h4' fontWeight='bold' alignSelf='center'>Simple Plans</Typography>
                <Stack direction={{ xs: 'column', sm: 'row' }} justifyContent='space-evenly' spacing={{ xs: 3, sm: 0 }}>
                    <CardBox sx={{ maxWidth: { xs: '100%', sm: '20%' }, minWidth: '20%', borderBottom: 'solid' }}>
                        <Stack spacing={3}>
                            <Stack spacing={1}>
                                <Typography variant='h6'>Free</Typography>
                                <Stack direction='row' spacing={1}>
                                    <Typography variant='h3' fontWeight='bold'>$0</Typography>
                                    <Typography variant='h6' alignSelf='end'>/ month</Typography>
                                </Stack>
                            </Stack>
                            <Stack direction='row' justifyContent='space-between'>
                                <Typography variant='body2'>Maximum records</Typography>
                                <Stack direction='row' spacing={1}>
                                    <Typography variant='body2'>Up to 5</Typography>
                                    <CheckCircleIcon sx={{ color: '#3CC684' }} />
                                </Stack>
                            </Stack>
                            <Stack direction='row' justifyContent='space-between'>
                                <Typography variant='body2'>Download records</Typography>
                                <ClearIcon color='error' />
                            </Stack>
                            <Stack direction='row' justifyContent='space-between'>
                                <Typography variant='body2'>Upload/import records</Typography>
                                <ClearIcon color='error' />
                            </Stack>
                            <Stack direction='row' justifyContent='space-between'>
                                <Typography variant='body2'>Autofill login</Typography>
                                <ClearIcon color='error' />
                            </Stack>
                            <StyledButton className='getStartedButton' variant='contained' color='primary' sx={{ boxShadow: '0px 0px 10px #32376f' }} onClick={() => handleGetStarted('free')}>Get Started</StyledButton>
                        </Stack>
                    </CardBox>
                    <CardBox className='premiumCard' sx={{ maxWidth: { xs: '100%', sm: '20%' }, minWidth: '20%', textShadow: '2px 2px #32376f', borderBottom: 'solid', background: 'linear-gradient(to left bottom, #32376f, #31396f, #313b6f, #313d6f, #313f6f, #384b78, #3f5681, #48628a, #5b7a9d, #7293b1, #8aacc4, #a5c5d7)' }}>
                        <Stack spacing={3}>
                            <Stack spacing={1}>
                                <Typography variant='h6'>Premium</Typography>
                                <Stack direction='row' spacing={1}>
                                    <Stack direction='row'>
                                        <Typography variant='h3' fontWeight='bold'>$1</Typography>
                                        <Typography variant='h5' fontWeight='bold'>.99</Typography>
                                    </Stack>
                                    <Typography variant='h6' alignSelf='end'>/ month</Typography>
                                </Stack>
                            </Stack>
                            <Stack direction='row' justifyContent='space-between'>
                                <Typography variant='body2'>Maximum records</Typography>
                                <Stack direction='row' spacing={1}>
                                    <Typography variant='body2'>Unlimited</Typography>
                                    <CheckCircleIcon sx={{ color: '#3CC684' }} />
                                </Stack>
                            </Stack>
                            <Stack direction='row' justifyContent='space-between'>
                                <Typography variant='body2'>Download records</Typography>
                                <CheckCircleIcon sx={{ color: '#3CC684' }} />
                            </Stack>
                            <Stack direction='row' justifyContent='space-between'>
                                <Typography variant='body2'>Upload/import records</Typography>
                                <CheckCircleIcon sx={{ color: '#3CC684' }} />
                            </Stack>
                            <Stack direction='row' justifyContent='space-between'>
                                <Typography variant='body2'>Autofill login</Typography>
                                <CheckCircleIcon sx={{ color: '#3CC684' }} />
                            </Stack>
                            <StyledButton className='getStartedButton' variant='contained' color='primary' sx={{ boxShadow: '0px 0px 10px #32376f' }} onClick={() => handleGetStarted('premium')}>Get Started</StyledButton>
                        </Stack>
                    </CardBox>
                </Stack>
            </Stack>

            <Stack direction={{ xs: 'column', md: 'row' }} justifyContent='space-between' sx={{ p: { xs: 5, sm: 10 }, pb: { xs: 5, sm: 10 }, borderBottom: 'solid', background: 'linear-gradient(to right top, #a5c5d7, #7da1bf, #5c7da6, #435a8c, #32376f)', borderRadius: 5, boxShadow: '0px 0px 60px #32376f' }}>
                <img className='extensionIconSVG' loading='lazy' src={ExtensionIconSVG} width={{ xs: 200, sm: 350 }} height={350} />
                <Stack spacing={4} width={{ xs: '100%', md: '50%' }} justifyContent='center'>
                    <Typography variant='h4'>Get the extension to start signing into websites faster</Typography>
                    <Typography variant='body1' sx={{ opacity: '75%' }}>Click the button below to install the extension</Typography>
                    <StyledButton startIcon={<ExtensionIcon />} variant='contained' color='primary' sx={{ width: '50%', boxShadow: '0px 0px 10px #32376f' }} onClick={() => { openInNewTab('https://chromewebstore.google.com/detail/sekure-password/kknoipdljcfhbbbiiehdogelfbkodoep') }}>Get Extension</StyledButton>
                </Stack>
            </Stack>

            <Stack spacing={5}>
                <Typography variant='h4' fontWeight='bold' alignSelf='center'>Why Choose Sekure Password?</Typography>
                <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} justifyContent='space-between'>
                    <CardBox className='featureBox' sx={{ maxWidth: { xs: '100%', sm: '20%' }, borderBottom: 'solid' }}>
                        <Stack spacing={2}>
                            <LockIcon fontSize='large' color='primary' />
                            <Typography variant='h6'>Bank-Level Encryption</Typography>
                            <Typography variant='body1' sx={{ opacity: '75%' }}>Your data is protected with AES-256 encryption, the same standard used by banks.</Typography>
                        </Stack>
                    </CardBox>
                    <CardBox className='featureBox' sx={{ maxWidth: { xs: '100%', sm: '20%' }, borderBottom: 'solid' }}>
                        <Stack spacing={2}>
                            <PasswordIcon fontSize='large' color='primary' />
                            <Typography variant='h6'>Password Generator</Typography>
                            <Typography variant='body1' sx={{ opacity: '75%' }}>Create strong, unique passwords with our advanced generator.</Typography>
                        </Stack>
                    </CardBox>
                    <CardBox className='featureBox' sx={{ maxWidth: { xs: '100%', sm: '20%' }, borderBottom: 'solid' }}>
                        <Stack spacing={2}>
                            <VpnKeyIcon fontSize='large' color='primary' />
                            <Typography variant='h6'>Zero-Knowledge Architecture</Typography>
                            <Typography variant='body1' sx={{ opacity: '75%' }}> Your passwords are encrypted with a key derived from your main password, accessible only to you.</Typography>
                        </Stack>
                    </CardBox>
                </Stack>
            </Stack>
            <Stack spacing={5} sx={{ paddingBottom: 10 }}>
                <Typography variant='h4' fontWeight='bold' alignSelf='center'>FAQs</Typography>
                <Stack spacing={3} p={5}>
                    <Accordion expanded={expanded === 'panel1'} onChange={handleAccordionChange('panel1')} sx={{ backgroundColor: '#32376f', color: 'text.main' }}>
                        <AccordionSummary expandIcon={<ExpandMoreIcon color='primary' />} aria-controls="panel1-content" id="panel1-header">
                            <Typography component="span" variant='h6'>Do you store my passwords?</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography component="span" variant='h6'>No — everything is encrypted locally.</Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion expanded={expanded === 'panel2'} onChange={handleAccordionChange('panel2')} sx={{ backgroundColor: '#32376f', color: 'text.main' }}>
                        <AccordionSummary expandIcon={<ExpandMoreIcon color='primary' />} aria-controls="panel2-content" id="panel2-header">
                            <Typography component="span" variant='h6'>Can I recover my main password?</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography component="span" variant='h6'>Yes — if you forget your main password you can reset it using your email.</Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion expanded={expanded === 'panel3'} onChange={handleAccordionChange('panel3')} sx={{ backgroundColor: '#32376f', color: 'text.main' }}>
                        <AccordionSummary expandIcon={<ExpandMoreIcon color='primary' />} aria-controls="panel3-content" id="panel3-header">
                            <Typography component="span" variant='h6'>Can I use Sekure Password on multiple devices?</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography component="span" variant='h6'>Yes — as long as you log in with your account.</Typography>
                        </AccordionDetails>
                    </Accordion>
                </Stack>
            </Stack>
        </Stack>
    )
}

export default Landing