import { createSlice } from '@reduxjs/toolkit'
import { type UserGithubData } from '../../../types/userGithubData.type'

export interface SearchData {
  searchData: UserGithubData | null
  searchLoading: boolean
}

const initialStateData: SearchData = {
  searchData: null,
  searchLoading: false
}

export const searchDataSlice = createSlice({
  name: 'Search Data',
  initialState: initialStateData,
  reducers: {
    searchUserRequest: (state) => {
      state.searchLoading = true
    },
    searchUserRequestError: (state) => {
      state.searchLoading = false
    },
    searchUserSuccess: (state, action) => {
      state.searchData = action.payload
      state.searchLoading = false
    }
  }
})

export const { searchUserRequest, searchUserSuccess, searchUserRequestError } = searchDataSlice.actions
export default searchDataSlice.reducer
