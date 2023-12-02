import React, { type ReactNode } from 'react'
import { type StyleProp, StyleSheet, type TextStyle, View, Platform } from 'react-native'
import theme from './theme'

interface StyledCardProps {
  children: ReactNode
  flexDirection?: string
  border?: boolean
  style?: StyleProp<TextStyle>

}

const styles = StyleSheet.create({
  containerRow: {
    display: 'flex',
    flexDirection: 'row',
    columnGap: 6
  },
  border: {
    borderWidth: 1,
    borderColor: theme.colors.green300,
    borderRadius: 8,
    padding: 10,
    marginVertical: 6,
    marginHorizontal: 10,
    ...Platform.select({
      web: {
        marginHorizontal: 'auto',
        width: '80%',
        maxWidth: 700
      }
    })
  }
})

const StyledCard = ({ children, flexDirection, border, style, ...props }: StyledCardProps) => {
  const containerStyle = [
    flexDirection === 'flex-row' ? styles.containerRow : undefined,
    border === true && styles.border,
    style
  ]

  return (
    <View style={containerStyle} {...props}>
      {children}
    </View>
  )
}

export default StyledCard
