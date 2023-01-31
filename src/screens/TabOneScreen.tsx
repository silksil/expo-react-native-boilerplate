import { Box, Button, Center, useColorMode, Text } from 'native-base'
import { FormProvider, useForm } from 'react-hook-form'
import RHFInput from 'src/components/hook_form/RHFInput'
import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from 'yup'
import RHFCheckBox from 'src/components/hook_form/RHFCheckBox'

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
  const { watch, handleSubmit } = methods

  const onSubmit = async (data: FormValuesProps) => {}
  return (
    <Center flex={1}>
      <Box p={4}>
        <Button onPress={toggleColorMode}>Toggle</Button>

        <Text fontSize="lg" display="flex" mb="20" color="text.secondary">
          Tab one
        </Text>
        <FormProvider {...methods}>
          <RHFInput label="First name" name="firstName" isRequired />
          <RHFInput label="Last name" name="lastName" />
          <RHFInput label="Password" name="password" isRequired />
          <RHFCheckBox label="Subscribe" name="subscribe" isRequired />
          <Button onPress={handleSubmit(onSubmit)}>Submit</Button>
        </FormProvider>
      </Box>
    </Center>
  )
}

export default function TabOneScreen() {
  return (
    <Box bg="background.default" height="1000">
      <PseudoPropsUsage />
      <Button mt={200}> hello</Button>
      <Box bg="background.default"></Box>
    </Box>
  )
}
