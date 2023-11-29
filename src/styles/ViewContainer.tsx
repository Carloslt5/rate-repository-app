import React, { type ReactNode } from 'react'
import { type StyleProp, StyleSheet, View, type ViewProps, Platform } from 'react-native'

interface StyledViewProps extends ViewProps {
  children: ReactNode
  justifyContent?: 'center'
  style?: StyleProp<ViewProps>
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    alignItems: 'center',
    padding: 10,
    ...Platform.select({
      web: {
        justifyContent: 'center',
        width: '90%',
        maxWidth: 1200,
        marginHorizontal: 'auto'
      }
    })
  },
  content: {
    justifyContent: 'center'
  }
})

const ViewContainer = ({ children, justifyContent, style, ...props }: StyledViewProps) => {
  const viewStyle = [
    styles.container,
    justifyContent === 'center' && styles.content,
    style
  ]

  return (
    <View style={viewStyle} {...props} >
      {children}
    </View>
  )
}

export default ViewContainer
