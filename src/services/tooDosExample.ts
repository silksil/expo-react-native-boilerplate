import { configApi } from './configApi'

type Todo = {
  userId: number
  id: number
  title: string
  completed: boolean
}

/**
 * Check documentation resources for additional questions
 *
 * @resources
 * Using query: https://redux-toolkit.js.org/rtk-query/api/fetchBaseQuery
 * Examples: https://redux-toolkit.js.org/rtk-query/usage/examples
 *
 */
export const todoApi = configApi.injectEndpoints({
  endpoints: builder => ({
    getTodos: builder.query<Todo[], void>({
      query: () => '/todos',
      transformResponse: (response: Todo[]) => {
        const copy = response.filter(r => r.id <= 10)
        return copy.sort((a, b) => b.id - a.id)
      },
      providesTags: ['Todos'], // defining a tag for this call
    }),
    addTodo: builder.mutation({
      query: (todo: Todo) => ({
        url: '/todos',
        method: 'POST',
        body: todo,
      }),
      invalidatesTags: ['Todos'], // invalidate this tag for this mutation so that data can automatically re-fetched
    }),
  }),
  overrideExisting: true,
})

export const { useGetTodosQuery, useAddTodoMutation } = todoApi
