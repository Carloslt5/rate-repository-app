import React from 'react'
import { NativeRouter } from 'react-router-native'
import { UserProviderWrapper } from './context/user.context'
import { Main } from './components/Main'

const Page = () => {
  return (
    <NativeRouter>
      <UserProviderWrapper>
        <Main />
      </UserProviderWrapper>
    </NativeRouter>
  )
}

export default Page
