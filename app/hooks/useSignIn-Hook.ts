import { useForm } from 'react-hook-form'
import { Keyboard } from 'react-native'
import { useDispatch } from 'react-redux'
import { type UserDataType, userSessionSuccess } from '../store/features/UserSession/reducer'

export const useSignIn = () => {
  const signInData = useForm({
    defaultValues: {
      email: '',
      password: ''
    }
  })

  const { control, handleSubmit, formState: { errors }, reset } = signInData
  const dispatch = useDispatch()

  const onSubmit = (userData: UserDataType) => {
    try {
      Keyboard.dismiss()
      dispatch(userSessionSuccess(userData))
      reset()
    } catch (error) {
      console.log(error)
    }
  }

  return {
    control,
    handleSubmit,
    onSubmit,
    errors
  }
}
