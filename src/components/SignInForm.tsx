import React from 'react'
import { Button, View } from 'react-native'
import { useSignIn } from '../hooks/useSignIn-Hook'
import { StyledInput } from '../styles/StyledInput'

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
      <Button title="Submit" onPress={handleSubmit} />
    </View>
  )
}

export default SignInForm
