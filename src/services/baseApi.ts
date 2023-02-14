import { createApi, fetchBaseQuery, retry } from '@reduxjs/toolkit/query/react'

// Create our baseQuery instance
const baseQuery = fetchBaseQuery({
  // Mock data
  baseUrl: 'https://jsonplaceholder.typicode.com',
  // prepareHeaders: (headers, { getState }) => {
  //   // By default, if we have a token in the store, let's use that for authenticated requests
  //   const token = (getState() as RootState).auth.token
  //   if (token) {
  //     headers.set('authentication', `Bearer ${token}`)
  //   }
  //   return headers
  // },
})

const baseQueryWithRetry = retry(baseQuery, { maxRetries: 3 })

/**
 * Defines the empty configuration api, will allow for code splitting the middleware across multiple files
 *
 * @resources
 * Code splitting: https://redux-toolkit.js.org/rtk-query/usage/code-splitting
 */
export const baseApi = createApi({
  baseQuery: baseQueryWithRetry,
  /**
   * Tag types must be defined in the original API definition
   * for any tags that would be provided by injected endpoints
   */
  tagTypes: ['Todos'],
  /**
   * This api has endpoints injected in adjacent files,
   * which is why no endpoints are shown below.
   * If you want all endpoints defined in the same file, they could be included here instead
   */
  endpoints: () => ({}),
})
