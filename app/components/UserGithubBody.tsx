import { View, Text } from 'react-native'
import React from 'react'
import { type UserGithubData } from '../types/userGithubData.type'

const UserGithubBody = ({
  public_repos: publicRepos,
  name,
  blog,
  location,
  email
}: UserGithubData) => {
  return (
    <View>
      <Text >Repositorios públicos: {publicRepos}</Text>
      <Text >Nombre completo: {name !== '' ? name : 'No Disponible'}</Text>
      <Text>Blog: {blog !== '' ? blog : 'No disponible'}</Text>
      <Text>Ubicación: {location !== '' ? location : 'No disponible'}</Text>
      <Text>Correo electrónico: {email !== '' ? email : 'No disponible'}</Text>
    </View>
  )
}

export default UserGithubBody
