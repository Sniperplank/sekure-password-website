import axios from 'axios'

export const signin = async (formData, navigate, setError) => {
    try {
        const { data } = await axios.post('http://localhost:5000/user/signin', formData)
        // const { data } = await axios.post('https://sekure-password-server.vercel.app/user/signin', formData)
        localStorage.setItem('profile', JSON.stringify({ ...data }))
        navigate('/list')
    } catch (error) {
        console.log(error)
        setError(error.response.data.message)
    }
}

export const signup = async (formData, navigate, setError) => {
    try {
        const { data } = await axios.post('http://localhost:5000/user/signup', formData)
        // const { data } = await axios.post('https://sekure-password-server.vercel.app/user/signup', formData)
        localStorage.setItem('profile', JSON.stringify({ ...data }))
        navigate('/list')
    } catch (error) {
        console.log(error)
        setError(error.response.data.message)
    }
}
