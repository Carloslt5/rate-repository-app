import { useForm } from 'react-hook-form'
import { UserContext, type UserContextType, type UserData } from '../context/user.context'
import { useContext } from 'react'
import { useNavigate } from 'react-router-native'
import { Keyboard } from 'react-native'

export const useSignIn = () => {
  const navigate = useNavigate()

  const signInData = useForm({
    defaultValues: {
      email: '',
      password: ''
    }
  })

  const { control, handleSubmit, formState: { errors }, reset } = signInData
  const { setUser } = useContext(UserContext) as UserContextType

  const onSubmit = (data: UserData) => {
    console.log(JSON.stringify(data, null, 2))
    setUser(data)
    reset()
    Keyboard.dismiss()
    navigate('/')
  }

  return {
    control,
    handleSubmit,
    onSubmit,
    errors
  }
}
