import React from 'react'
import { Platform, StyleSheet } from 'react-native'
import theme from '../styles/theme'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { MenuTabs } from '../const/Menu-const'

const Tab = createBottomTabNavigator()

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
    <Tab.Navigator
      screenOptions={{
        headerShown: Platform.OS !== 'web',
        tabBarStyle: styles.tab,
        tabBarActiveTintColor: theme.colors.green100,
        tabBarInactiveTintColor: theme.colors.green500
      }}
    >
      {MenuTabs.map((menu, index) => {
        return (
          <Tab.Screen
            key={index}
            name={menu.name}
            component={menu.component}
            options={{
              headerShown: false,
              tabBarLabel: menu.label,
              tabBarIcon: ({ color }) => (
                <Ionicons name={menu.icon} size={20} color={color} />
              )
            }}
          />
        )
      })}
    </Tab.Navigator>
  )
}

export default Navigation
