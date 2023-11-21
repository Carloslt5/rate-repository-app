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
      <StyledText big bold green>id: {id}</StyledText >
      <StyledText bold green >Full Name:{fullName}</StyledText >
      <StyledText >Description: {description}</StyledText >
      <StyledText >Lenguage: {language}</StyledText >
      <StyledText bold>Start: {stargazersCount}</StyledText >
      <StyledText bold>Rating: {ratingAverage}</StyledText >
      <StyledText small>Forks: {forksCount}</StyledText >
      <StyledText small >Review: {reviewCount}</StyledText >
    </View>
  )
}
