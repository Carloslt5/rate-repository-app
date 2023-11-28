import React from 'react'
import { View } from 'react-native'
import { Controller } from 'react-hook-form'
import { StyledInput } from '../styles/StyledInput'

import { useSignIn } from '../hooks/useSignIn-Hook'
import { StyledButton } from '../styles/StyledButton'
import StyledText from '../styles/StyledText'

const SignInForm = () => {
  const { control, handleSubmit, onSubmit, errors } = useSignIn()

  return (
    <View style={{ padding: 10 }}>
      <Controller
        name="email"
        control={control}
        rules={{
          required: 'Email is required',
          pattern: {
            value: /\S+@\S+\.\S+/,
            message: 'Invalid email address'
          }
        }}
        render={({ field: { onChange, value } }) => (
          <StyledInput
            placeholder="Email"
            onChangeText={onChange}
            value={value}
            keyboardType="email-address"
            error={!((errors?.email) == null)}
          />
        )}
      />
      {
        ((errors?.email) != null) &&
        <StyledText
          fontSize='small'
          fontWeight='bold'
          color='textError'
          style={{ marginBottom: 6 }}
        >
          {errors.email.message}
        </StyledText>
      }

      <Controller
        name="password"
        control={control}
        rules={{
          required: 'Password is required'
        }}
        render={({ field: { onChange, value } }) => (
          <StyledInput
            placeholder="Password"
            secureTextEntry={true}
            onChangeText={onChange}
            value={value}
            error={!((errors?.password) == null)}
          />
        )}
      />
      {
        ((errors?.password) != null) &&
        <StyledText
          fontSize='small'
          fontWeight='bold'
          color='textError'
          style={{ marginBottom: 6 }}
        >
          {errors.password.message}
        </StyledText>
      }

      <StyledButton onPress={handleSubmit(onSubmit)} >
        <StyledText
          color='textWhite'
          fontWeight='bold'
          align='center'
        >
          Submit
        </StyledText>
      </StyledButton >
    </View >
  )
}

export default SignInForm
