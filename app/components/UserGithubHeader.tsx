import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import { type UserGithubData } from '../types/userGithubData.type'
import StyledText from '../styles/StyledText'
import Ionicons from 'react-native-vector-icons/Ionicons'

const styles = StyleSheet.create({
  avatar: {
    width: 100,
    height: '100%',
    borderRadius: 6,
    marginBottom: 10
  },
  headerContainer: {
    flexDirection: 'row',
    gap: 10
  }
})

const UserGithubHeader = ({
  avatar_url: avatarUrl,
  login,
  blog,
  html_url: htmlUrl,
  location
}: UserGithubData) => {
  return (
    <View style={{ marginBottom: 10 }}>
      <View style={styles.headerContainer}>
        <View>
          <Image style={styles.avatar} source={{ uri: avatarUrl }} />
        </View>

        <View style={{ flex: 1, justifyContent: 'space-between' }}>
          <StyledText fontSize='subheading' fontWeight='bold'>{login}</StyledText>
          <View >
            <View style={{ ...styles.headerContainer, alignItems: 'center' }}>
              <Ionicons name='logo-github' size={20} color={'black'} />
              <Text >{htmlUrl}</Text>
            </View>
            <View style={{ ...styles.headerContainer, alignItems: 'center' }}>
              <Ionicons name='earth' size={20} color={'black'} />
              <Text>{blog !== '' ? blog : 'No disponible'}</Text>
            </View>
            <View style={{ ...styles.headerContainer, alignItems: 'center' }}>
              <Ionicons name='location-sharp' size={20} color={'black'} />
              <Text>{location !== '' ? location : 'No disponible'}</Text>
            </View>
          </View>
        </View>

      </View>
    </View>
  )
}

export default UserGithubHeader
