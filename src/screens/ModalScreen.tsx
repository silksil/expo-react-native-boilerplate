import { Box, Button, Center, useColorMode, Text } from 'native-base'

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
  return (
    <Box bg="background.default" height="1000">
      <PseudoPropsUsage />
      <Button mt={200}> hello</Button>
      <Box bg="background.default"></Box>
    </Box>
  )
}
