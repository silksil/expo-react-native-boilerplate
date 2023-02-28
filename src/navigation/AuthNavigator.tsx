import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { SignupScreen } from 'src/screens/auth/Signup'

export type AuthStackParams = {
  Welcome?: undefined
  Login: {
    signInMethods: Array<string>
    email: string
    title?: string
  }
}

const StackNav = createNativeStackNavigator<AuthStackParams>()

export /**
 *Auth Stack Navigator for moving between Welcome and Login screen
 *
 * @return {*}
 */
const AuthStackNavigator = () => {
  return (
    <StackNav.Navigator screenOptions={{ gestureEnabled: true }} initialRouteName="Welcome">
      <StackNav.Screen name="Login" component={SignupScreen} options={{ headerShown: false }} />
    </StackNav.Navigator>
  )
}
