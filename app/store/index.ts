import { configureStore } from '@reduxjs/toolkit'
import amountSlice from '../feature/count/reducer'
import searchDataSlice from '../feature/SearchData/reducer'

const store = configureStore({
  reducer: {
    count: amountSlice,
    searchData: searchDataSlice
  }
})
export default store
export type RootState = ReturnType<typeof store.getState>
