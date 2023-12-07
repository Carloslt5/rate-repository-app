import React from 'react'
import { View } from 'react-native'
import { Link } from 'expo-router'
import StyledText from '../styles/StyledText'
import StyledButton from '../styles/StyledButton'
import MainContainer from '../styles/MainContainer'
import ViewContainer from '../styles/ViewContainer'
import { useSelector } from 'react-redux'
import { type RootState } from '../store'

const HomePage = () => {
  const { userSessionData } = useSelector((state: RootState) => state.userSessionData)

  return (
    <MainContainer justifyContent='center'>
      <View style={{ marginBottom: 20 }}>
        <StyledText fontWeight='bold' align='center' fontSize='h1'>Welcome to </StyledText>
        <StyledText fontWeight='bold' align='center' fontSize='h1'>Rate Repositories</StyledText>
      </View>
      {
        (userSessionData !== null)
          ? <>
            <StyledText>Welcome 👍: </StyledText>
            <StyledText> {userSessionData.email}</StyledText>
          </>
          : <ViewContainer>
            <Link href={'/signin'} asChild style={{ margin: 'auto', width: '100%' }}>
              <StyledButton>
                <StyledText color='textWhite' fontWeight='bold' align='center'>
                  Sign Up
                </StyledText>
              </StyledButton>
            </Link>
          </ViewContainer>
      }

    </MainContainer >
  )
}

export default HomePage
