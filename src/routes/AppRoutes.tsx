import React from 'react'
import { RepositoryList } from '../components/RepositoryList'
import { Route, Routes } from 'react-router-native'
import SignInPage from '../screen/SignInPage'
import HomePage from '../screen/HomePage'

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/signin" element={<SignInPage />} />
      <Route path="/repositories" element={<RepositoryList />} />
    </Routes>
  )
}

export default AppRoutes
