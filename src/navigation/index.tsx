import React from 'react'
import { ColorSchemeName } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { BottomTabNavigator } from './BottomTabNavigator'
import { AuthStackNavigator } from './AuthNavigator'
import { useAuth } from 'src/auth/useAuth'
import useColorScheme from 'src/hooks/useColorScheme'
import { navigationDarkTheme, navigationLightTheme } from 'src/theme/colors'
import { useColorMode } from 'native-base'

export interface RootParams {
  scheme?: ColorSchemeName
}

export type RootStackParams = {
  Main: undefined
}

const StackNav = createNativeStackNavigator<RootStackParams>()

const RootNavigator: React.FC<RootParams> = () => {
  const { colorMode } = useColorMode()
  const { isAuthenticated } = useAuth()
  return (
    <NavigationContainer theme={colorMode === 'dark' ? navigationDarkTheme : navigationLightTheme}>
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
