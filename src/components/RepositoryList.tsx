import React from 'react'
import { View, Text, FlatList } from 'react-native'
import repositories from './../data/respositoriesData.json'

export const RepositoryList = () => {
  return (
    <FlatList
      data={repositories}
      renderItem={({ item: repo }) => (
        <View key={repo.id}>
          <Text>id: {repo.id}</Text>
          <Text>Full Name:{repo.fullName}</Text>
          <Text>Description: {repo.description}</Text>
          <Text>Lenguage: {repo.language}</Text>
          <Text>Forks: {repo.forksCount}</Text>
          <Text>Start: {repo.stargazersCount}</Text>
          <Text>Rating: {repo.ratingAverage}</Text>
          <Text>Review: {repo.reviewCount}</Text>
        </View>
      )}
    />
  )
}
