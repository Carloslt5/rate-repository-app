import React, { type ReactNode } from 'react'
import { Pressable, type StyleProp, StyleSheet, type PressableProps, type ViewStyle, Platform } from 'react-native'
import theme from './theme'

interface StyledButtonProps extends PressableProps {
  children: ReactNode
  style?: StyleProp<ViewStyle>
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: theme.colors.green500,
    borderRadius: 8,
    padding: 10,
    width: '100%',
    ...Platform.select({
      web: {
        maxWidth: 500
      }
    })
  }
})

export const StyledButton = ({ children, style, ...props }: StyledButtonProps) => {
  const buttonStyle = [
    styles.button,
    style
  ]

  return (
    <Pressable style={buttonStyle} {...props}>
      {children}
    </Pressable>
  )
}
