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

  const { control, handleSubmit, formState: { errors } } = signInData

  const onSubmit = (data: SignInData) => {
    console.log(JSON.stringify(data, null, 2))
  }

  return {
    control,
    handleSubmit,
    onSubmit,
    errors
  }
}
