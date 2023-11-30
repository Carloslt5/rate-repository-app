import React from 'react'
import { type ReactNode, createContext, useState } from 'react'
import { Keyboard } from 'react-native'
import { Navigate } from 'react-router-native'

export interface UserData {
  email: string
  password: string
}

export interface UserContextType {
  user: UserData | null
  setUser: React.Dispatch<React.SetStateAction<UserData | null>>
  logout: () => void
}

export const UserContext = createContext<UserContextType | null>(null)

export function UserProviderWrapper({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<UserData | null>(null)

  const logout = () => {
    setUser(null)
    Keyboard.dismiss()
    return <Navigate to="/" />
  }

  const value = { user, setUser, logout }

  return (
    <UserContext.Provider value={value}>
      {children}
    </UserContext.Provider >
  )
}
