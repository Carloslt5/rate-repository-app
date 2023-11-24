import React from 'react'
import { View, StyleSheet } from 'react-native'
import { type Repository } from '../data/Repository.type'
import { RepositoryStats } from './RepositoryStats'
import RepositoryItemHeader from './RepositoryItemHeader'

const style = StyleSheet.create({
  container: {
    padding: 20
  }
})

export const RepositoryItem: React.FC<Repository> = (repo) => {
  const { id } = repo

  return (
    <View
      key={id}
      style={style.container}
    >
      <RepositoryItemHeader {...repo} />
      <RepositoryStats {...repo} />
    </View >
  )
}
