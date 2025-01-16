import './App.css'
import { Route, Routes } from 'react-router-dom'
import InitialPopup from './pages/InitialPopup'
import AddRecord from './pages/AddRecord'
import RecordsList from './pages/RecordsList'
import RecordDetails from './pages/RecordDetails'
import ForgotPassword from './pages/ForgotPassword'

function App() {
  return (
    <Routes>
      <Route path='/' element={<InitialPopup />} />
      <Route path='/forgot-password' element={<ForgotPassword />} />
      <Route path='/add' element={<AddRecord />} />
      <Route path='/list' element={<RecordsList />} />
      <Route path='/details' element={<RecordDetails />} />
    </Routes>
  )
}

export default App
