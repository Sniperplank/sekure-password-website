import { Button, Divider, Stack, Typography } from '@mui/material'
import React, { useEffect, useRef, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { StyledInput } from '../StyledComponents/StyledInput'
import VisibilityIcon from '@mui/icons-material/Visibility'
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff'
import { StyledButton } from '../StyledComponents/StyledButton'
import axios from 'axios'
import { useRecords } from '../contexts/RecordsContext'
import { useAuth } from '../contexts/AuthContext'
import ConfirmDeleteModal from '../modals/ConfirmDeleteModal'
import api from '../utils/axios'

function RecordDetails() {
    const { user } = useAuth()
    const { records, setRecords } = useRecords()
    const location = useLocation()
    const record = location.state?.record
    const [updatedRecord, setUpdatedRecord] = useState({ ...record })
    const [isHidden, setIsHidden] = useState(true)
    const [isChanged, setIsChanged] = useState(false)
    const navigate = useNavigate()
    const initialRecord = useRef({ ...record })
    const [isConfirmDeleteModalOpen, setIsConfirmDeleteModalOpen] = useState(false)

    useEffect(() => {
        if (!user) {
            navigate('/')
        }
    }, [navigate])

    const changeHiddenMode = () => {
        setIsHidden(prev => !prev)
    }

    const handleChange = (e) => {
        setUpdatedRecord({ ...updatedRecord, [e.target.name]: e.target.value })
    }

    const goBack = async () => {
        navigate('/list')
    }

    const saveChanges = async () => {
        try {
            await api.patch('/record/', { record: updatedRecord })
            setIsChanged(false)
            setRecords(null)
            navigate(-1)
            initialRecord.current = { ...updatedRecord }
        } catch (error) {
            console.log("an error occurred!", error)
        }
    }

    const deleteRecord = async () => {
        try {
            await api.delete('/record/', { data: { record: record } })
            setRecords(null)
            navigate('/list')
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        const hasChanges = JSON.stringify(updatedRecord) !== JSON.stringify(initialRecord.current)
        setIsChanged(hasChanges)
    }, [updatedRecord])


    return (
        <Stack spacing={5}>
            <Typography variant='h5' color='primary'>Edit Record</Typography>
            <Divider sx={{ backgroundColor: 'primary.main' }}></Divider>
            <StyledInput variant='outlined' name='title' label='Title' defaultValue={record?.title} onChange={handleChange} />
            <StyledInput variant='outlined' name='login' label='Login' defaultValue={record?.login} onChange={handleChange} />
            <Stack direction='row' spacing={2}>
                <StyledInput variant='outlined' name='password' label='Password' defaultValue={record?.password} type={isHidden ? 'password' : 'text'} onChange={handleChange} sx={{ width: '90%' }} />
                {isHidden ? <VisibilityOffIcon onClick={changeHiddenMode} color='primary' sx={{ alignSelf: 'center', cursor: 'pointer' }} /> : <VisibilityIcon onClick={changeHiddenMode} color='primary' sx={{ alignSelf: 'center', cursor: 'pointer' }} />}
            </Stack>
            <StyledInput variant='outlined' name='login_url' label='URL' defaultValue={record?.login_url} onChange={handleChange} />
            {
                isChanged && (
                    <Stack spacing={2} sx={{ alignSelf: 'center' }}>
                        <Typography variant='h6' color='error'>You have unsaved changes!</Typography>
                        <StyledButton variant='contained' onClick={saveChanges} sx={{ width: '50%', alignSelf: 'center' }}>Save</StyledButton>
                    </Stack>
                )
            }
            <Button onClick={() => setIsConfirmDeleteModalOpen(true)} sx={{ width: '50%', alignSelf: 'center' }} color='error'>Delete</Button>
            <Button onClick={goBack} sx={{ width: '50%', alignSelf: 'center' }}>Back</Button>
            <ConfirmDeleteModal open={isConfirmDeleteModalOpen} onClose={() => setIsConfirmDeleteModalOpen(false)} deleteRecord={deleteRecord} />
        </Stack>
    )
}

export default RecordDetails