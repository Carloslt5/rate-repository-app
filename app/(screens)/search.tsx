import React from 'react'
import SearchBar from '../components/SearchBar'
import ViewContainer from '../styles/ViewContainer'
import UserRepository from '../components/UserRepository'
import { Pressable, Text, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { type RootState } from '../store'
import { increment } from '../feature/count/reducer'

const SearchPage = () => {
  const amountData = useSelector((state: RootState) => state.count)
  const dispatch = useDispatch()

  console.log('----------------', amountData)

  const handleIncrement = () => {
    console.log('incrementando')
    dispatch(increment())
  }
  const handleDecrement = () => {
    console.log('decrementando')
  }

  return (
    <ViewContainer justifyContent='start'>
      <SearchBar />
      <UserRepository />

      <Text>Amout: ...</Text>
      <View>
        <Pressable onPress={handleIncrement}>
          <Text>boton incrementar +10</Text>
        </Pressable>
        <Pressable onPress={handleDecrement}>
          <Text>boton decrementar -10</Text>
        </Pressable>
      </View>
    </ViewContainer>
  )
}

export default SearchPage
