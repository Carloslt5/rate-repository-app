import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { Platform, StyleSheet } from 'react-native'
import HomePage from '../(screens)/home'
import RepositoriesPage from '../(screens)/repositories'
import SignInPage from '../(screens)/signin'
import theme from '../styles/theme'

const styles = StyleSheet.create({
  tab: {
    backgroundColor: theme.colors.green300,
    borderRadius: 6,
    position: 'absolute',
    bottom: 10,
    elevation: 0,
    marginHorizontal: 10,
    ...Platform.select({
      web: {
        marginHorizontal: 'auto',
        width: '90%',
        maxWidth: 780
      }
    })
  }
})

const Tab = createBottomTabNavigator()

const Navigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: styles.tab
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomePage}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <Ionicons name="home" size={20} color={color} />
          )
        }}
      />
      <Tab.Screen
        name="Respositories"
        component={RepositoriesPage}
        options={{
          tabBarLabel: 'Respositories',
          tabBarIcon: ({ color }) => (
            <Ionicons name="list-circle" size={20} color={color} />
          )
        }}
      />
      <Tab.Screen
        name="Signin"
        component={SignInPage}
        options={{
          tabBarLabel: 'Signin',
          tabBarIcon: ({ color }) => (
            <AntDesign name="login" size={20} color={color} />
          )
        }}
      />

    </Tab.Navigator>
  )
}

export default Navigation
