import React from 'react'
import { StyleSheet, type ImageSourcePropType, Image } from 'react-native'
import theme from '../styles/theme'

interface StyledImageProps {
  source: ImageSourcePropType
  image?: object
}

const styles = StyleSheet.create({
  image: {
    width: 48,
    height: 48,
    backgroundColor: theme.colors.primary,
    borderRadius: 4
  }
})

const StyledImage = ({ source, ...props }: StyledImageProps) => {
  const imageStyle = [
    styles.image
  ]

  return (
    <Image style={imageStyle} source={source} {...props} />
  )
}

export default StyledImage
