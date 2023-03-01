import { createSlice } from '@reduxjs/toolkit'

export const userLogin = createSlice({
  name: 'isUserLogedIn',
  initialState: {
    value: false,
  },
  reducers: {
    logedIn: (state) => {
        state.value = true;
    },
    logedOut: (state) => {
        state.value = false;
    },
  },
})

// Action creators are generated for each case reducer function
export const { logedIn, logedOut } = userLogin.actions

export default userLogin.reducer