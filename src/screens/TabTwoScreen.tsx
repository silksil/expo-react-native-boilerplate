import { useNavigation } from '@react-navigation/native'
import { Box, Button, Center, useColorMode, Text, List } from 'native-base'
import { useGetTodosQuery } from 'src/services/post'

function PseudoPropsUsage() {
  const { colorMode, toggleColorMode } = useColorMode()
  return (
    <Center flex={1}>
      <Box p={4} maxW="300">
        <Text fontSize="lg" display="flex" mb="20">
          The active color mode is{' '}
          <Text bold fontSize="lg">
            {colorMode}
          </Text>
        </Text>
        <Button onPress={toggleColorMode}>Toggle</Button>
      </Box>
    </Center>
  )
}

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
