import { Box, Button, useColorMode, Text, VStack } from 'native-base'
import { FormProvider, useForm } from 'react-hook-form'
import RHFInput from 'src/components/hook_form/RHFInput'
import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from 'yup'
import RHFCheckBox from 'src/components/hook_form/RHFCheckBox'
import { useTranslation } from 'react-i18next'
import useLocales from 'src/locales/useLocales'
import { useTypedDispatch, useTypedSelector } from 'src/store/store'
import { toggleThemeMode } from 'src/store/settingsSlice'

type FormValuesProps = {
  firstName: string
  lastName: string
  password: string
  subscribe: boolean
}

const RegisterSchema = Yup.object().shape({
  firstName: Yup.string().required('First name is required'),
  lastName: Yup.string(),
  password: Yup.string()
    .min(6, 'Password must be at least 6 characters')
    .required('Password is required'),
})

function PseudoPropsUsage() {
  const { t } = useTranslation()
  const { allLangs, onChangeLang } = useLocales()
  const isDarkMode = useTypedSelector(state => state.settings.isDarkMode)
  const dispatch = useTypedDispatch()

  const { toggleColorMode } = useColorMode()
  const methods = useForm<FormValuesProps>({
    resolver: yupResolver(RegisterSchema),
    defaultValues: {
      firstName: 'test',
      lastName: '',
      password: '',
      subscribe: true,
    },
  })
  const { handleSubmit } = methods

  const onSubmit = async (data: FormValuesProps) => {
    console.log('data', data)
    return
  }

  return (
    <Box p={4}>
      <Button onPress={toggleColorMode}>Toggle</Button>
      {allLangs.map(lang => (
        <Button onPress={() => onChangeLang(lang.value)}>{lang.label}</Button>
      ))}

      <Text fontSize="lg" display="flex" mb="20" color="text.secondary">
        {t('common.learnReact')}
        Tab one
      </Text>
      <FormProvider {...methods}>
        <VStack space={5}>
          <RHFInput label="First name" name="firstName" isRequired />
          <RHFInput label="Last name" name="lastName" />
          <RHFInput label="Password" name="password" isRequired />
          <RHFCheckBox label="Subscribe" name="subscribe" isRequired />
          <Button onPress={handleSubmit(onSubmit)}>Submit</Button>
        </VStack>
      </FormProvider>
    </Box>
  )
}

export default function TabOneScreen() {
  return (
    <Box bg="background.default" height="1000" width="100%">
      <PseudoPropsUsage />
      <Box bg="background.default"></Box>
    </Box>
  )
}
