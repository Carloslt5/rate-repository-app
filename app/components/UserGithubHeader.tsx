import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import { type UserGithubData } from '../types/userGithubData.type'

const styles = StyleSheet.create({
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10
  }
})

const UserGithubHeader = ({
  avatar_url: avatarUrl,
  login,
  bio,
  html_url: htmlUrl,
  followers,
  following
}: UserGithubData) => {
  return (
    <View>
      <Image style={styles.avatar} source={{ uri: avatarUrl }} />
      <Text >Nombre de usuario: {login}</Text>
      <Text >URL HTML: {htmlUrl}</Text>
      <Text>Biografía: {bio !== '' ? bio : 'No disponible'}</Text>
      <Text >Seguidores: {followers}</Text>
      <Text >Siguiendo: {following}</Text>
    </View>
  )
}

export default UserGithubHeader
