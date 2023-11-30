import React from 'react'
import { Link, useLocation } from 'react-router-native'
import StyledText from '../styles/StyledText'
import theme from '../styles/theme'
import { StyleSheet } from 'react-native'

const style = StyleSheet.create({
  text: {
    color: theme.appBar.textDisable
  },
  active: {
    color: theme.appBar.textPrimary
  }
})

const AppTab = ({ children, to, onPress }: any) => {
  const { pathname } = useLocation()
  const active = pathname === to

  const textStyle = [
    style.text,
    active && style.active
  ]

  return (
    <Link onPress={onPress} to={to} underlayColor={'transparent'}>
      <StyledText fontWeight='bold' style={textStyle}>
        {children}
      </StyledText>
    </Link>
  )
}
export default AppTab
