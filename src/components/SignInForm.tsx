import React from 'react'
import { Button, TextInput, View } from 'react-native'
import { useSignIn } from '../hooks/useSignIn-Hook'

const SignInForm = () => {
  const { signInData, handleInputChange, handleSubmit } = useSignIn()
  const { password, email } = signInData

  return (
    <View style={{ padding: 10 }}>
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={(text) => { handleInputChange('email', text) }}
      />
      <TextInput
        secureTextEntry={true}
        placeholder="Password"
        value={password}
        onChangeText={(text) => { handleInputChange('password', text) }}
      />
      <Button title="Submit" onPress={handleSubmit} />
    </View>
  )
}

export default SignInForm
