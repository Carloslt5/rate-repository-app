import { createSlice } from '@reduxjs/toolkit'

export const amountSlice = createSlice({
  name: 'amount',
  initialState: 20,
  reducers: {
    increment: (state) => {
      console.log('stateeee', state)
      return state + 1
    },
    decrement: (state) => {
      return state - 1
    }
  }
})
export const { increment, decrement } = amountSlice.actions
export default amountSlice.reducer
