import AsyncStorage from '@react-native-async-storage/async-storage'
import { ColorMode, StorageManager } from 'native-base'

const colorModeManager: StorageManager = {
  get: async () => {
    try {
      const val = await AsyncStorage.getItem('@color-mode')
      return val === 'dark' ? 'dark' : 'light'
    } catch (e) {
      return 'light'
    }
  },
  set: async (value: ColorMode) => {
    try {
      await AsyncStorage.setItem('@color-mode', value as string)
    } catch (e) {
      console.log(e)
    }
  },
}

export default colorModeManager
