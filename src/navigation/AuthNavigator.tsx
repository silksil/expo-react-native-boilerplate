import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { RegisterScreen } from 'src/screens/auth/RegisterScreen'
import { LoginScreen } from 'src/screens/auth/LoginScreen'

export type AuthStackParams = {
  Welcome?: undefined
  Login?: undefined
  Register?: undefined
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
      <StackNav.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
      <StackNav.Screen
        name="Register"
        component={RegisterScreen}
        options={{ headerShown: false }}
      />
    </StackNav.Navigator>
  )
}
