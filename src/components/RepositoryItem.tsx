import React from 'react'
import { View, Text } from 'react-native'
import { type Repository } from '../data/Repository.type'

export const RepositoryItem: React.FC<Repository> = ({ id, fullName, description, language, forksCount, stargazersCount, ratingAverage, reviewCount }) => {
  return (
    <View key={id}>
      <Text>id: {id}</Text>
      <Text>Full Name:{fullName}</Text>
      <Text>Description: {description}</Text>
      <Text>Lenguage: {language}</Text>
      <Text>Forks: {forksCount}</Text>
      <Text>Start: {stargazersCount}</Text>
      <Text>Rating: {ratingAverage}</Text>
      <Text>Review: {reviewCount}</Text>
    </View>
  )
}
