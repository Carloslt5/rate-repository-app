import React from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { Platform, StyleSheet } from 'react-native'
import { Tabs } from 'expo-router'
import theme from '../styles/theme'

const styles = StyleSheet.create({
  tab: {
    backgroundColor: theme.colors.green300,
    borderRadius: 6,
    paddingVertical: 6,
    paddingBottom: 6,
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

const Navigation = () => {
  return (
    <Tabs
      screenOptions={{
        headerShown: Platform.OS !== 'web',
        tabBarStyle: styles.tab,
        tabBarActiveTintColor: theme.colors.green100,
        tabBarInactiveTintColor: theme.colors.green500
      }}
    >
      <Tabs.Screen
        name="Home"
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <Ionicons name="home" size={20} color={color} />
          )
        }}
      />
      <Tabs.Screen
        name="Search"
        options={{
          tabBarLabel: 'Search',
          tabBarIcon: ({ color }) => (
            <Ionicons name="search-circle" size={20} color={color} />
          )
        }}
      />
      <Tabs.Screen
        name="Respositories"
        options={{
          tabBarLabel: 'Respositories',
          tabBarIcon: ({ color }) => (
            <Ionicons name="list-circle" size={20} color={color} />
          )
        }}
      />
      <Tabs.Screen
        name="Signin"
        options={{
          tabBarLabel: 'Signin',
          tabBarIcon: ({ color }) => (
            <AntDesign name="login" size={20} color={color} />
          )
        }}
      />

    </Tabs>
  )
}

export default Navigation
