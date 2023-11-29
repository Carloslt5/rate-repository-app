import React, { type ReactNode } from 'react'
import { Text, type StyleProp, StyleSheet, type TextStyle } from 'react-native'
import theme from './theme'
import { getBackgroundColorForLanguage } from '../utils/languageBgColor'

interface StyledTextProps {
  children: ReactNode
  color?: 'textPrimary' | 'textSecondary' | 'textWhite' | 'textError'
  align?: string
  fontSize?: 'subheading' | 'small'
  fontWeight?: 'normal' | 'bold'
  bgColor?: boolean
  style?: StyleProp<TextStyle>
  language?: string
}

const styles = StyleSheet.create({
  alignCenter: {
    textAlign: 'center'
  },
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
  colorWhite: {
    color: theme.colors.white
  },
  colorError: {
    color: theme.colors.error
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
    borderRadius: 4,
    color: theme.colors.white,
    marginVertical: 4,
    padding: 4,
    paddingHorizontal: 8
  }
})

const StyledText = ({ children, color, fontSize, fontWeight, align, language, style, ...props }: StyledTextProps) => {
  const textStyle = [
    styles.text,
    color === 'textPrimary' && styles.colorPrimary,
    color === 'textSecondary' && styles.colorTextSecondary,
    color === 'textWhite' && styles.colorWhite,
    color === 'textError' && styles.colorError,
    align === 'center' && styles.alignCenter,
    fontSize === 'subheading' && styles.fontSizeSubheading,
    fontSize === 'small' && styles.fontSizeSmall,
    fontWeight === 'bold' && styles.fontWeightBold,
    language !== undefined && {
      ...styles.language,
      backgroundColor: getBackgroundColorForLanguage(language)
    },
    style
  ]

  return (
    <Text style={textStyle} {...props} >
      {children}
    </Text>
  )
}

export default StyledText
