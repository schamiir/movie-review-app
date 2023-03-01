import { configureStore } from '@reduxjs/toolkit'
import userLogin from './loggedIn'
export default configureStore({
  reducer: {
    loggedIn: userLogin,
  },
})