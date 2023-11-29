import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { StyledButton } from '../styles/StyledButton'
import StyledText from '../styles/StyledText'
import { useNavigate } from 'react-router-native'

const HomePage = () => {
  const navigate = useNavigate()

  const handleSignInPress = () => {
    navigate('/signin')
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Rate Repositories</Text>
      <StyledButton style={{ width: '50%' }} onPress={handleSignInPress}>
        <StyledText
          color='textWhite'
          fontWeight='bold'
          align='center'
        >
          Sign In
        </StyledText>
      </StyledButton >
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10
  },
  title: {
    fontSize: 50,
    fontWeight: 'bold',
    marginBottom: 50,
    textAlign: 'center'
  }
})

export default HomePage
