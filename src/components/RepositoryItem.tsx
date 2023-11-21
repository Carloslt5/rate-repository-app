import React from 'react'
import { View, StyleSheet } from 'react-native'
import { type Repository } from '../data/Repository.type'
import StyledText from '../styles/StyledText'

const style = StyleSheet.create({
  container: {
    padding: 20
  }
})

export const RepositoryItem: React.FC<Repository> = ({ id, fullName, description, language, forksCount, stargazersCount, ratingAverage, reviewCount }) => {
  return (
    <View
      key={id}
      style={style.container}
    >
      <StyledText > id: {id}</StyledText >
      <StyledText fontWeight="bold" color="textSecondary" fontSize='subheading'>
        Full Name:{fullName}
      </StyledText >
      <StyledText >Description: {description}</StyledText >
      <StyledText color="textSecondary" >
        Lenguage: {language}
      </StyledText >
      <StyledText >Start: {stargazersCount}</StyledText >
      <StyledText >Rating: {ratingAverage}</StyledText >
      <StyledText >Forks: {forksCount}</StyledText >
      <StyledText >Review: {reviewCount}</StyledText >
    </View >
  )
}
