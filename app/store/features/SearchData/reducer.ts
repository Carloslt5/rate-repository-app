import { createSlice } from '@reduxjs/toolkit'
import { type UserGithubData } from '../../../types/userGithubData.type'

export interface SearchData {
  searchData: UserGithubData | null
}

const initialStateData: SearchData = {
  searchData: null
}

export const searchDataSlice = createSlice({
  name: 'Search Data',
  initialState: initialStateData,
  reducers: {
    searchUserSuccess: (state, action) => {
      state.searchData = action.payload
    }
  }
})

export const { searchUserSuccess } = searchDataSlice.actions
export default searchDataSlice.reducer
