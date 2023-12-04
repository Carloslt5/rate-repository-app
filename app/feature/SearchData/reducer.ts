import { createSlice } from '@reduxjs/toolkit'

const initialStateData = {
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
