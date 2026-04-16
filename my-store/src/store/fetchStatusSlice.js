import { createSlice, current } from "@reduxjs/toolkit";
const fetchStatusSlice = createSlice({
  name: 'fetchStatus',
  initialState: {
    fetchDone: false,
    currentFetchStatus: false
  },
  reducers: {
    markFetchDone: (state) => {
      state.fetchDone = true
    },
    markFetchStart: (state) => {
      state.currentFetchStatus = true
    },
    markFetchFinish: (state) => {
      state.currentFetchStatus = false
    }
  }
})
export const fetchStatusActions = fetchStatusSlice.actions
export default fetchStatusSlice