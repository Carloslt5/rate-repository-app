import React from 'react'
import { Main } from './app/components/Main'
import { NativeRouter } from 'react-router-native'
import { UserProviderWrapper } from './app/context/user.context'

export default function App() {
  return (
    <NativeRouter>
      <UserProviderWrapper>
        <Main />
      </UserProviderWrapper>
    </NativeRouter>
  )
}
