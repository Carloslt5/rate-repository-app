import { useForm } from 'react-hook-form'

interface SignInData {
  email: string
  password: string
}

export const useSignIn = () => {
  const signInData = useForm({
    defaultValues: {
      email: '',
      password: ''
    }
  })

  const { control, handleSubmit } = signInData

  const onSubmit = (data: SignInData) => {
    console.log('-----------', data)
  }
  return {
    control,
    handleSubmit,
    onSubmit
  }
}
