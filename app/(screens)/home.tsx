import React from 'react'
import { View } from 'react-native'
import { Link } from 'expo-router'
import StyledText from '../styles/StyledText'
import StyledButton from '../styles/StyledButton'
import MainContainer from '../styles/MainContainer'
import ViewContainer from '../styles/ViewContainer'

const HomePage = () => {
  return (
    <MainContainer justifyContent='center'>
      <View style={{ marginBottom: 20 }}>
        <StyledText fontWeight='bold' align='center' fontSize='h1'>Welcome to </StyledText>
        <StyledText fontWeight='bold' align='center' fontSize='h1'>Rate Repositories</StyledText>
      </View>

      <ViewContainer>
        <Link href={'/signin'} asChild style={{ margin: 'auto', width: '100%' }}>
          <StyledButton>
            <StyledText color='textWhite' fontWeight='bold' align='center'>
              Sign Up
            </StyledText>
          </StyledButton>
        </Link>
      </ViewContainer>

    </MainContainer >
  )
}

export default HomePage
