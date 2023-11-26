import React from 'react'
import { type StyleProp, StyleSheet, TextInput, type TextStyle, type TextInputProps } from 'react-native'
import theme from './theme'
import { useFocus } from '../hooks/useFocus-Hook'

interface StyledInputProps extends TextInputProps {
  style?: StyleProp<TextStyle>
}

const styles = StyleSheet.create({
  inputText: {
    borderColor: theme.colors.green900,
    width: '100%',
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    marginBottom: 6
  },
  inputFocus: {
    borderColor: theme.colors.green500
  }
})

export const StyledInput = ({ style, ...props }: StyledInputProps) => {
  const { isFocused, handleFocus } = useFocus()

  const inputStyle = [
    styles.inputText,
    isFocused && styles.inputFocus,
    style
  ]

  return (
    <TextInput
      style={inputStyle}
      onFocus={handleFocus}
      onBlur={handleFocus}
      {...props} />
  )
}
