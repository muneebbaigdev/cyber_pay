import { createSlice } from '@reduxjs/toolkit'

export const logs = createSlice({
  name: 'logs',
  initialState: {
    logCount:0
  },
  reducers: {
    increment: state => {
      state.logCount += 1
    }
  }
})

// Action creators are generated for each case reducer function
export const { increment } = logs.actions

export default logs.reducer