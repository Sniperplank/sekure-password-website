import React, { createContext, useContext, useEffect, useState } from 'react'
import axios from 'axios'

const AuthContext = createContext()

export function useAuth() {
    return useContext(AuthContext)
}

export function AuthProvider({ children }) {
    const [user, setUser] = useState(null)
    const [encryptedKey, setEncryptedKey] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const res = await axios.get('https://sekure-password-server.vercel.app/user/me', {
                    withCredentials: true
                })
                setUser(res.data.user)
                setEncryptedKey(res.data.encryptedSecretKey)
            } catch (err) {
                console.warn('User not authenticated:', err)
                setUser(null)
                setEncryptedKey(null)
            } finally {
                setLoading(false)
            }
        }

        fetchUser()
    }, [])

    const value = {
        user,
        encryptedKey,
        setUser,
        setEncryptedKey,
        loading
    }

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    )
}