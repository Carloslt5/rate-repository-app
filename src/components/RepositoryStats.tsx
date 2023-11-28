import React from 'react'
import { View } from 'react-native'
import StyledText from '../styles/StyledText'
import { type Repository } from '../data/Repository.type'
import { parseThousands } from '../utils/parseThousands'

export const RepositoryStats: React.FC<Repository> = ({ forksCount, stargazersCount, ratingAverage, reviewCount }) => {
  return (
    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
      <View style={{ alignItems: 'center' }}>
        <StyledText fontWeight='bold'>Start:</StyledText >
        <StyledText >{parseThousands(stargazersCount)}</StyledText >
      </View>
      <View style={{ alignItems: 'center' }}>
        <StyledText fontWeight='bold'>Rating:</StyledText >
        <StyledText >{parseThousands(ratingAverage)}</StyledText >
      </View>
      <View style={{ alignItems: 'center' }}>
        <StyledText fontWeight='bold'>Forks:</StyledText >
        <StyledText >{parseThousands(forksCount)}</StyledText >
      </View>
      <View style={{ alignItems: 'center' }}>
        <StyledText fontWeight='bold'>Review:</StyledText >
        <StyledText >{parseThousands(reviewCount)}</StyledText >
      </View>
    </View>
  )
}
