import React from 'react'
import { StyleSheet, type ImageSourcePropType, Image } from 'react-native'

interface StyledImageProps {
  source: ImageSourcePropType
  image?: object
}

const styles = StyleSheet.create({
  image: {
    width: 100,
    height: '100%',
    borderRadius: 6
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
