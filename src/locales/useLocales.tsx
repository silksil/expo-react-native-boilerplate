import { useTranslation } from 'react-i18next'

export const allLangs = [
  {
    label: 'English',
    value: 'en',
  },
  {
    label: 'Dutch',
    value: 'nl',
  },
]

export default function useLocales() {
  const { i18n } = useTranslation()

  const handleChangeLanguage = (newlang: string) => {
    i18n.changeLanguage(newlang)
  }

  return {
    onChangeLang: handleChangeLanguage,
    currentLang: i18n.language,
    allLangs,
  }
}
