import { InterfaceButtonProps } from 'native-base/lib/typescript/components/primitives/Button/types'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Button = (): Record<string, any> => {
  return {
    baseStyle: {
      rounded: 'xl',
    },
    defaultProps: {
      size: 'lg',
    },
    variants: {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      solid: ({ colorScheme }: InterfaceButtonProps) => {
        return {}
      },
      subtle: () => {
        return {}
      },
      outline: () => {
        return {}
      },
    },
  }
}

export default Button
