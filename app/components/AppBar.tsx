import React from 'react'
import Constants from 'expo-constants'
import { StyleSheet, Text, View } from 'react-native'
import theme from '../styles/theme'
// import AppTab from './AppTab'
// import { UserContext, type UserContextType } from '../context/user.context'

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
  // const { user, logout } = useContext(UserContext) as UserContextType

  return (
    <View style={style.appBar}>
      <Text>appbar</Text>
      {/* <AppTab active to={'/'}>Home</AppTab> */}
      {/* {
        user !== null
          ? <>
            <AppTab to={'/repositories'}>Repositories</AppTab>
            <AppTab onPress={logout}>Log out</AppTab>
          </>
          : <AppTab to={'/signin'}>Sign In</AppTab>
      } */}
    </View>
  )
}
