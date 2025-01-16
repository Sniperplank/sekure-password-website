import './App.css'
import { Route, Routes, useNavigate } from 'react-router-dom'
import Singin from './pages/Signin'
import AddRecord from './pages/AddRecord'
import RecordsList from './pages/RecordsList'
import RecordDetails from './pages/RecordDetails'
import ForgotPassword from './pages/ForgotPassword'
import Landing from './pages/Landing'
import { Box, Button, Divider, Stack } from '@mui/material'
import { StyledButton } from './StyledComponents/StyledButton'
import AddBoxIcon from '@mui/icons-material/AddBox';
import LogoutIcon from '@mui/icons-material/Logout';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ViewListIcon from '@mui/icons-material/ViewList';
import { useEffect, useState } from 'react'
import { useAuth } from './contexts/AuthContext'
import ResetPassword from './pages/ResetPassword'

function App() {
  const { user, setUser } = useAuth()
  const navigate = useNavigate()
  const [showScrollTop, setShowScrollTop] = useState(false)

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem('profile')))
  })

  // Handle scroll to top
  const handleScroll = () => {
    if (window.scrollY > 300) {
      setShowScrollTop(true)
    } else {
      setShowScrollTop(false)
    }
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const logout = () => {
    localStorage.removeItem('profile')
    navigate('/')
  }

  return (
    <Stack direction='row' spacing={2} justifyContent='space-between'>
      {user &&
        <Stack spacing={3} width='20%'>
          <StyledButton startIcon={<AccountBoxIcon />} sx={{ color: 'primary.main', justifyContent: 'flex-start' }}>{user?.result.name}</StyledButton>
          <Divider sx={{ backgroundColor: 'primary.main' }}></Divider>
          <StyledButton onClick={() => { navigate('/list') }} startIcon={<ViewListIcon />} sx={{ color: 'primary.main', justifyContent: 'flex-start' }}>Your Records</StyledButton>
          <Divider sx={{ backgroundColor: 'primary.main' }}></Divider>
          <StyledButton onClick={() => { navigate('/add') }} startIcon={<AddBoxIcon />} sx={{ color: 'primary.main', justifyContent: 'flex-start' }}>Add Record</StyledButton>
          <Divider sx={{ backgroundColor: 'primary.main' }}></Divider>
          <StyledButton onClick={logout} startIcon={<LogoutIcon color='error' />} sx={{ color: 'primary.main', justifyContent: 'flex-start' }}>Logout</StyledButton>
          {
            showScrollTop && (
              <Button onClick={scrollToTop} sx={{ position: 'fixed', bottom: 20, left: '20%', backgroundColor: 'primary.main', '&:hover': { backgroundColor: 'primary.dark' }, }} variant="contained" > <ArrowUpwardIcon /> </Button>
            )
          }
        </Stack>}
      <Box width={user ? '80%' : '100%'}>
        <Routes>
          <Route path='/' element={<Landing />} />
          <Route path='/signin' element={<Singin />} />
          <Route path='/forgot-password' element={<ForgotPassword />} />
          <Route path='/reset-password' element={<ResetPassword />} />
          <Route path='/add' element={<AddRecord />} />
          <Route path='/list' element={<RecordsList />} />
          <Route path='/details' element={<RecordDetails />} />
        </Routes>
      </Box>
    </Stack>
  )
}

export default App
