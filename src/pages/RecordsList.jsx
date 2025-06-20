import { CircularProgress, Divider, Stack, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { CardBox } from '../StyledComponents/CardBox';
import { StyledInput } from '../StyledComponents/StyledInput';
import { useRecords } from '../contexts/RecordsContext';

function RecordsList() {
  const { records, setRecords } = useRecords()
  const { user, setUser } = useAuth()
  const navigate = useNavigate()
  const [searchQuery, setSearchQuery] = useState('')

  const handleRecordDetails = (record) => {
    navigate('/details', { state: { record: record } })
  }

  // const filteredRecords = Object.entries(records).filter(record => {
  //   return (
  //     record[1].title.toLowerCase().includes(searchQuery.toLowerCase())
  //   )
  // })

  const filteredRecords = records
    ? Object.entries(records).filter(([key, value]) =>
      value.title.toLowerCase().includes(searchQuery.toLowerCase())
    )
    : [];


  useEffect(() => {
    async function getRecords() {
      if (user && !records) {
        try {
          // const response = await axios.get(`http://localhost:5000/record?email=${user?.result.email}&encryptedKey=${encodeURIComponent(user?.encryptedSecretKey)}`)
          const response = await axios.get(`https://sekure-password-server.vercel.app/record?email=${user?.email}&encryptedKey=${encodeURIComponent(user?.encryptedSecretKey)}`)
          setRecords(response.data)
        } catch (error) {
          console.error('Error fetching records:', error)
        }
      }
    }
    getRecords()
  }, [user, records, setRecords])

  return (
    <Stack spacing={3}>
      <Typography variant='h5' color='primary'>Your Records</Typography>
      <Divider sx={{ backgroundColor: 'primary.main' }}></Divider>
      <StyledInput variant='outlined' label={`Search ${records ? records.length : 0} records by title`} type='search' value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
      <Divider sx={{ backgroundColor: 'primary.main' }}></Divider>
      {
        records === undefined || records === null ?
          <CircularProgress size={50} sx={{ alignSelf: 'center' }} />
          : records.length === 0 ?
            <Typography variant="body2">You have no records saved</Typography>
            : (
              <Stack spacing={3}>
                {
                  filteredRecords.map(([key, value]) => {
                    return (
                      <CardBox sx={{ paddingTop: 2, paddingBottom: 2, textTransform: 'none' }} key={key}>
                        <Typography onClick={() => handleRecordDetails(value)} sx={{ '&:hover': { color: 'primary.main' }, cursor: 'pointer' }}>{value.title.length > 20 ? `${value.title.slice(0, 20)}...` : value.title}</Typography>
                      </CardBox>
                    )
                  })
                }
              </Stack>
            )
      }
    </Stack>
  )
}

export default RecordsList