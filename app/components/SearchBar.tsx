import React from 'react'
import { StyledInput } from '../styles/StyledInput'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { View, Pressable } from 'react-native'
import { useSearchUser } from '../hooks/useSearchUser-Hook'
import ViewContainer from '../styles/ViewContainer'

const SearchBar = () => {
  const {
    searchText,
    setSearchText,
    handleSubmit
  } = useSearchUser()

  return (
    <ViewContainer flexDirection='row'>
      <View style={{ flex: 1 }}>
        <StyledInput
          onChangeText={setSearchText}
          value={searchText}
          placeholder="Search User"
          inputMode='search'
          onSearch={handleSubmit}
        />
      </View>
      <View>
        <Pressable
          onPress={handleSubmit}
          style={{ padding: 10 }}
        >
          <Ionicons name="search" size={30} />
        </Pressable>
      </View>
    </ViewContainer>

  )
}

export default SearchBar
