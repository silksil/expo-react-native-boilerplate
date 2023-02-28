import { registerRootComponent } from 'expo'
import { StatusBar } from 'expo-status-bar'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import useCachedResources from './hooks/useCachedResources'
import ThemeProvider from './theme'
import './locales'
import { Provider } from 'react-redux'
import { persistor, store } from './store/store'
import { PersistGate } from 'redux-persist/integration/react'
import Navigator from './navigation'
import { AuthProvider } from './auth/FirebaseContext'

function App() {
  const isLoadingComplete = useCachedResources()

  if (!isLoadingComplete) {
    return null
  } else {
    return (
      <AuthProvider>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <ThemeProvider>
              <SafeAreaProvider>
                <Navigator />
                <StatusBar />
              </SafeAreaProvider>
            </ThemeProvider>
          </PersistGate>
        </Provider>
      </AuthProvider>
    )
  }
}

registerRootComponent(App)
