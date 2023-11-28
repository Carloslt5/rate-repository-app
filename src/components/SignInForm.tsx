import React from 'react'
import { View } from 'react-native'
import { Controller } from 'react-hook-form'
import { StyledInput } from '../styles/StyledInput'

import { useSignIn } from '../hooks/useSignIn-Hook'
import { StyledButton } from '../styles/StyledButton'
import StyledText from '../styles/StyledText'

const SignInForm = () => {
  const { control, handleSubmit, onSubmit } = useSignIn()

  return (
    <View style={{ padding: 10 }}>
      <Controller
        control={control}
        rules={{
          required: true
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <StyledInput
            placeholder="First name"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="email"
      />
      <Controller
        control={control}
        rules={{
          required: true
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <StyledInput
            placeholder="Password"
            secureTextEntry={true}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="password"
      />

      <StyledButton onPress={handleSubmit(onSubmit)} >
        <StyledText
          color='textWhite'
          fontWeight='bold'
          align='center'>
          Submit
        </StyledText>
      </StyledButton >
    </View >
  )
}

export default SignInForm
