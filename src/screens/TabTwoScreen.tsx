import { Text } from 'native-base'
import { useGetTodosQuery } from 'src/services/tooDosExample'

export default function TabOneScreen() {
  const { data: todos, isError, isLoading, error } = useGetTodosQuery()

  if (isLoading) return <p>Loading...</p>
  if (isError) return <p>{JSON.stringify(error)}</p>
  return (
    <>
      {todos?.map(todo => (
        <Text key={todo.id}>{todo.title}</Text>
      ))}
    </>
  )
}
