import { createSlice } from '@reduxjs/toolkit'
import { type UserGithubData } from '../../types/userGithubData.type'

interface InitialStateData {
  searchData: UserGithubData | null
}

const initialStateData: InitialStateData = {
  searchData: null
}

export const searchDataSlice = createSlice({
  name: 'amount',
  initialState: initialStateData,
  reducers: {
    searchUserSuccess: (state, action) => {
      state.searchData = action.payload
    }
  }
})
export const { searchUserSuccess } = searchDataSlice.actions
export default searchDataSlice.reducer
