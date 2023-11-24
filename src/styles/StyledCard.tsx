import React, { type ReactNode } from 'react'
import { StyleSheet, View } from 'react-native'

interface StyledCardProps {
  children: ReactNode
  flexDirection?: string
}
const styles = StyleSheet.create({
  containerRow: {
    display: 'flex',
    flexDirection: 'row',
    columnGap: 6
  }
})

const StyledCard = ({ children, flexDirection, ...props }: StyledCardProps) => {
  const containerStyle = [
    flexDirection === 'flex-row' ? styles.containerRow : undefined
  ]

  return (
    <View style={containerStyle} {...props}>
      {children}
    </View>
  )
}

export default StyledCard
