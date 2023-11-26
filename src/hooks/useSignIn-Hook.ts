import { useState } from 'react'

export const useSignIn = () => {
  const [signInData, setSignInData] = useState({
    email: '',
    password: ''
  })

  const handleInputChange = (name: string, value: string) => {
    setSignInData({ ...signInData, [name]: value })
  }

  const handleSubmit = () => {
    console.log('Date Sign In', signInData)
    setSignInData({ email: '', password: '' })
  }

  return {
    signInData,
    handleInputChange,
    handleSubmit
  }
}
