import enLocales from './langs/en'
import nlLocales from './langs/nl'
import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import languageDetector from './languageDetector'

const resources = {
  en: { translation: enLocales },
  nl: { translation: nlLocales },
}

i18n
  //@ts-ignore
  .use(languageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  })

export default i18n
