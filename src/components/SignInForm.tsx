import React from 'react'
import { View } from 'react-native'
import { useSignIn } from '../hooks/useSignIn-Hook'
import { StyledInput } from '../styles/StyledInput'
import StyledText from '../styles/StyledText'
import { StyledButton } from '../styles/StyledButton'

const SignInForm = () => {
  const { signInData, handleInputChange, handleSubmit } = useSignIn()

  const { password, email } = signInData

  return (
    <View style={{ padding: 10 }}>
      <StyledInput
        placeholder="Email"
        value={email}
        onChangeText={(text) => { handleInputChange('email', text) }}
      />
      <StyledInput
        placeholder="Password"
        secureTextEntry={true}
        value={password}
        onChangeText={(text) => { handleInputChange('password', text) }}
      />

      <StyledButton onPress={handleSubmit}>
        <StyledText
          color='textWhite'
          fontWeight='bold'
          align='center'>
          Submit
        </StyledText>
      </StyledButton>
    </View >
  )
}

export default SignInForm
