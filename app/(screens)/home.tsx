import React from 'react'
import { View } from 'react-native'
import { Link } from 'expo-router'
import ViewContainer from '../styles/ViewContainer'
import StyledText from '../styles/StyledText'
import StyledButton from '../styles/StyledButton'

const HomePage = () => {
  return (
    <ViewContainer justifyContent='center'>
      <View>
        <StyledText fontWeight='bold' align='center' fontSize='h1'>Welcome to </StyledText>
        <StyledText fontWeight='bold' align='center' fontSize='h1'>Rate Repositories</StyledText>
      </View>

      <Link href={'(screens)/signin'} asChild>
        <StyledButton>
          <StyledText color='textPrimary' fontWeight='bold' align='center'>
            Sign Up
          </StyledText>
        </StyledButton>
      </Link>
      <Link href={'(screens)/repositories'} asChild>
        <StyledButton>
          <StyledText color='textPrimary' fontWeight='bold' align='center'>
            ver Repositorios
          </StyledText>
        </StyledButton>
      </Link>

    </ViewContainer >
  )
}

export default HomePage
