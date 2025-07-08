import { Stack, Typography } from '@mui/material'
import React from 'react'
import { CardBox } from '../StyledComponents/CardBox'
import { useAuth } from '../contexts/AuthContext'
import api from '../utils/axios'
import { StyledButton } from '../StyledComponents/StyledButton'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import ClearIcon from '@mui/icons-material/Clear'
import { useNavigate } from 'react-router-dom'

function UpgradePlan() {
    const { user } = useAuth()
    const navigate = useNavigate()

    const handleUpgrade = async () => {
        const { data } = await api.post('/stripe/create-checkout-session', { email: user.email }, { withCredentials: true })
        window.location.href = data.url
    }

    return (
        <Stack spacing={5}>
            <Typography variant='h4' fontWeight='bold' alignSelf='center'>Plans</Typography>
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
                        {user ? <StyledButton variant='contained' color='primary' sx={{ boxShadow: '0px 0px 10px #32376f' }}>Current Plan</StyledButton>
                            : <StyledButton variant='contained' color='primary' onClick={() => navigate('/signin')} sx={{ boxShadow: '0px 0px 10px #32376f' }}>Sign up</StyledButton>}
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
                        {user ? <StyledButton className='getStartedButton' variant='contained' color='primary' sx={{ boxShadow: '0px 0px 10px #32376f' }} onClick={() => handleUpgrade()}>Upgrade to Premium</StyledButton>
                            : <StyledButton className='getStartedButton' variant='contained' color='primary' sx={{ boxShadow: '0px 0px 10px #32376f' }} onClick={() => navigate(`/signin?plan=premium`)}>Sign up</StyledButton>}
                    </Stack>
                </CardBox>
            </Stack>
        </Stack>
    )
}

export default UpgradePlan  