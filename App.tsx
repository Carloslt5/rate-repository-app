import React from 'react'
import { Main } from './src/components/Main'
import { NativeRouter } from 'react-router-native'
import { UserProviderWrapper } from './src/context/user.context'

export default function App() {
  return (
    <UserProviderWrapper>
      <NativeRouter>
        <Main />
      </NativeRouter>
    </UserProviderWrapper>
  )
}
