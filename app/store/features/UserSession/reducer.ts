import { createSlice } from '@reduxjs/toolkit'

export interface UserDataType {
  email: string
  password: string
}

export interface UserSessionData {
  userSessionData: UserDataType | null
  userLoading: boolean
}

const initialStateData: UserSessionData = {
  userSessionData: null,
  userLoading: false
}

export const userSessionSlice = createSlice({
  name: 'User Session',
  initialState: initialStateData,
  reducers: {
    userSessionRequest: (state) => {
      state.userLoading = true
    },
    userSessionError: (state) => {
      state.userLoading = false
    },
    userSessionSuccess: (state, action) => {
      state.userSessionData = action.payload
      state.userLoading = false
    }
  }
})

export const { userSessionRequest, userSessionError, userSessionSuccess } = userSessionSlice.actions
export default userSessionSlice.reducer
