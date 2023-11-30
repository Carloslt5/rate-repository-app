import React from 'react'
import { AppBar } from './AppBar'
import { View } from 'react-native'
import AppRoutes from '../routes/AppRoutes'

export const Main = () => {
  return (
    <View style={{ flex: 1 }}>
      <AppBar />
      <AppRoutes />
    </View>
  )
}
