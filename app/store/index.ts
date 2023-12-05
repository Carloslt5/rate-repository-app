import { configureStore } from '@reduxjs/toolkit'
import searchDataSlice from './features/SearchData/reducer'
import repoDataSlice from './features/RepoData/reducer'
import userSessionSlice from './features/UserSession/reducer'

const store = configureStore({
  reducer: {
    userSessionData: userSessionSlice,
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
