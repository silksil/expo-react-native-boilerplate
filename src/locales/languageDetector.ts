import AsyncStorage from '@react-native-async-storage/async-storage'
import * as Localization from 'expo-localization'

const languageDetector = {
  type: 'languageDetector',
  async: true,
  detect: async (callback: (arg0: string) => any) => {
    const storedLanguage = await AsyncStorage.getItem('@AppIntl:language')
    if (storedLanguage) {
      return callback(storedLanguage)
    }

    let phoneLanguage = Localization.locale
    // We will get back a string like "en-US". We
    // return a string like "en" to match our language
    // files.
    phoneLanguage = Localization.locale.split('-')[0]

    callback(phoneLanguage)

    return callback(phoneLanguage)
  },
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  init: () => {},
  cacheUserLanguage: (language: string) => {
    // Used to update the language in AsyncStorage
    AsyncStorage.setItem('@AppIntl:language', language)
  },
}
export default languageDetector
