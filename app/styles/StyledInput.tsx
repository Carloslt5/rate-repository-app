import React from 'react'
import { type StyleProp, StyleSheet, TextInput, type TextInputProps, Platform } from 'react-native'
import theme from './theme'
import { useFocus } from '../hooks/useFocus-Hook'

interface StyledInputProps extends TextInputProps {
  style?: StyleProp<TextInputProps>
  error?: boolean
  onSearch?: () => void
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
    borderColor: theme.colors.green500,
    ...Platform.select({
      web: {
        outlineColor: theme.colors.green500
      }
    })
  },
  inputError: {
    borderColor: theme.colors.error
  }
})

export const StyledInput = ({ onSearch, error, style, ...props }: StyledInputProps) => {
  const { isFocused, handleFocus, handleBlur } = useFocus()

  const inputStyle = [
    styles.inputText,
    isFocused && styles.inputFocus,
    error === true && styles.inputError,
    style
  ]

  return (
    <TextInput
      style={inputStyle}
      onFocus={handleFocus}
      onBlur={handleBlur}
      onSubmitEditing={onSearch}
      {...props} />
  )
}
