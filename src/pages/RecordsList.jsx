import { Box, Button, CircularProgress, Divider, Stack, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import AddBoxIcon from '@mui/icons-material/AddBox';
import LogoutIcon from '@mui/icons-material/Logout';
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { CardBox } from '../StyledComponents/CardBox';
import { StyledInput } from '../StyledComponents/StyledInput';
import EditNoteIcon from '@mui/icons-material/EditNote';

function RecordsList() {
  const [records, setRecords] = useState({})
  const { user, setUser } = useAuth()
  const [update, setUpdate] = useState(0)
  const location = useLocation()
  const navigate = useNavigate()
  const [searchQuery, setSearchQuery] = useState('')
  const [currentURL, setCurrentURL] = useState('')
  const [matchingRecords, setMatchingRecords] = useState([]) // To store records matching the URL

  const updatePage = () => {
    setUpdate(prev => prev + 1)
  }

  const handleAddRecord = () => {
    navigate('/add')
  }

  const handleRecordDetails = (record) => {
    navigate('/details', { state: { record: record } })
  }

  const logout = () => {
    chrome.storage.local.remove('profile', () => {
      if (chrome.runtime.lastError) {
        console.error("Failed to clear profile:", chrome.runtime.lastError.message)
      } else {
        console.log("User profile cleared.")
        navigate('/')
      }
    })
  }

  // Function to inject into the page to handle password fields
  const autoFillCredentials = (credentialsString) => {

    const { username, password } = JSON.parse(credentialsString)
    // Find all input fields
    const inputs = document.querySelectorAll('input')

    // Track if we found and filled the fields
    let foundUsername = false
    let foundPassword = false

    inputs.forEach(input => {
      // Get computed style to check visibility
      const style = window.getComputedStyle(input)
      if (style.display === 'none' || style.visibility === 'hidden') return

      // Username field detection - check multiple common attributes
      if (!foundUsername && (
        input.type === 'text' ||
        input.type === 'email' ||
        input.name?.toLowerCase().includes('user') ||
        input.name?.toLowerCase().includes('email') ||
        input.id?.toLowerCase().includes('user') ||
        input.id?.toLowerCase().includes('email')
      )) {
        // Set value and dispatch events to trigger site's JavaScript
        input.value = username
        input.dispatchEvent(new Event('input', { bubbles: true }))
        input.dispatchEvent(new Event('change', { bubbles: true }))
        foundUsername = true
      }

      // Password field detection
      if (!foundPassword && input.type === 'password') {
        input.value = password
        input.dispatchEvent(new Event('input', { bubbles: true }))
        input.dispatchEvent(new Event('change', { bubbles: true }))
        foundPassword = true
      }
    });

    return { foundUsername, foundPassword }
  };

  // Add this function to your RecordsList component:
  const fillCredentials = async (record) => {
    try {
      const [tab] = await chrome.tabs.query({ active: true, currentWindow: true })

      const credentialsString = JSON.stringify({
        username: record.login,
        password: record.password
      })

      const [{ result }] = await chrome.scripting.executeScript({
        target: { tabId: tab.id },
        func: autoFillCredentials,
        args: [credentialsString] // Pass credentials to the injected function
      })

      if (result.foundUsername || result.foundPassword) {
        console.log('Successfully filled credentials')
      } else {
        console.log('No matching fields found')
      }

    } catch (error) {
      console.error('Error filling credentials:', error);
    }
  };

  const filteredRecords = Object.entries(records).filter(record => {
    return (
      record[1].title.toLowerCase().includes(searchQuery.toLowerCase())
    )
  })

  const checkMatchingRecords = (url) => {
    const matches = Object.entries(records).filter(([key, value]) => {
      return url.includes(value.login_url);
    });

    setMatchingRecords(matches);
  }

  const fetchActiveTabURL = () => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      if (tabs.length > 0) {
        const activeTabURL = tabs[0].url || '';
        setCurrentURL(activeTabURL);
        checkMatchingRecords(activeTabURL);
        console.log("Active Tab URL:", activeTabURL);
      }
    });
  };

  // <--------------------------COMMENT WHEN READY FOR BUILD ------------------------------------------------------------------------------------->
  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem('profile')))
  }, [])


  useEffect(() => {
    async function getRecords() {
      console.log(user)
      const records = await axios.get('http://localhost:5000/record?email=' + user?.result.email)
      setRecords(records.data)
    }
    getRecords()
  }, [user, update, location])


  // <--------------------------UNCOMMENT WHEN READY FOR BUILD ------------------------------------------------------------------------------------->

  // // Monitor active URL changes
  // useEffect(() => {
  //   const handleTabUpdate = (tabId, changeInfo, tab) => {
  //     if (changeInfo.url) {
  //       setCurrentURL(changeInfo.url)
  //       console.log("Tab Updated URL:", changeInfo.url)
  //       checkMatchingRecords(changeInfo.url)
  //     }
  //   };

  //   const handleTabActivated = (activeInfo) => {
  //     fetchActiveTabURL() // Fetch the URL of the newly activated tab
  //   };

  //   // Add listeners
  //   chrome.tabs.onUpdated.addListener(handleTabUpdate)
  //   chrome.tabs.onActivated.addListener(handleTabActivated)

  //   // Fetch the initial active tab URL on component mount
  //   fetchActiveTabURL()

  //   // Cleanup listeners on component unmount
  //   return () => {
  //     chrome.tabs.onUpdated.removeListener(handleTabUpdate)
  //     chrome.tabs.onActivated.removeListener(handleTabActivated)
  //   };
  // }, [records, location, currentURL]) // Re-run when records are updated

  return (
    <Stack spacing={4}>
      <Stack direction='row' justifyContent='space-between'>
        <Typography variant='h6' color='primary'>{user?.result.name}</Typography>
        <LogoutIcon onClick={logout} color='error' fontSize='medium' sx={{ cursor: 'pointer' }} />
      </Stack>
      <Divider sx={{ backgroundColor: 'primary.main' }}></Divider>
      <Stack direction='row' justifyContent='space-between'>
        <Typography variant='h6' color='primary' textAlign='center'>Your Records</Typography>
        <AddBoxIcon onClick={handleAddRecord} color='primary' fontSize='large' sx={{ cursor: 'pointer' }} />
      </Stack>
      <StyledInput variant='outlined' label={'Search ' + records.length + ' records by title'} type='search' value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
      <Typography variant="body2">{matchingRecords.length ? `${matchingRecords.length} matching ${matchingRecords.length > 1 ? 'records' : 'record'} found` : 'No matching records found'}</Typography>
      {
        matchingRecords.length > 0 && (
          <Stack spacing={3}>
            {
              matchingRecords.map(([key, value]) => {
                return (
                  <CardBox sx={{ paddingTop: 2, paddingBottom: 2, textTransform: 'none' }} key={key}>
                    <Stack direction='row' spacing={2}>
                      <Typography onClick={() => handleRecordDetails(value)} sx={{ '&:hover': { color: 'primary.main' }, cursor: 'pointer' }}>{value.title.length > 20 ? `${value.title.slice(0, 20)}...` : value.title}</Typography>
                      <EditNoteIcon onClick={() => fillCredentials(value)} color='primary' sx={{ alignSelf: 'center', cursor: 'pointer' }} />
                    </Stack>
                  </CardBox>
                )
              })
            }
          </Stack>
        )
      }
      <Divider sx={{ backgroundColor: 'primary.main' }}></Divider>
      {
        records === undefined || records === null ?
          <CircularProgress size={50} sx={{ alignSelf: 'center' }} />
          : records.length === 0 ?
            <Typography variant="body2">You have no records saved</Typography>
            : (
              <Stack spacing={3} sx={{ marginTop: 10 }}>
                {
                  filteredRecords.map(([key, value]) => {
                    return (
                      <CardBox sx={{ paddingTop: 2, paddingBottom: 2, textTransform: 'none' }} key={key}>
                        <Stack direction='row' spacing={2} justifyContent='space-between'>
                          <Typography onClick={() => handleRecordDetails(value)} sx={{ '&:hover': { color: 'primary.main' }, cursor: 'pointer' }}>{value.title.length > 20 ? `${value.title.slice(0, 20)}...` : value.title}</Typography>
                          <EditNoteIcon onClick={() => fillCredentials(value)} color='primary' sx={{ alignSelf: 'center', cursor: 'pointer' }} />
                        </Stack>
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