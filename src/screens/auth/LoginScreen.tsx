import React from 'react'
import { Box, VStack, Button, Text, KeyboardAvoidingView, Heading } from 'native-base'
import { FormProvider, useForm } from 'react-hook-form'
import { Keyboard, Platform } from 'react-native'
import { useAuth } from 'src/auth/useAuth'
import RHFInput from 'src/components/hook_form/RHFInput'
import { signInSchema } from 'src/utils/schemas'
import { yupResolver } from '@hookform/resolvers/yup'
import { AuthStackParams } from 'src/navigation/AuthNavigator'
import { NativeStackScreenProps } from '@react-navigation/native-stack'

type LoginScreenProps = NativeStackScreenProps<AuthStackParams, 'Login'>

type FormValuesProps = {
  email: string
  password: string
}

export const LoginScreen = ({ navigation }: LoginScreenProps) => {
  const { login, error, isLoading } = useAuth()
  const methods = useForm<FormValuesProps>({
    resolver: yupResolver(signInSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  })
  const { handleSubmit } = methods

  const handleLogin = async (data: FormValuesProps) => {
    login(data.email, data.password)
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
          <Heading textAlign="left" mb={3}>
            Sign In
          </Heading>
          <VStack pb={3}>
            <RHFInput key="email" name="email" label="Email" />
            <RHFInput name="password" type="password" label="Password" />
            <Button
              onPress={handleSubmit(handleLogin)}
              isLoading={isLoading}
              isLoadingText={'Logging in'}
            >
              Login
            </Button>

            <Box w="100%" alignItems="center" justifyContent="center">
              <Text textAlign="center">{error?.message}</Text>
            </Box>
            <Button
              w="100%"
              colorScheme="primary"
              variant="link"
              p={0}
              onPress={() => navigation.navigate('Register')}
            >
              Register
            </Button>
          </VStack>
        </Box>
      </KeyboardAvoidingView>
    </FormProvider>
  )
}
