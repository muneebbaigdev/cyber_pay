import { createSlice } from '@reduxjs/toolkit'

export const authentication = createSlice({
  name: 'authentication',
  initialState: {
    authentic:true
  },
  reducers: {
    authenticate: state => {
      console.log("dispatched")
      state.authentic = true
    }
  }
})

// Action creators are generated for each case reducer function
export const { authenticate } = authentication.actions

export default authentication.reducer