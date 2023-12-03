import { configureStore } from '@reduxjs/toolkit'
import amountSlice from '../feature/count/reducer'

const store = configureStore({
  reducer: {
    count: amountSlice
  }
})
export default store
export type RootState = ReturnType<typeof store.getState>
