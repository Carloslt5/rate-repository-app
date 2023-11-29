import React from 'react'
import { View } from 'react-native'
import { StyledButton } from '../styles/StyledButton'
import StyledText from '../styles/StyledText'
import { useNavigate } from 'react-router-native'
import ViewContainer from '../styles/ViewContainer'

const HomePage = () => {
  const navigate = useNavigate()

  const handleSignInPress = () => {
    navigate('/signin')
  }

  return (
    <ViewContainer justifyContent='center'>
      <View>
        <StyledText fontWeight='bold' align='center' fontSize='h1'>Welcome to </StyledText>
        <StyledText fontWeight='bold' align='center' fontSize='h1'>Rate Repositories</StyledText>
      </View>
      <StyledButton
        style={{ marginTop: 40 }}
        onPress={handleSignInPress}
      >
        <StyledText
          color='textWhite'
          fontWeight='bold'
          align='center'
        >
          Sign In
        </StyledText>
      </StyledButton >
    </ViewContainer>
  )
}

export default HomePage
