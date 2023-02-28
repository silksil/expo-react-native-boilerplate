import React from 'react'
import { ColorSchemeName } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { navigationDarkTheme, navigationLightTheme } from 'src/constants/theme/colors'
import { BottomTabNavigator } from './BottomTabNavigator'
import { AuthStackNavigator } from './AuthNavigator'
import { useAuth } from 'src/auth/useAuth'

export interface RootParams {
  scheme?: ColorSchemeName
}

export type RootStackParams = {
  Main: undefined
}

const StackNav = createNativeStackNavigator<RootStackParams>()

const RootNavigator: React.FC<RootParams> = ({ scheme }) => {
  const { isAuthenticated } = useAuth()
  return (
    <NavigationContainer theme={scheme === 'dark' ? navigationDarkTheme : navigationLightTheme}>
      <StackNav.Navigator>
        <StackNav.Screen
          name="Main"
          component={!isAuthenticated ? BottomTabNavigator : AuthStackNavigator}
          options={{ headerShown: false }}
        />
      </StackNav.Navigator>
    </NavigationContainer>
  )
}

RootNavigator.defaultProps = {
  scheme: 'light',
}

export default RootNavigator
