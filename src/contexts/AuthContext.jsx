import React, { createContext, useContext, useEffect, useState } from 'react'
import axios from 'axios'
import api from '../utils/axios'
import { CircularProgress } from '@mui/material'

const AuthContext = createContext()

export function useAuth() {
    return useContext(AuthContext)
}

export function AuthProvider({ children }) {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

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
    }, [])

    const value = {
        user,
        setUser,
        loading,
        setLoading
    }

    return (
        <AuthContext.Provider value={value}>
            {/* {loading ? <CircularProgress size={70} sx={{ alignSelf: 'center', justifySelf: 'center' }} /> : children} */}
            {children}
        </AuthContext.Provider>
    )
}