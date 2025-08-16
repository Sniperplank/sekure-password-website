import { Divider, Stack, Typography } from '@mui/material'
import React, { useState } from 'react'
import Slider from '@mui/material/Slider'
import ContentCopyIcon from '@mui/icons-material/ContentCopy'
import CheckIcon from '@mui/icons-material/Check'
import { StyledButton } from '../StyledComponents/StyledButton'

function GeneratePassword() {
    const [generatedPass, setGeneratedPass] = useState("")
    const [passLength, setPassLength] = useState(50)
    const [isCopied, setIsCopied] = useState(false)

    const generatePassword = (length) => {
        const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+~`|}{[]:;?><,./-="
        let password = ""
        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * charset.length)
            password += charset[randomIndex]
        }
        setGeneratedPass(password)
    }

    const copyPassword = () => {
        navigator.clipboard.writeText(generatedPass)
            .then(() => {
                setIsCopied(true)
                const timer = setTimeout(() => {
                    setIsCopied(false)
                }, 1000)
                return () => clearTimeout(timer)
            })
            .catch((err) => {
                console.error('Failed to copy:', err)
            })
    }

    return (
        <Stack spacing={10}>
            <Stack spacing={2}>
                <Typography variant='h5' color='primary'>Generate Password</Typography>
                <Divider sx={{ backgroundColor: 'primary.main' }}></Divider>
            </Stack>
            <Stack spacing={2}>
                <Typography variant='h6'>Password Length: {passLength}</Typography>
                <Slider defaultValue={50} aria-label="Default" valueLabelDisplay="auto" min={8} onChange={(e) => setPassLength(e.target.value)} />
            </Stack>
            <StyledButton variant='contained' color='primary' onClick={() => generatePassword(passLength)}>Generate</StyledButton>
            {generatedPass &&
                <Stack spacing={2} alignItems='center'>
                    <Typography variant='h6' sx={{ wordWrap: 'break-word', whiteSpace: 'pre-wrap', wordBreak: 'break-word' }}>{generatedPass}</Typography>
                    <StyledButton variant='contained' color='primary' onClick={copyPassword} startIcon={isCopied ? <CheckIcon /> : <ContentCopyIcon sx={{ cursor: 'pointer' }} />} sx={{ width: 100, height: 40 }}>Copy</StyledButton>
                </Stack>
            }
        </Stack >
    )
}

export default GeneratePassword 