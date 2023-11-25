import React from 'react'
import { Link } from 'react-router-native'
import StyledText from '../styles/StyledText'
import theme from '../styles/theme'
import { StyleSheet } from 'react-native'

const style = StyleSheet.create({
  text: {
    color: theme.appBar.textPrimary
  }
})

const AppTab = ({ active, children, to }: any) => {
  return (
    <Link to={to} underlayColor={'transparent'}>
      <StyledText fontWeight='bold' style={style.text}>
        {children}
      </StyledText>
    </Link>
  )
}
export default AppTab
