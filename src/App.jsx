import './App.css'
import { Link, Navigate, Route, Routes, useLocation, useNavigate } from 'react-router-dom'
import Singin from './pages/Signin'
import { jwtDecode } from 'jwt-decode'
import AddRecord from './pages/AddRecord'
import RecordsList from './pages/RecordsList'
import RecordDetails from './pages/RecordDetails'
import ForgotPassword from './pages/ForgotPassword'
import Landing from './pages/Landing'
import { Box, Button, Divider, Stack, Typography } from '@mui/material'
import { StyledButton } from './StyledComponents/StyledButton'
import AddBoxIcon from '@mui/icons-material/AddBox'
import LogoutIcon from '@mui/icons-material/Logout'
import AccountBoxIcon from '@mui/icons-material/AccountBox'
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward'
import ViewListIcon from '@mui/icons-material/ViewList'
import { useEffect, useState } from 'react'
import { useAuth } from './contexts/AuthContext'
import ResetPassword from './pages/ResetPassword'
import SettingsIcon from '@mui/icons-material/Settings'
import ShieldOutlinedIcon from '@mui/icons-material/ShieldOutlined'
import MenuIcon from '@mui/icons-material/Menu'
import { useRecords } from './contexts/RecordsContext'
import MenuModal from './modals/MenuModal'
import PrivacyPolicy from './pages/PrivacyPolicy'
import Profile from './pages/Profile'
import DeleteAccount from './pages/DeleteAccount'
import axios from 'axios'
import api from './utils/axios'
import { CardBox } from './StyledComponents/CardBox'
import UpgradePlan from './pages/UpgradePlan'

