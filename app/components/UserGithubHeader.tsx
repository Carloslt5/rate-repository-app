import { View, Pressable, Linking } from 'react-native'
import React from 'react'
import { type UserGithubData } from '../types/userGithubData.type'
import StyledText from '../styles/StyledText'
import Ionicons from 'react-native-vector-icons/Ionicons'
import StyledImage from '../styles/StyledImage'
import ViewContainer from '../styles/ViewContainer'

const UserGithubHeader = ({ avatar_url: avatarUrl, login, blog, html_url: htmlUrl, location }: UserGithubData) => {
  return (
    <View style={{ marginBottom: 10 }}>
      <ViewContainer flexDirection='row' >

        <StyledImage source={{ uri: avatarUrl }} />

        <ViewContainer style={{ flex: 1 }}>
          <StyledText fontSize='subheading' fontWeight='bold'>
            {login}
          </StyledText>
          <View >
            <ViewContainer flexDirection='row' >
              <Ionicons name='logo-github' size={20} color={'black'} />
              <Pressable onPress={async () => await Linking.openURL(htmlUrl)}>
                <StyledText textDecoration='underline'>{htmlUrl}</StyledText>
              </Pressable>
            </ViewContainer>
            <ViewContainer flexDirection='row' >
              <Ionicons name='earth' size={20} color={'black'} />
              <Pressable onPress={async () => await Linking.openURL(blog)}>
                <StyledText textDecoration='underline'>{blog !== '' ? blog : 'No disponible'}</StyledText>
              </Pressable>
            </ViewContainer>
            <ViewContainer flexDirection='row' >
              <Ionicons name='location-sharp' size={20} color={'black'} />
              <StyledText>{location !== '' ? location : 'No disponible'}</StyledText>
            </ViewContainer>
          </View>
        </ViewContainer>

      </ViewContainer>
    </View>
  )
}

export default UserGithubHeader
