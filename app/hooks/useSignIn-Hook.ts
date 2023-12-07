import { useForm } from 'react-hook-form'
import { Keyboard } from 'react-native'
import { useDispatch } from 'react-redux'
import { type UserDataType, userSessionSuccess, UserSessionOut } from '../store/features/UserSession/reducer'
import { useRouter } from 'expo-router'

export const useSignIn = () => {
  const signInData = useForm({
    defaultValues: {
      email: '',
      password: ''
    }
  })

  const { control, handleSubmit, formState: { errors }, reset } = signInData
  const dispatch = useDispatch()
  const router = useRouter()

  const onSubmit = (userData: UserDataType) => {
    try {
      Keyboard.dismiss()
      dispatch(userSessionSuccess(userData))
      reset()
      router.replace('/home')
    } catch (error) {
      console.log(error)
    }
  }

  const logOut = () => {
    dispatch(UserSessionOut())
  }

  return {
    control,
    handleSubmit,
    onSubmit,
    logOut,
    errors
  }
}
