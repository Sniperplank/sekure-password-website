import axios from 'axios'
import api from '../utils/axios'

axios.defaults.withCredentials = true

export const signin = async (formData, navigate, setError) => {
    try {
        // const { data } = await axios.post('http://localhost:5000/user/signin', formData)
        await api.post('/user/signin', formData, { withCredentials: true })
        navigate('/list')
    } catch (error) {
        setError(error.response.data.message)
    }
}

export const signup = async (formData, navigate, setError) => {
    try {
        // const { data } = await axios.post('http://localhost:5000/user/signup', formData)
        await api.post('/user/signup', formData, { withCredentials: true })
        navigate('/list')
    } catch (error) {
        setError(error.response.data.message)
    }
}
