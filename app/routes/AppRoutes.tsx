import React from 'react'
import { Platform, StyleSheet, TouchableOpacity } from 'react-native'
import theme from '../styles/theme'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { useSelector } from 'react-redux'
import { type RootState } from '../store'
import HomePage from '../(screens)/home'
import SearchPage from '../(screens)/search'
import SignInPage from '../(screens)/signin'
import { useSignIn } from '../hooks/useSignIn-Hook'

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
        maxWidth: 800
      }
    })
  }
})

const AppRoutes = () => {
  const { userSessionData } = useSelector((state: RootState) => state.userSessionData)
  const { logOut } = useSignIn()

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: Platform.OS !== 'web',
        tabBarStyle: styles.tab,
        tabBarActiveTintColor: theme.colors.green100,
        tabBarInactiveTintColor: theme.colors.green500
      }}
    >

      <Tab.Screen
        name="home"
        component={HomePage}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => <Ionicons name="home" size={20} color={color} />
        }}
      />
      {userSessionData !== null &&
        <Tab.Screen
          name="search"
          component={SearchPage}
          options={{
            tabBarLabel: 'Search',
            tabBarIcon: ({ color }) => <Ionicons name="search-circle" size={20} color={color} />
          }}
        />
      }
      {userSessionData == null
        ? <Tab.Screen
          name="signin"
          component={SignInPage}
          options={{
            tabBarLabel: 'Signin',
            tabBarIcon: ({ color }) => <Ionicons name="log-in" size={20} color={color} />
          }}
        />
        : <Tab.Screen
          name="signout"
          component={SignInPage}
          options={{
            tabBarLabel: 'Log out',
            tabBarIcon: ({ color }) => <Ionicons name="log-out" size={20} color={color} />,
            tabBarButton: ({ children, ...props }) => (
              <TouchableOpacity {...props} onPress={logOut}>
                {children}
              </TouchableOpacity>
            )
          }}
        />
      }

    </Tab.Navigator >
  )
}

export default AppRoutes
