import { registerRootComponent } from 'expo'
import { StatusBar } from 'expo-status-bar'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import useCachedResources from './hooks/useCachedResources'
import Navigation from './navigation'
import ThemeProvider from './theme'
import './locales'
import { ApiProvider } from '@reduxjs/toolkit/dist/query/react'
import { baseApi } from './services/baseApi'

function App() {
  const isLoadingComplete = useCachedResources()

  if (!isLoadingComplete) {
    return null
  } else {
    return (
      <ApiProvider api={baseApi}>
        <ThemeProvider>
          <SafeAreaProvider>
            <Navigation />
            <StatusBar />
          </SafeAreaProvider>
        </ThemeProvider>
      </ApiProvider>
    )
  }
}

registerRootComponent(App)
