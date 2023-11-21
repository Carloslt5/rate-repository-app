import React from 'react'
import { View, StyleSheet, Image } from 'react-native'
import { type Repository } from '../data/Repository.type'
import StyledText from '../styles/StyledText'
import { RepositoryStats } from './RepositoryStats'
import theme from '../styles/theme'

const style = StyleSheet.create({
  container: {
    padding: 20
  },
  lenguage: {
    alignSelf: 'flex-start',
    backgroundColor: theme.colors.primary,
    borderRadius: 4,
    color: theme.colors.white,
    padding: 4,
    marginVertical: 2
  },
  image: {
    width: 48,
    height: 48,
    backgroundColor: theme.colors.primary,
    borderRadius: 4
  }
})

export const RepositoryItem: React.FC<Repository> = (repo) => {
  const { id, fullName, description, language, ownerAvatarUrl } = repo

  return (
    <View
      key={id}
      style={style.container}
    >
      <Image style={style.image} source={{ uri: ownerAvatarUrl }}></Image>
      <StyledText fontWeight="bold" color="textSecondary" fontSize='subheading'>
        {fullName}
      </StyledText >
      <StyledText >Description: {description}</StyledText >
      <StyledText style={style.lenguage} >
        {language}
      </StyledText >
      <RepositoryStats {...repo} />
    </View >
  )
}
