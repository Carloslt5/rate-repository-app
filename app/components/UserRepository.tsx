import React from 'react'
import { Text, View } from 'react-native'
import { useSelector } from 'react-redux'
import { type RootState } from '../store'
import UserGithubCard from './UserGithubCard'

const UserRepository = () => {
  const { searchData } = useSelector((state: RootState) => state.searchData)
  console.log('search data-------------: ', searchData)

  return (
    <View>
      {
        searchData === null
          ? <Text>No se encontraron datos</Text>
          : <UserGithubCard {...searchData} />
      }
    </View>
  )
}

export default UserRepository
