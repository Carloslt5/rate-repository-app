import React, { type ReactNode } from 'react'
import { Text as NativeText, type StyleProp, StyleSheet, type TextStyle } from 'react-native'
import theme from './theme'

interface StyledTextProps {
  children: ReactNode
  color?: 'textSecondary' | 'primary'
  fontSize?: 'subheading'
  fontWeight?: 'normal' | 'bold'
  style?: StyleProp<TextStyle>
}

const styles = StyleSheet.create({
  text: {
    color: theme.colors.textPrimary,
    fontSize: theme.fontSizes.body,
    fontFamily: theme.fonts.main,
    fontWeight: theme.fontWeights.normal
  },
  colorTextSecondary: {
    color: theme.colors.textSecondary
  },
  colorPrimary: {
    color: theme.colors.primary
  },
  fontSizeSubheading: {
    fontSize: theme.fontSizes.subheading
  },
  fontWeightBold: {
    fontWeight: theme.fontWeights.bold
  }
})

const StyledText = ({ children, color, fontSize, fontWeight, style, ...props }: StyledTextProps) => {
  const textStyle = [
    styles.text,
    color === 'textSecondary' && styles.colorTextSecondary,
    color === 'primary' && styles.colorPrimary,
    fontSize === 'subheading' && styles.fontSizeSubheading,
    fontWeight === 'bold' && styles.fontWeightBold,
    style
  ]

  return (
    <NativeText style={textStyle} {...props} >
      {children}
    </NativeText>
  )
}

export default StyledText
