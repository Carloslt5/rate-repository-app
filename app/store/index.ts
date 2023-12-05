import { configureStore } from '@reduxjs/toolkit'
import amountSlice from './features/count/reducer'
import searchDataSlice from './features/SearchData/reducer'
import repoDataSlice from './features/RepoData/reducer'

const store = configureStore({
  reducer: {
    count: amountSlice,
    searchData: searchDataSlice,
    repoData: repoDataSlice
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
      immutableCheck: false
    })
})
export default store
export type RootState = ReturnType<typeof store.getState>
