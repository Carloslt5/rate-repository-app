import React from 'react'
import { StyledInput } from '../styles/StyledInput'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { View, Pressable } from 'react-native'
import { useSearchUser } from '../hooks/useSearchUser-Hook'

const SearchBar = () => {
  const {
    searchText,
    setSearchText,
    handleSearch
  } = useSearchUser()

  return (
    <View style={{ flexDirection: 'row', alignItems: 'center', width: '100%' }}>
      <View style={{ flex: 1 }}>
        <StyledInput
          onChangeText={setSearchText}
          value={searchText}
          placeholder="Search User"
        />
      </View>
      <View>
        <Pressable onPress={handleSearch} style={{ padding: 10 }}>
          <Ionicons name="search" size={30} />
        </Pressable>
      </View>
    </View>

  )
}

export default SearchBar
