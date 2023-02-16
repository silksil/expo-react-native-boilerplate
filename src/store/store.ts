import { combineReducers, configureStore } from '@reduxjs/toolkit'
import {
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  persistStore,
} from 'redux-persist'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { configApi } from 'src/services/configApi'
import { setupListeners } from '@reduxjs/toolkit/query/react'

/**
 * @remarks
 * set the persist configuration
 *
 * @resources
 * Usage with redux persist: https://redux-toolkit.js.org/usage/usage-guide#use-with-redux-persist
 * Helpful tutorial: https://edvins.io/how-to-use-redux-persist-with-redux-toolkit
 * Helpful discussion about persisting RTK Query state: https://github.com/reduxjs/redux-toolkit/issues/1400
 * About the setupListeners:  https://redux-toolkit.js.org/rtk-query/api/setupListeners
 */

const persistConfig = {
  key: 'root',
  version: 1,
  storage: AsyncStorage,

  /**
   * Blacklist which reducers not to persist
   *  As advised by the redux docs, we don't want to persist the RTK Query state
   */
  blacklist: [configApi.reducerPath],
}

// combine reducers
const reducers = combineReducers({
  //   include other reducers here, example:
  //  someSlice: sliceReducer,

  [configApi.reducerPath]: configApi.reducer,
})

// set the persisting reducers
const persistedReducers = persistReducer(persistConfig, reducers)

// configure the store
export const store = configureStore({
  devTools: process.env.NODE_ENV !== 'production',
  reducer: persistedReducers,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        // Ignore all the action types it dispatches
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(configApi.middleware),
})

// Optional, but required for refetchOnFocus/refetchOnReconnect behaviors
setupListeners(store.dispatch)

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export const persistor = persistStore(store)
