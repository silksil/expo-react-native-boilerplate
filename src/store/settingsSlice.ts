import { createSlice } from '@reduxjs/toolkit'

type SliceState = {
  isDarkMode: boolean
}

const initialState: SliceState = {
  isDarkMode: true,
}

/**
 *
 * @resources
 * Usage: https://redux-toolkit.js.org/api/createSlice
 * Usage with typescript: https://redux.js.org/tutorials/typescript-quick-start
 */
const slice = createSlice({
  name: 'settings',
  initialState,
  reducers: {
    toggleThemeMode(state: SliceState) {
      state.isDarkMode = !state.isDarkMode
    },
  },
})

export default slice.reducer

// export the actions
export const { toggleThemeMode } = slice.actions
