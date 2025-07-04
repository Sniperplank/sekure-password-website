import axios from 'axios'
import api from '../utils/axios'

axios.defaults.withCredentials = true

export const signin = async (formData, navigate, setError, plan) => {
    try {
        await api.post('/user/signin', formData, { withCredentials: true })

        if (plan === 'premium') {
            const res = await api.get('/user/me', { withCredentials: true })
            const user = res.data.user

            if (user?.subscription?.status === 'premium') {
                navigate('/list')
            } else {
                const { data } = await api.post(
                    '/stripe/create-checkout-session',
                    { email: user.email },
                    { withCredentials: true }
                )
                window.location.href = data.url
            }
        } else {
            navigate('/list')
        }
    } catch (error) {
        setError(error.response?.data?.message || 'Sign in failed')
    }
}

export const signup = async (formData, navigate, setError, plan) => {
    try {
        await api.post('/user/signup', formData, { withCredentials: true })

        if (plan === 'premium') {
            const { data } = await api.post('/stripe/create-checkout-session', { email: formData.email }, { withCredentials: true })
            window.location.href = data.url
        } else {
            navigate('/list')
        }
    } catch (error) {
        setError(error.response?.data?.message || 'Sign up failed')
    }
}
