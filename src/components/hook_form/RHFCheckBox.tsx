import { useFormContext, Controller } from 'react-hook-form'
import { ICheckboxProps, FormControl, Checkbox } from 'native-base'
import { OverwriteType } from 'src/@types/helpers'
const { Label, ErrorMessage } = FormControl

type Props = OverwriteType<
  ICheckboxProps,
  {
    name: string
    label: string
    isRequired?: boolean
    value?: string
  }
>

export default function RHFCheckBox({ isRequired, name, label }: Props) {
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
              <Checkbox
                onChange={val => onChange(val)}
                value={value}
                defaultIsChecked={value}
                accessibilityLabel={`Checkbox for ${label}`}
              />
              <ErrorMessage>{error?.message}</ErrorMessage>
            </>
          )
        }}
      />
    </FormControl>
  )
}
