import React from 'react'
import { Text, View } from 'react-native'
import { useSelector } from 'react-redux'
import { type RootState } from '../store'

const UserRepository = () => {
  const { searchData } = useSelector((state: RootState) => state.searchData)
  console.log('search data-------------: ', searchData)

  return (
    <View>
      <Text>asdasd</Text>
    </View>
  )
}

export default UserRepository