function App() {
  const { user, setUser, setLoading } = useAuth()
  const { records, setRecords } = useRecords()
  const [isMenuModalOpen, setIsMenuModalOpen] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()
  const [showScrollTop, setShowScrollTop] = useState(false)
  axios.defaults.withCredentials = true

  // useEffect(() => {
  //   setUser(JSON.parse(localStorage.getItem('profile')))
  // }, [navigate])

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await api.get('/user/me', {
          withCredentials: true
        })
        setUser(res.data.user)
      } catch (err) {
        console.warn('User not authenticated:', err)
        setUser(null)
      } finally {
        setLoading(false)
      }
    }

    fetchUser()
  }, [navigate])

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

  const logout = async () => {
    try {
      await api.post('/user/logout', {}, {
        withCredentials: true
      })

      setUser(null)
      setRecords(null)
      navigate('/')
    } catch (err) {
      console.error('Logout failed:', err)
    }
  }

  useEffect(() => {
    const token = user?.token
    if (token) {
      const decodedToken = jwtDecode(token)
      if (decodedToken.exp * 1000 < new Date().getTime()) logout()
    }
  }, [user, logout])

  const shouldShowNav = user && location.pathname !== '/' && location.pathname !== '/reset-password' && location.pathname !== '/signin' && location.pathname !== '/forgot-password' && location.pathname !== '/privacy' && location.pathname !== '/delete-account'

  return (
    <Stack spacing={5}>
      {shouldShowNav &&
        <Stack direction='row' justifyContent='space-between'>
          <Stack direction='row' spacing={1} alignItems='center'>
            <ShieldOutlinedIcon fontSize='large' color='primary' />
            <Typography variant='h4' sx={{ fontFamily: 'Brush Script MT, Brush Script Std, cursive' }}>Sekure Password</Typography>
          </Stack>
          <Stack direction='row' spacing={5} alignItems='center'>
            <SettingsIcon fontSize='large' color='primary' sx={{ ":hover": { cursor: 'pointer' } }} onClick={() => { navigate('/profile') }} />
            <MenuIcon fontSize='large' color='primary' sx={{ ":hover": { cursor: 'pointer' } }} onClick={() => { setIsMenuModalOpen(true) }} />
          </Stack>
        </Stack>}
      <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} justifyContent='space-between'>
        {shouldShowNav &&
          <Stack spacing={3} width='20%' sx={{ display: { xs: 'none', sm: 'block' } }}>
            <Divider sx={{ backgroundColor: 'primary.main' }}></Divider>
            <Box className='premiumCard' sx={{ width: 200, height: 50, borderRadius: 15, justifySelf: 'center', alignContent: 'center', background: 'linear-gradient(to left bottom, #32376f, #31396f, #313b6f, #313d6f, #313f6f, #384b78, #3f5681, #48628a, #5b7a9d, #7293b1, #8aacc4, #a5c5d7)' }}>
              {user?.subscription.status === "free" ?
                <Button sx={{ width: '100%', height: '100%', fontWeight: 'bold', textShadow: '2px 2px #32376f' }} onClick={() => { navigate('/upgrade') }}>Upgrade Plan</Button>
                : <Typography variant='h6' color='primary' sx={{ justifySelf: 'center', fontWeight: 'bold', textShadow: '2px 2px #32376f' }} >Premium</Typography>}
            </Box>
            <Divider sx={{ backgroundColor: 'primary.main' }}></Divider>
            <StyledButton onClick={() => { navigate('/profile') }} startIcon={<AccountBoxIcon />} sx={{ color: 'primary.main', justifyContent: 'flex-start' }}>{user?.name}</StyledButton>
            <Divider sx={{ backgroundColor: 'primary.main' }}></Divider>
            <StyledButton onClick={() => { navigate('/list') }} startIcon={<ViewListIcon />} sx={{ color: 'primary.main', justifyContent: 'flex-start' }}>Your Records</StyledButton>
            <Divider sx={{ backgroundColor: 'primary.main' }}></Divider>
            <StyledButton onClick={() => { navigate('/add') }} startIcon={<AddBoxIcon />} sx={{ color: 'primary.main', justifyContent: 'flex-start' }}>Add Record</StyledButton>
            <Divider sx={{ backgroundColor: 'primary.main' }}></Divider>
            <StyledButton onClick={logout} startIcon={<LogoutIcon color='error' />} sx={{ color: 'primary.main', justifyContent: 'flex-start' }}>Logout</StyledButton>
            {
              showScrollTop && (
                <Button onClick={scrollToTop} sx={{ position: 'fixed', bottom: 20, left: '20vp', backgroundColor: 'primary.main', '&:hover': { backgroundColor: 'primary.dark' }, }} variant="contained" > <ArrowUpwardIcon /> </Button>
              )
            }
          </Stack>}
        <Box width={shouldShowNav ? { xs: '100%', sm: '80%' } : '100%'}>
          <Routes>
            <Route path='/' element={<Landing />} />
            <Route path='/privacy' element={<PrivacyPolicy />} />
            <Route path='/signin' element={<Singin />} />
            <Route path='/forgot-password' element={<ForgotPassword />} />
            <Route path='/reset-password' element={<ResetPassword />} />
            <Route path='/add' element={<AddRecord />} />
            <Route path='/list' element={<RecordsList />} />
            <Route path='/details' element={<RecordDetails />} />
            <Route path='/profile' element={<Profile logout={logout} />} />
            <Route path='/delete-account' element={<DeleteAccount logout={logout} />} />
            <Route path='/upgrade' element={<UpgradePlan />} />
          </Routes>
        </Box>
      </Stack>
      <footer>
        <Stack spacing={4} direction='row' justifyContent='space-evenly' sx={{ paddingTop: 2, alignItems: 'center', borderTop: 'solid', borderWidth: '1px' }}>
          <Typography variant='body1' sx={{ opacity: '70%' }} alignSelf='center'>© {new Date().getFullYear()} Sekure Password. All rights reserved.</Typography>
          <Typography variant='body1' component={Link} to={'/privacy'} sx={{ textDecoration: 'none' }}>Privacy Policy</Typography>
        </Stack>
      </footer>
      <MenuModal open={isMenuModalOpen} onClose={() => setIsMenuModalOpen(false)} logout={logout} />
    </Stack >
  )
}

export default App
