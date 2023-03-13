import React from 'react'
import { Box, VStack, Button, Text, KeyboardAvoidingView, Heading } from 'native-base'
import { FormProvider, useForm } from 'react-hook-form'
import { Keyboard, Platform } from 'react-native'
import { useAuth } from 'src/auth/useAuth'
import RHFInput from 'src/components/hook_form/RHFInput'
import { signUpSchema } from 'src/utils/schemas'
import { yupResolver } from '@hookform/resolvers/yup'
import { AuthStackParams } from 'src/navigation/AuthNavigator'
import { NativeStackScreenProps } from '@react-navigation/native-stack'

type RegisterScreenProps = NativeStackScreenProps<AuthStackParams, 'Register'>

type FormValuesProps = {
  email: string
  password: string
  confirmPassword: string
}

export const RegisterScreen = ({ navigation }: RegisterScreenProps) => {
  const { register, error, isLoading } = useAuth()
  const methods = useForm<FormValuesProps>({
    resolver: yupResolver(signUpSchema),
    defaultValues: {
      email: '',
      password: '',
      confirmPassword: '',
    },
  })
  const { handleSubmit } = methods

  const handleRegister = async (data: FormValuesProps) => {
    register(data.email, data.password)
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
            Sign up
          </Heading>
          <VStack pb={3}>
            <RHFInput key="email" name="email" label="Email" />
            <RHFInput name="password" type="password" label="Password" />
            <RHFInput name="confirmPassword" type="password" label="Confirm password" />
            <Button
              onPress={handleSubmit(handleRegister)}
              isLoading={isLoading}
              isLoadingText={'Signing Up'}
            >
              Sign Up
            </Button>

            <Box w="100%" alignItems="center" justifyContent="center">
              <Text textAlign="center">{error?.message}</Text>
            </Box>
            <Button
              w="100%"
              colorScheme="primary"
              variant="link"
              p={0}
              onPress={() => navigation.navigate('Login')}
            >
              Login
            </Button>
          </VStack>
        </Box>
      </KeyboardAvoidingView>
    </FormProvider>
  )
}
