import { View, Text, StyleSheet, Image } from 'react-native'
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

const UserGithubCard = ({
  avatar_url: avatarUrl,
  login,
  html_url: htmlUrl,
  followers,
  following,
  name,
  blog,
  location,
  email,
  bio,
  public_repos: publicRepos
}: UserGithubData) => {
  return (
    <View >
      <Image style={styles.avatar} source={{ uri: avatarUrl }} />
      <Text >Nombre de usuario: {login}</Text>
      <Text >URL HTML: {htmlUrl}</Text>
      <Text >Seguidores: {followers}</Text>
      <Text >Siguiendo: {following}</Text>
      <Text >Repositorios públicos: {publicRepos}</Text>
      <Text >Nombre completo: {name !== '' ? name : 'No Disponible'}</Text>
      <Text>Blog: {blog !== '' ? blog : 'No disponible'}</Text>
      <Text>Ubicación: {location !== '' ? location : 'No disponible'}</Text>
      <Text>Correo electrónico: {email !== '' ? email : 'No disponible'}</Text>
      <Text>Biografía: {bio !== '' ? bio : 'No disponible'}</Text>
    </View>
  )
}

export default UserGithubCard
