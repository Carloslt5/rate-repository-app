import React from 'react'
import { RepositoryList } from '../components/RepositoryList'
import { Route, Routes } from 'react-router-native'
import SignInPage from '../screen/SignInPage'

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<RepositoryList />} />
      <Route path="/signin" element={<SignInPage />} />
    </Routes>
  )
}

export default AppRoutes
