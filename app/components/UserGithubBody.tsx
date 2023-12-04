import { View, Text } from 'react-native'
import React from 'react'
import { type UserGithubData } from '../types/userGithubData.type'
import StyledText from '../styles/StyledText'

const UserGithubBody = ({
  public_repos: publicRepos,
  bio
}: UserGithubData) => {
  return (
    <View style={{ gap: 10 }}>
      <View>
        <StyledText fontWeight='bold' >Biography: </StyledText>
        <Text >{bio !== '' ? bio : 'No disponible'}</Text>
      </View>
      <View>
        <StyledText fontWeight='bold' >Public Repositories: </StyledText>
        <Text >{publicRepos}</Text>
      </View>
    </View>
  )
}

export default UserGithubBody
