import React from 'react'
import { View } from 'react-native'
import StyledText from '../styles/StyledText'
import { type Repository } from '../data/Repository.type'

export const RepositoryStats: React.FC<Repository> = ({ forksCount, stargazersCount, ratingAverage, reviewCount }) => {
  return (
    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
      <View style={{ alignItems: 'center' }}>
        <StyledText fontWeight='bold'>Start:</StyledText >
        <StyledText >{stargazersCount}</StyledText >
      </View>
      <View style={{ alignItems: 'center' }}>
        <StyledText fontWeight='bold'>Rating:</StyledText >
        <StyledText >{ratingAverage}</StyledText >
      </View>
      <View style={{ alignItems: 'center' }}>
        <StyledText fontWeight='bold'>Forks:</StyledText >
        <StyledText >{forksCount}</StyledText >
      </View>
      <View style={{ alignItems: 'center' }}>
        <StyledText fontWeight='bold'>Review:</StyledText >
        <StyledText >{reviewCount}</StyledText >
      </View>
    </View>
  )
}
