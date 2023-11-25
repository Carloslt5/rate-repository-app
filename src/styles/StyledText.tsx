import React, { type ReactNode } from 'react'
import { Text, type StyleProp, StyleSheet, type TextStyle } from 'react-native'
import theme from './theme'

interface StyledTextProps {
  children: ReactNode
  color?: string
  fontSize?: 'subheading' | 'small'
  fontWeight?: 'normal' | 'bold'
  bgColor?: boolean
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
    color: theme.colors.textPrimary
  },
  fontSizeSubheading: {
    fontSize: theme.fontSizes.subheading
  },
  fontSizeSmall: {
    fontSize: theme.fontSizes.small
  },
  fontWeightBold: {
    fontWeight: theme.fontWeights.bold
  },
  language: {
    alignSelf: 'flex-start',
    backgroundColor: theme.colors.green700,
    borderRadius: 4,
    color: theme.colors.white,
    marginVertical: 4,
    padding: 4,
    paddingHorizontal: 8
  }
})

const StyledText = ({ children, color, fontSize, fontWeight, bgColor, style, ...props }: StyledTextProps) => {
  const textStyle = [
    styles.text,
    color === 'textSecondary' && styles.colorTextSecondary,
    color === 'textPrimary' && styles.colorPrimary,
    fontSize === 'subheading' && styles.fontSizeSubheading,
    fontSize === 'small' && styles.fontSizeSmall,
    fontWeight === 'bold' && styles.fontWeightBold,
    bgColor === true && styles.language,
    style
  ]

  return (
    <Text style={textStyle} {...props} >
      {children}
    </Text>
  )
}

export default StyledText
