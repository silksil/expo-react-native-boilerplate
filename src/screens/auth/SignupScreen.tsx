import React from 'react'
import {
  Box,
  VStack,
  Button,
  Text,
  useToast,
  FormControl,
  Heading,
  HStack,
  Icon,
  KeyboardAvoidingView,
  Input,
} from 'native-base'
import { FormProvider, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { MaterialIcons } from '@expo/vector-icons'
import { Keyboard, Platform } from 'react-native'
// import { useAuth } from 'src/auth/useAuth'
import RHFInput from 'src/components/hook_form/RHFInput'

export const SignupScreen = ({ navigation }) => {
  //   const { register, error, isLoading } = useAuth()
  const methods = useForm({
    // resolver: yupResolver(),
  })
  const { handleSubmit } = methods

  const handleRegister = async (data: any) => {
    register(data)
  }

  return (
    <FormProvider {...methods}>
      <KeyboardAvoidingView
        h={{
          lg: 'auto',
        }}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        onTouchStart={() => Keyboard.dismiss()}
        w="100%"
      >
        <Box bg="background.default" height="1000" width="100%">
          <VStack pb={3}>
            <RHFInput key="email" name="email" label="Email" defaultValue="" py={1} />
            <RHFInput key="password" name="password" password label="Password" defaultValue="" />
            <RHFInput
              key="confirm-password"
              name="confirmPassword"
              label="Confirm password"
              defaultValue=""
              py={1}
            />

            <Button
              key="submit-button"
              w="100%"
              colorScheme="primary"
              onPress={handleSubmit(register)}
              isLoading={isLoading}
              isLoadingText={'Signing Up'}
            >
              Sign Up
            </Button>
            {/* <Button mt="3" colorScheme="primary" w="100%" disabled>
                        Send me a sign-in link
                    </Button> */}

            <Box w="100%" alignItems="center" justifyContent="center">
              <Text textAlign="center" color="danger.600">
                {error?.message}
              </Text>
            </Box>
            <Button
              w="100%"
              colorScheme="primary"
              variant="link"
              p={0}
              onPress={() => navigation.goBack()}
            >
              Return to previous screen
            </Button>
          </VStack>
        </Box>
      </KeyboardAvoidingView>
    </FormProvider>
  )
}
