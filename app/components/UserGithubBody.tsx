import { View } from 'react-native'
import React from 'react'
import { type UserGithubData } from '../types/userGithubData.type'
import StyledText from '../styles/StyledText'
import ViewContainer from '../styles/ViewContainer'

const UserGithubBody = ({ public_repos: publicRepos, bio, name }: UserGithubData) => {
  return (
    <ViewContainer >
      <View>
        <StyledText fontWeight='bold' >Full Name: </StyledText>
        <StyledText >{name ?? 'No disponible'}</StyledText>
      </View>
      <View>
        <StyledText fontWeight='bold' >Biography: </StyledText>
        <StyledText >{bio ?? 'No disponible'}</StyledText>
      </View>
      <View>
        <StyledText fontWeight='bold' >Public Repositories: </StyledText>
        <StyledText >{publicRepos}</StyledText>
      </View>
    </ViewContainer>
  )
}

export default UserGithubBody
