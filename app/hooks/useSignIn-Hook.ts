import { useForm } from 'react-hook-form'

import { Keyboard } from 'react-native'

export const useSignIn = () => {
  const signInData = useForm({
    defaultValues: {
      email: '',
      password: ''
    }
  })

  const { control, handleSubmit, formState: { errors }, reset } = signInData

  const onSubmit = (data: any) => {
    Keyboard.dismiss()
    reset()
  }

  return {
    control,
    handleSubmit,
    onSubmit,
    errors
  }
}
