import enLocales from './langs/en/index'
import nlLocales from './langs/nl/index'
import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import languageDetector from './languageDetector'

export const defaultNS = 'translation'

export const resources = {
  en: { translation: enLocales },
  nl: { translation: nlLocales },
}

i18n
  //@ts-ignore
  .use(languageDetector)
  .use(initReactI18next)
  .init({
    resources,
    defaultNS,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  })

export default i18n
