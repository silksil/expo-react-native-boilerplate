import AsyncStorage from '@react-native-async-storage/async-storage'
import * as Localization from 'expo-localization'

const LANGUAGE_KEY = '@AppIntl:language'

/**
 * Used to detect the language of the device either from AsyncStorage or from the device itself.
 */
const languageDetector = {
  type: 'languageDetector',
  async: true,
  detect: async (callback: (arg0: string) => any) => {
    const storedLanguage = await AsyncStorage.getItem(LANGUAGE_KEY)
    if (storedLanguage) {
      return callback(storedLanguage)
    }

    let phoneLanguage = Localization.locale
    // We will get back a string like "en-US", but we return a string like "en" to match our language files.
    phoneLanguage = Localization.locale.split('-')[0]

    callback(phoneLanguage)

    return callback(phoneLanguage)
  },
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  init: () => {},
  cacheUserLanguage: (language: string) => {
    // Used to update the language in AsyncStorage
    AsyncStorage.setItem(LANGUAGE_KEY, language)
  },
}
export default languageDetector
