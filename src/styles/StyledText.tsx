import React from 'react'
import { StyleSheet, Text } from 'react-native'

interface StyledTextProps {
  text?: string
  bold?: boolean
  big?: boolean
  small?: boolean
  green?: boolean
  children?: React.ReactNode
}

const style = StyleSheet.create({
  text: {
    fontSize: 14,
    color: 'grey'
  },
  bold: {
    fontWeight: 'bold'
  },
  big: {
    fontSize: 20
  },
  small: {
    fontSize: 12
  },
  green: {
    color: '#009b75'
  }
})

export default function StyledText({ text, bold, big, small, green, children }: StyledTextProps) {
  const textStyles = [
    style.text,
    bold !== undefined && style.bold,
    big !== undefined && style.big,
    small !== undefined && style.small,
    green !== undefined && style.green
  ]

  return (
    <Text style={textStyles}>
      {children}
    </Text>
  )
}
