import React from 'react'
import { Route, Routes } from 'react-router-native'
import SignInPage from '../screen/SignInPage'
import HomePage from '../screen/HomePage'
import RepositoriesPage from '../screen/RepositoriesPage'

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/signin" element={<SignInPage />} />
      <Route path="/repositories" element={<RepositoriesPage />} />
    </Routes>
  )
}

export default AppRoutes
