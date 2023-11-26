import React from 'react'
import { Pressable, View } from 'react-native'
import { useSignIn } from '../hooks/useSignIn-Hook'
import { StyledInput } from '../styles/StyledInput'
import StyledText from '../styles/StyledText'

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

      <Pressable onPress={handleSubmit}>
        <StyledText>Submit</StyledText>
      </Pressable>
    </View >
  )
}

export default SignInForm
