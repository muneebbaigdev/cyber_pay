import { configureStore } from '@reduxjs/toolkit'
import authentication from './states/authentication'
import logs from './states/logs'

export default configureStore({
  reducer: {
    authentication,
    logs
  }
})