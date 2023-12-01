import React from 'react'
import { View } from 'react-native'
import { Controller } from 'react-hook-form'
import { StyledInput } from '../styles/StyledInput'
import { useSignIn } from '../hooks/useSignIn-Hook'
import StyledText from '../styles/StyledText'
import StyledForm from '../styles/StyledForm'
import StyledButton from '../styles/StyledButton'

const SignInForm = () => {
  const {
    control,
    //  handleSubmit, onSubmit,
    errors
  } = useSignIn()

  return (
    <StyledForm>
      <StyledText
        fontWeight='bold'
        style={{ fontSize: 40, marginBottom: 20 }}
      >
        Sign In ⭐️
      </StyledText>
      <View >
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
              inputMode="email"
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
          >
            {errors.password.message}
          </StyledText>
        }
      </View>
      {/* <StyledButton>
        <StyledText
          color='textWhite'
          fontWeight='bold'
          align='center'
        >
          Submit
        </StyledText>
      </StyledButton > */}
      <StyledButton >
        <StyledText
          color='textWhite'
          fontWeight='bold'
          align='center'
        >
          Submit
        </StyledText>
      </StyledButton>
    </StyledForm >
  )
}

export default SignInForm
