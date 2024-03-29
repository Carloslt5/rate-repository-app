import React from 'react'
import { ActivityIndicator, StyleSheet, View } from 'react-native'
import theme from '../styles/theme'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10
  }
})

const Loader = () => {
  return (
    <View style={[styles.container, styles.horizontal]}>
      <ActivityIndicator size="large" color={theme.colors.green500} />
    </View>
  )
}

export default Loader
