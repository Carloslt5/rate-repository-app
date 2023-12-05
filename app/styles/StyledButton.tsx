import React, { forwardRef, type Ref, type ReactNode } from 'react'
import { Pressable, type PressableProps, StyleSheet, type StyleProp, Platform } from 'react-native'
import theme from './theme'

interface StyledButtonProps extends PressableProps {
  children: ReactNode
  style?: StyleProp<PressableProps>
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: theme.colors.green500,
    borderRadius: 8,
    padding: 10,
    ...Platform.select({
      web: {
        maxWidth: 500
      }
    })
  }
})

const StyledButton = ({ style, children, ...props }: StyledButtonProps, ref: Ref<typeof Pressable>) => {
  const buttonStyle = [styles.button, style]

  return (
    <Pressable style={buttonStyle} {...props}>
      {children}
    </Pressable>
  )
}

export default forwardRef(StyledButton)
