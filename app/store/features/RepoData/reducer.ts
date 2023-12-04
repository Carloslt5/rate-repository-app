import { createSlice } from '@reduxjs/toolkit'
import { type RepoData } from '../../../types/repoData.type'

export interface RepoDataState {
  repoData: RepoData[] | null
}

const initialStateData: RepoDataState = {
  repoData: null
}

export const repoDataSlice = createSlice({
  name: 'Repo Data',
  initialState: initialStateData,
  reducers: {
    repoDataSuccess: (state, action) => {
      state.repoData = action.payload
    }
  }
})

export const { repoDataSuccess } = repoDataSlice.actions
export default repoDataSlice.reducer
