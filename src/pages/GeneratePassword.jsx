import { Divider, Stack, Typography } from '@mui/material'
import React, { useState } from 'react'
import Slider from '@mui/material/Slider'
import ContentCopyIcon from '@mui/icons-material/ContentCopy'
import CheckIcon from '@mui/icons-material/Check'
import { StyledButton } from '../StyledComponents/StyledButton'
import VisibilityIcon from '@mui/icons-material/Visibility'
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff'

function GeneratePassword() {
    const [generatedPass, setGeneratedPass] = useState("")
    const [generatedHiddenPass, setGeneratedHiddenPass] = useState("")
    const [passLength, setPassLength] = useState(50)
    const [isCopied, setIsCopied] = useState(false)
    const [isHidden, setIsHidden] = useState(true)

    const changeHiddenMode = () => {
        setIsHidden(prev => !prev)
    }

    const generatePassword = (length) => {
        const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+~`|}{[]:;?><,./-="
        let password = ""
        let hiddenPassword = ""
        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * charset.length)
            password += charset[randomIndex]
            hiddenPassword += "●"
        }
        setGeneratedPass(password)
        setGeneratedHiddenPass(hiddenPassword)
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
            <StyledButton variant='contained' color='primary' sx={{ width: '50%', alignSelf: 'center' }} onClick={() => generatePassword(passLength)}>Generate</StyledButton>
            {generatedPass &&
                <Stack spacing={2} alignItems='center'>
                    {isHidden ?
                        <Typography variant='h6' sx={{ wordWrap: 'break-word', whiteSpace: 'pre-wrap', wordBreak: 'break-word' }}>{generatedHiddenPass}</Typography>
                        :
                        <Typography variant='h6' sx={{ wordWrap: 'break-word', whiteSpace: 'pre-wrap', wordBreak: 'break-word' }}>{generatedPass}</Typography>
                    }
                    <Stack direction='row' spacing={4}>
                        <StyledButton variant='contained' color='primary' onClick={copyPassword} startIcon={isCopied ? <CheckIcon /> : <ContentCopyIcon sx={{ cursor: 'pointer' }} />} sx={{ width: 100, height: 40 }}>Copy</StyledButton>
                        <StyledButton variant='contained' color='primary' onClick={changeHiddenMode} startIcon={isHidden ? <VisibilityIcon /> : <VisibilityOffIcon />} sx={{ width: 100, height: 40 }}>{isHidden ? 'Show' : 'Hide'}</StyledButton>
                    </Stack>
                </Stack>
            }
        </Stack >
    )
}

export default GeneratePassword 