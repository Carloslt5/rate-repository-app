import { useForm } from 'react-hook-form'
import { type UserData } from '../context/user.context'
import { Keyboard } from 'react-native'

export const useSignIn = () => {
  const signInData = useForm({
    defaultValues: {
      email: '',
      password: ''
    }
  })

  const { control, handleSubmit, formState: { errors }, reset } = signInData

  const onSubmit = (data: UserData) => {
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
