import React from 'react'
import Constants from 'expo-constants'
import { StyleSheet, View } from 'react-native'
import theme from '../styles/theme'
import AppTab from './AppTab'

const style = StyleSheet.create({
  appBar: {
    backgroundColor: theme.colors.green500,
    paddingTop: Constants.statusBarHeight + 10,
    paddingBottom: 10,
    paddingHorizontal: 10,
    flexDirection: 'row',
    gap: 10
  }
})

export const AppBar = () => {
  return (
    <View style={style.appBar}>
      <AppTab active to={'/'}>Repositories</AppTab>
      <AppTab active to={'/signin'}>Sign In</AppTab>
    </View>
  )
}
