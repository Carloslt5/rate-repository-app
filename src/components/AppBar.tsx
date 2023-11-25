import React from 'react'
import Constants from 'expo-constants'
import { StyleSheet, View } from 'react-native'
import StyledText from '../styles/StyledText'
import theme from '../styles/theme'

export const AppBar = () => {
  const style = StyleSheet.create({
    appBar: {
      backgroundColor: theme.colors.green500,
      paddingTop: Constants.statusBarHeight + 10,
      paddingBottom: 10,
      paddingHorizontal: 10
    },
    text: {
      color: theme.appBar.textPrimary
    }
  })

  return (
    <View style={style.appBar}>
      <StyledText fontWeight='bold' style={style.text}>
        Repositories
      </StyledText>
    </View>
  )
}
