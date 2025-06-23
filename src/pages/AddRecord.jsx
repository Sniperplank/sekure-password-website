import { Button, Divider, Stack, Typography } from '@mui/material'
import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { StyledInput } from '../StyledComponents/StyledInput'
import { StyledButton } from '../StyledComponents/StyledButton'
import { useAuth } from '../contexts/AuthContext'
import VisibilityIcon from '@mui/icons-material/Visibility'
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff'
import { useRecords } from '../contexts/RecordsContext'

function AddRecord() {
    const { records, setRecords } = useRecords()
    const { user } = useAuth()
    const [recordDetails, setRecordDetails] = useState({ title: '', login: '', password: '', login_url: '' })
    const navigate = useNavigate()
    const [isHidden, setIsHidden] = useState(true)

    const changeHiddenMode = () => {
        setIsHidden(prev => !prev)
    }

    const handleAddRecord = async () => {
        // await axios.post('http://localhost:5000/record', recordDetails)
        await axios.post('https://sekure-password-server.vercel.app/record', { recordDetails }, { withCredentials: true })
        setRecords(null)
        navigate('/list')
    }

    const handleChange = (e) => {
        setRecordDetails({ ...recordDetails, [e.target.name]: e.target.value })
    }

    const generatePassword = () => {
        const length = 16
        const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+~`|}{[]:;?><,./-="
        let password = ""
        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * charset.length)
            password += charset[randomIndex]
        }
        return password
    };

    const autofillPassword = () => {
        const generatedPassword = generatePassword()
        setRecordDetails((prevDetails) => ({
            ...prevDetails,
            login: user?.email,
            password: generatedPassword,
        }))
    }

    return (
        <Stack spacing={4}>
            <Typography variant='h5' color='primary'>New Record</Typography>
            <Divider sx={{ backgroundColor: 'primary.main' }}></Divider>
            <Stack spacing={3}>
                <StyledInput variant='outlined' name='title' label='Title' value={recordDetails.title} onChange={handleChange} />
                <StyledInput variant='outlined' name='login' label='Login' value={recordDetails.login} onChange={handleChange} />
                <Stack direction='row' spacing={1}>
                    <StyledInput variant='outlined' name='password' label='Password' value={recordDetails.password} onChange={handleChange} type={isHidden ? 'password' : 'text'} sx={{ width: '90%' }} />
                    {isHidden ? <VisibilityOffIcon onClick={changeHiddenMode} color='primary' sx={{ alignSelf: 'center', cursor: 'pointer' }} /> : <VisibilityIcon onClick={changeHiddenMode} color='primary' sx={{ alignSelf: 'center', cursor: 'pointer' }} />}
                </Stack>
                <StyledInput variant='outlined' name='login_url' label='URL' value={recordDetails.login_url} onChange={handleChange} />
            </Stack>
            <Button onClick={autofillPassword} sx={{}}>Generate password and autofill</Button>
            <StyledButton variant='contained' onClick={handleAddRecord} sx={{ width: '20%', alignSelf: 'center' }}>Add</StyledButton>
        </Stack>
    )
}

export default AddRecord