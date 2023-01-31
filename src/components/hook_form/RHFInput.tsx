import { useFormContext, Controller } from 'react-hook-form'
import { Input, IInputProps, FormControl } from 'native-base'
const { Label, ErrorMessage } = FormControl

type Props = IInputProps & {
  name: string
  label: string
}

export default function RHFInput({ isRequired, name, label, ...other }: Props) {
  const {
    control,
    formState: { errors },
  } = useFormContext()

  return (
    <FormControl isRequired={isRequired} isInvalid={name in errors}>
      <Label>{label}</Label>
      <Controller
        name={name}
        control={control}
        render={({ field: { value, onChange }, fieldState: { error } }) => {
          return (
            <>
              <Input
                onChangeText={val => onChange(val)}
                value={value}
                accessibilityLabel={`Input for ${label}`}
                {...other}
              />
              <ErrorMessage>{error?.message}</ErrorMessage>
            </>
          )
        }}
      />
    </FormControl>
  )
}
