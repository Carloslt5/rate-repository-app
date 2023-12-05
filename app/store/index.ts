import { configureStore } from '@reduxjs/toolkit'
import searchDataSlice from './features/SearchData/reducer'
import repoDataSlice from './features/RepoData/reducer'

const store = configureStore({
  reducer: {
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
